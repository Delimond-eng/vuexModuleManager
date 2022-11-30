import { ref, onMounted } from "vue";

const count = {
  useCounter() {
    const count = ref(0);
    const increment = function () {
      count.value++;
    };
    const decrement = function () {
      count.value--;
    };
    return { count, increment, decrement };
  },

  userAutoCounter() {
    const n = ref(0);
    let t = null;
    onMounted(() => {
      t = window.setInterval(() => {
        n.value++;
      }, 1000);
    });
    const stopCounter = function () {
      if (t !== null) {
        window.clearInterval(t);
        t = null;
      }
    };
    return { n, stopCounter };
  },
};

export default count;
