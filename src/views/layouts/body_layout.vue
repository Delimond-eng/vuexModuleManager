<template>
    <router-view v-slot="{ Component }">
        <transition name="route" mode="out-in">
            <component :is="Component"></component>
        </transition>
    </router-view>
</template>

<style>
/*route transition*/
.route-enter-from {
    opacity: 0;
    transform: translateX(100px);
}

.route-enter-active {
    transition: all 0.5s ease-out;
}

.route-leave-to {
    opacity: 0;
    transform: translateX(-100px);
}

.route-enter-active {
    transition: all 0.5s ease-in;
}
</style>