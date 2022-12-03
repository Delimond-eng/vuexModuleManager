<template>
    <div>
        <header-layout />
        <body-layout />
    </div>
</template>

<script>
import HeaderLayout from './layouts/header_layout.vue'
import BodyLayout from './layouts/body_layout.vue';
export default {
    name: 'index',
    components: {
        HeaderLayout,
        BodyLayout
    }
}
</script>