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

// Show all su data by id
exports.showallsudatabyid = function(req,res){
    let id = req.params.id;
    connection.query('SELECT * FROM su WHERE id_su = ?', [id],
        function(error, rows, fileds){
            if(error){
                connection.log(error);
        }else {
            response.ok(rows, res)
        }
    });
};

// Add data su (NOT FIXED IN THE PHOTO SECTION)
exports.adddatasu = function(req,res){
    var nama_su = req.body.nama_su;
    var email_su = req.body.email_su;
    var password_su = req.body.password_su;

    connection.query('INSERT INTO su (nama_su,email_su,password_su) VALUES(?,?,?)',
    [nama_su, email_su, password_su],
    function (error, rows, fields){
        if(error){
            console.log(error);
        }else {
            response.ok("Successfully Added Data!",res)
        }
    });
};