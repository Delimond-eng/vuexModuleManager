import { useStore } from "vuex";
import { ref, onMounted } from "vue";

const s = {
  usePost() {
    // it used for trigger vuex store
    const store = useStore();
    //--------------//

    //var
    const posts = ref([]);
    const loading = ref(false);
    //end var

    //functions
    const getPosts = async function () {
      loading.value = true;
      setTimeout(() => {
        store.dispatch("main/fetchPosts").then((data) => {
          loading.value = false;
          posts.value = data;
        });
      }, 2000);
    };

    //mounted hook
    onMounted(() => {
      getPosts();
    });

    //render data to view
    return { posts, loading };
  },
};
export default s;
