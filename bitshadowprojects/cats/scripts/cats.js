/*var worldEl = document.createElement('div');
worldEl.id = 'worldA';
document.body.appendChild(worldEl);*/

var worldA = new BitShadowMachine.World(document.getElementById('worldA'), {
  width: 700,
  height: 450,
  resolution: 4,
  colorMode: 'rgba',
  backgroundColor: [166, 124, 82],
  noMenu: true
});

/**
 * Create a new BitShadowMachine system.
 */
BitShadowMachine.System.init(function() {

  var chai = this.add('Anim', {
    location: new BitShadowMachine.Vector(10, 90),
    frames: framesChai
  });

  var tickles = this.add('Anim', {
    location: new BitShadowMachine.Vector(56, 80),
    frames: framesTickles,
    frameDuration: 2
  });

  var lilly = this.add('Anim', {
    location: new BitShadowMachine.Vector(96, 58),
    frames: framesLilly,
    frameDuration: 3
  });

  var container = document.getElementById('container_world');
  container.style.boxShadow = 'inset 0px 200px 0 0 rgb(198, 156, 109)';

}, worldA);