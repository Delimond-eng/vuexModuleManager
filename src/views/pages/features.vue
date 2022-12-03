<template>
    <div>
        <card-vue></card-vue>
        <p v-font-size:medium>Medium</p>
        <p v-font-size:small>Small</p>
        <p v-font-size:large>Large</p>

        <button class="btn btn-primary mt-2" @click="() => $showAlert('提示 World')">Show Alert</button>
    </div>
</template>
<script>
export default {
    name: 'Features'
}
</script>


