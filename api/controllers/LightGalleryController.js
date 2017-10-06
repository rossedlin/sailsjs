/**
 * LightGalleryController
 *
 * @description :: Server-side logic for managing lightgalleries
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  index: function (req, res) {
    return res.view('lightgallery');
  },
  hi: function (req, res) {
    return res.send('Hi there!');
  }
};
