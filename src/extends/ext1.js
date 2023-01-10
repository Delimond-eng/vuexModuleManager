export default {
  name: "Ext1",
  data() {
    return {
      count: 0,
    };
  },

  methods: {
    increment() {
      this.count++;
    },
    decrement() {
      if (this.count <= 1) {
        return;
      }
      this.count--;
    },
  },
};
