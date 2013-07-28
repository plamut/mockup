define([
  'chai',
  'jquery',
  'mockup-registry',
  'mockup-patterns-leaflet'
], function(chai, $, registry, Leaflet) {
  "use strict";

  var expect = chai.expect,
      mocha = window.mocha;

  mocha.setup('bdd');
  mocha.globals(['_leaflet_resize3']);
  $.fx.off = true;

  /* ==========================
   TEST: Leaflet
  ========================== */

  describe("Leaflet", function() {
    it("display a marker", function() {
      var $el = $('' +
        '<div class="pat-leaflet" data-pat-leaflet="' +
        '  marker: [43.57484912685576, 1.4064323902130127];' +
        '"/>');
      registry.scan($el);
      expect($('.leaflet-map-pane', $el).size()).to.equal(1);
      expect($('img[src$="/18/132096/95749.jpeg"]', $el).size()).to.equal(1);
    });
  });

});
