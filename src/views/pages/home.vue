<template>
    <div class="container">
        <div class="mt-5">
            <post-component />
        </div>
        <p id="paragraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus soluta quas earum
            repudiandae, nihil
            facilis aspernatur distinctio debitis suscipit impedit itaque quo ex sunt eligendi exercitationem
            repellendus? Eveniet, asperiores quo.</p>
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

        function changeParagraphColor() {
            let p = $("#paragraph");
            p.css("color", "red");
        }

        onMounted(() => {
            if (loggedIn) {
                showAlert("Hello World");
            }
            changeParagraphColor();
        });
    },
}
</script>
