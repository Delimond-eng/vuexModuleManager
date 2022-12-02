<template>
    <div class="container">
        <div class="mt-5">
            <post-component />
        </div>
    </div>
</template>

<script>
import PostComponent from '@/components/posts_component.vue'
export default {
    name: 'Home',
    components: {
        PostComponent
    }
}
</script>
