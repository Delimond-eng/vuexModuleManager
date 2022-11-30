<template>
    <div>

        <p>Classic counter</p>
        <h1>{{ count }}</h1>
        <br>
        <button @click="increment">Increment</button>
        <button @click="decrement">Decrement</button>

        <p>Auto counter</p>
        <h1>{{  auto  }}</h1>
    </div>
</template>

<script>
import compositions from "@/compositions"
export default {
    name: 'auto_increment_component',
    setup(props) {
        const { count, increment, decrement } = compositions.count.useCounter();
        const { auto } = compositions.count.userAutoCounter();
        return { count, increment, decrement, auto };
    }
}
</script>