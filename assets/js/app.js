AFRAME.registerComponent('sound-trigger', {
    init: function () {
      const marker = this.el;
      const sound = marker.querySelector('#hiro-audio');
  
      marker.addEventListener('markerFound', () => {
        console.log('Hiro marker found — playing sound');
        if (sound && sound.components.sound) {
          sound.components.sound.playSound();
        }
      });
  
      marker.addEventListener('markerLost', () => {
        console.log('Hiro marker lost — stopping sound');
        if (sound && sound.components.sound) {
          sound.components.sound.stopSound();
        }
      });
    }
  });
  