/**
 * LightGalleryController
 *
 * @description :: Server-side logic for managing lightgalleries
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  index: function (req, res) {
    return res.view('index', {
      title: 'Ross Edlin'
    });
  }
};
