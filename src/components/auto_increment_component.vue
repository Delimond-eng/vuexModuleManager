<template>
    <div>
        <h1>{{ count }}</h1>
        <br>
        <button @click="increment">Increment</button>
        <button @click="decrement">Decrement</button>
    </div>
</template>

<script>
import compositions from "@/compositions"
export default {
    name: 'auto_increment_component',
    setup(props) {
        const { count, increment, decrement } = compositions.count.useCounter();
        return { count, increment, decrement };
    }
}
</script>