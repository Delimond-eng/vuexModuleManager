<template>
    <div>
        <card-vue></card-vue>

        <button class="btn btn-primary mt-2" @click="() => $showAlert('提示 World')">Show Alert</button>
    </div>
</template>
<script>
export default {
    name: 'Features'
}
</script>


