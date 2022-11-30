<template>
    <div>

        <p>Mon Label {{ label }}</p>

        <p>Classic counter</p>
        <h1>{{ counter.count }}</h1>
        <br>
        <button @click="counter.decrement">Decrement</button>
        <button @click="counter.increment">Increment</button>
        <p>Auto counter</p>
        <h1>{{ auto.n }}</h1>
        <button @click="auto.stopCounter">
            Stop counter
        </button>
    </div>
</template>

<script>
import compositions from "@/compositions"
export default {
    name: 'auto_increment_component',
    props: {
        label: String
    },
    setup(props) {
        console.log(props.label);
        const { count, increment, decrement } = compositions.count.useCounter();
        const { n, stopCounter } = compositions.count.userAutoCounter();
        return {
            counter: {
                count, increment, decrement,
            },
            auto: {
                stopCounter, n,
            },
            props
        };
    }
}
</script>