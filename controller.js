'use strict';

var response = require('./res');
var connection = require('./connection');

exports.index = function(req,res){
    response.ok("The REST API application is already running",res)
};

// Displays all data su
exports.showalldatasu = function(req,res){
    connection.query('SELECT * FROM su', function(error, rows, fileds){
        if(error){
            connection.log(error);
        }else {
            response.ok(rows, res)
        }
    });
};