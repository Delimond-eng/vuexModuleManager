<template>
    <div class="container">
        <div class="mt-5">
            <post-component />
        </div>
    </div>
</template>

<script>
import PostComponent from '@/components/posts_component.vue'
import { inject, onMounted } from 'vue';
export default {
    name: 'Home',
    components: {
        PostComponent
    },
    setup(props) {
        const loggedIn = inject("logged-in", false);
        const showAlert = inject("show-alert");

        onMounted(() => {
            if (loggedIn) {
                showAlert("Hello World");
            }
        });
    },
}
</script>
