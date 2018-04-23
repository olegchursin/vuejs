new Vue ({
  el: '#app',
  data: {
    value: 0
  },
  computed: {
    result() {
      return this.value > 37 ? 'Done' : 'Not there yet';
    }
  },
  watch: {
    result: function(value) {
      let bind = this;
      setTimeout(function() {
        bind.value = 0;
      },5000);
    }
  }
});
