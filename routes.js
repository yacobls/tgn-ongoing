'use strict';

module.exports = function(app) {
    var jsonku = require('./controller');

    app.route('/')
        .get(jsonku.index);

    app.route('/appear')
        .get(jsonku.showalldatasu);
    
    app.route('/appear/:id')
        .get(jsonku.showallsudatabyid);
}