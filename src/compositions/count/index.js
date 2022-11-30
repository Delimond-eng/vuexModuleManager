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
    onMounted(() => {
      window.setInterval(() => {
        n.value++;
      }, 1000);
    });
    return { n };
  },
};

export default count;
