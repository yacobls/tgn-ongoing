'use strict';

var response = require('./res');
var connection = require('./connection');

exports.index = function(req,res){
    response.ok("The REST API application is already running")
};