var passport      = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var GoogleStrategy   = require('passport-google-oauth').OAuth2Strategy;
var FacebookStrategy = require('passport-facebook').Strategy;

module.exports = function (app, developerModel) {
    app.post ("/api/developer", createDeveloper);
    app.get ("/api/developer", findAllDevelopers);
    app.get ("/api/developer/:username", findDeveloperByUsername);
    app.put ("/api/developer/:username", updateDeveloper);
    app.delete ("/api/developer/:username", deleteDeveloper);

    var auth = authorized;
    app.post  ('/api/login', passport.authenticate('local'), login);
    app.post  ('/api/logout',         logout);
    app.get   ('/api/loggedin',       loggedin);

    app.get   ('/auth/google',   passport.authenticate('google', { scope : ['profile', 'email'] }));
    app.get   ('/auth/facebook', passport.authenticate('facebook', { scope : 'email' }));

    app.get('/auth/facebook/callback',
        passport.authenticate('facebook', {
            successRedirect: '/#/profile',
            failureRedirect: '/#/login'
        }));
    app.get   ('/auth/google/callback',
        passport.authenticate('google', {
            successRedirect: '/#/profile',
            failureRedirect: '/#/login'
        }));

    var googleConfig = {
        clientID        : process.env.GOOGLE_CLIENT_ID,
        clientSecret    : process.env.GOOGLE_CLIENT_SECRET,
        callbackURL     : process.env.GOOGLE_CALLBACK_URL
    };

    var facebookConfig = {
        clientID        : process.env.FACEBOOK_CLIENT_ID,
        clientSecret    : process.env.FACEBOOK_CLIENT_SECRET,
        callbackURL     : process.env.FACEBOOK_CALLBACK_URL
    };

    passport.use(new FacebookStrategy(facebookConfig, facebookStrategy));
    passport.use(new GoogleStrategy(googleConfig, googleStrategy));
    passport.use(new LocalStrategy(localStrategy));
    passport.serializeUser(serializeUser);
    passport.deserializeUser(deserializeUser);

    function facebookStrategy(token, refreshToken, profile, done) {
        developerModel
            .findUserByFacebookId(profile.id)
            .then(
                function(user) {
                    if(user) {
                        return done(null, user);
                    } else {
                        var names = profile.displayName.split(" ");
                        var username = profile.displayName.replace(/ /g,"");
                        var email = profile.emails ? profile.emails[0].value:"";
                        var newFacebookUser = {
                            username: username,
                            firstName: names[0],
                            lastName:  names[names.length - 1],
                            email:     email,
                            facebook: {
                                id:    profile.id,
                                token: token
                            }
                        };
                        return developerModel.createDeveloper(newFacebookUser);
                    }
                },
                function(err) {
                    if (err) { return done(err); }
                }
            )
            .then(
                function(user){
                    return done(null, user);
                },
                function(err){
                    if (err) { return done(err); }
                }
            );
    }

    function googleStrategy(token, refreshToken, profile, done) {
        developerModel
            .findUserByGoogleId(profile.id)
            .then(
                function(user) {
                    if(user) {
                        return done(null, user);
                    } else {
                        var email = profile.emails[0].value;
                        var emailParts = email.split("@");
                        var newGoogleUser = {
                            username:  emailParts[0],
                            firstName: profile.name.givenName,
                            lastName:  profile.name.familyName,
                            email:     email,
                            google: {
                                id:    profile.id,
                                token: token
                            }
                        };
                        return developerModel.createDeveloper(newGoogleUser);
                    }
                },
                function(err) {
                    if (err) { return done(err); }
                }
            )
            .then(
                function(user){
                    return done(null, user);
                },
                function(err){
                    if (err) { return done(err); }
                }
            );
    }

    function localStrategy(username, password, done) {
        developerModel
            .findDeveloperByCredentials({username: username, password: password})
            .then(
                function(user) {
                    if (!user) { return done(null, false); }
                    delete user.password;
                    return done(null, user);
                },
                function(err) {
                    if (err) { return done(err); }
                }
            );
    }

    function authorized (req, res, next) {
        if (!req.isAuthenticated()) {
            res.send(401);
        } else {
            next();
        }
    };

    function serializeUser(user, done) {
        delete user.password;
        done(null, user);
    }

    function deserializeUser(user, done) {
        developerModel
            .findDeveloperById(user._id)
            .then(
                function(user){
                    delete user.password;
                    done(null, user);
                },
                function(err){
                    done(err, null);
                }
            );
    }

    function loggedin(req, res) {
        res.send(req.isAuthenticated() ? req.user : '0');
    }

    function logout(req, res) {
        req.logOut();
        res.send(200);
    }

    function login(req, res) {
        var user = req.user;
        delete user.password;
        res.json(user);
    }

    function deleteDeveloper (req, res) {
        var username = req.params.username;
        developerModel
            .deleteDeveloper (username)
            .then (
                function (stats) {
                    res.send(200);
                },
                function (err) {
                    res.status(400).send(err);
                }
            );
    }

    function updateDeveloper (req, res) {
        var username = req.params.username;
        var developer = req.body;
        developerModel
            .updateDeveloper (username, developer)
            .then (
                function (stats) {
                    res.send(200);
                },
                function (err) {
                    res.status(400).send(err);
                }
            );
    }

    function findDeveloperByUsername (req, res) {
        developerModel
            .findDeveloperByUsername (req.params.username)
            .then (
                function (developer) {
                    delete developer.password;
                    res.json (developer);
                },
                function (err) {
                    res.status(400).send(err);
                }
            );
    }

    function findAllDevelopers (req, res) {
        developerModel
            .findAllDevelopers ()
            .then (
                function (developers) {
                    res.json (developers);
                },
                function (err) {
                    res.status(400).send(err);
                }
            );
    }

    function createDeveloper (req, res) {
        var developer = req.body;
        developerModel
            .createDeveloper (developer)
            .then (
                function (developer) {
                    res.json (developer);
                },
                function (err) {
                    res.status (400).send ( err);
                }
            );
    }
};