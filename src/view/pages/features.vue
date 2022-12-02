<template>
    <div>
        <h1 class="m-3">Features</h1>
    </div>
</template>

<script>
import { ref } from "vue";
import Modal from "@/components/bs5/modal.vue";

export default {

    components: {
        Modal
    },
    setup(props) {
        const modal = ref(null);

        const showModal = function () {
            modal.value.show();
        }

        return { modal, showModal }

    }
}
</script>