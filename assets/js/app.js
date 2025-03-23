AFRAME.registerComponent('sound-trigger', {
  init: function () {
    const marker = this.el;
    const audioEl = document.querySelector('#my-sound');

    marker.addEventListener('markerFound', () => {
      console.log('Marker found — playing sound');
      audioEl.play().catch(err => {
        console.warn('Autoplay failed:', err);
      });
    });

    marker.addEventListener('markerLost', () => {
      console.log('Marker lost — stopping sound');
      audioEl.pause();
      audioEl.currentTime = 0;
    });
  }
});
