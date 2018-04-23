new Vue ({
  el: '#app',
  data: {
    counter: 0,
    x: 0,
    y: 0
  },
  methods: {
    count: function(step) {
      return this.counter += step;
    },
    updateCoordinates: function(event) {
      this.x = event.clientX;
      this.y = event.clientY;
    },
    dummy: function(event) {
      event.stopPropagation();
    }
  }
});
