'use strict';

//import React, {Component} from "react";
import {
    AsyncStorage
} from 'react-native';

import buffer from 'buffer';

import { zipObject } from 'lodash';
//var _ = require('lodash');

const userAuthKey = 'userAuthVal';
const userResultKey = 'userResultVal';

class UserAuthService {

    getAuthInfo(cb) {
        AsyncStorage.multiGet([userAuthKey, userResultKey], (err, val) => {
            var arr = new Array();
            val.map((result, i, valu) => {
                let key = valu[i][0];
                let val2 = valu[i][1];
                arr[key] = val2;
            });
            if (err) {
                // if error return error on callback function
                return cb(err);
            }

            if (!val) {
                // if empty result return empty on callback function
                return cb({errorMessage: "No data found."});
            }

            // AsynchStorage result is an nested array. UserAuthService is not deal with the nested array
            // lodash library is used to change the 'nested array' to an 'object'
            //var zippedObj = zipObject(val);

            if (!arr[userAuthKey]) {
                // if empty result return empty on callback function
                return cb({errorMessage: "Auth key not found."});
            }

            var authInfo = {
                header: {
                    Authorization: 'Basic ' + arr[userAuthKey]
                },
                userResultVal: JSON.parse(arr[userResultKey])
            }

            //return cb();
            return cb(null, authInfo);
        });
    }

    login(creds, cb) {

        //
        // Start: Login serive
        //
        var b = new buffer.Buffer(creds.username + ':' + creds.password);
        var encodedAuth = b.toString('base64');
        console.log("encodedAuth =>");
        console.log(encodedAuth);

        // fetch("https://api.github.com/search/repositories?q=react")
        fetch("https://api.github.com/user", {
            headers: {
                'Authorization': 'Basic ' + encodedAuth
            }
        })
            .then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response;
                }

                // if (response.status == 401) {
                //     throw "Bad credentials";
                // }
                // throw "Unknown error";
                throw {
                    badCredentials: response.status == 401,
                    unknownError: response.status != 401
                }
            })
            .then((response) => {
                return response.json();
            })
            .then((results) => {
                console.log(results);
                //this.setState({success: true, loading: false});
                AsyncStorage.multiSet([
                    [userAuthKey, encodedAuth],
                    [userResultKey, JSON.stringify(results)]
                ], (err) => {
                    if (err) {
                        throw err;
                    }
                    console.log("Checking ==>");
                    console.log(results);
                    return cb({ success: true, loading: false });
                });
                //return cb({success: true, loading: false});
            })
            .catch((err) => {
                //console.log('Logon failed: '+err);
                //this.setState(err);
                return cb(err);
            })
            .finally(() => {
                //this.setState({loading:false});
                return cb({ loading: false });
            })
        //
        // End: Login serive
        //

    }

    signOut(cb) {

        try {
            AsyncStorage.multiRemove([userAuthKey, userResultKey], (err) => {
                if (err) {
                    throw err;
                }
                console.log("Sign Out in Async ==>");
                return cb(null, { success: true, loading: false });
            });
        } catch (err) {
            // Error saving data
            return cb(err);
        }

    }

}

module.exports = new UserAuthService();