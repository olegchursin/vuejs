new Vue ({
  el: '#exercise',
  data: {
    value: '',
    valueEn: ''
  },
  methods: {
    alertTrigger: function() {
      alert("Hey! Hey!");
    },
    onKeydown: function(event) {
      this.value = event.target.value;
    },
    onKeydownEnter: function(event) {
      this.valueEn = event.target.value;
    }
  }
});
