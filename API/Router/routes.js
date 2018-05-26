'use strict';
module.exports = function(app) {
  var controller = require('../Controller/controller.js');

  app.route('/send')
    .post(controller.send);

  app.route('/balanceOf:address')
    .get(controller.balanceOf);

};
