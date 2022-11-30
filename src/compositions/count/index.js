import { ref } from "vue";

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
};

export default count;
