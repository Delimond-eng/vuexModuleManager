<template>
    <nav class="navbar navbar-expand-lg fixed-top navbar-dark bg-primary">
        <div class="container-fluid d-flex justify-content-between">
            <a class="navbar-brand" href="#">VueTree App</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
                aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarText">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link :to="{ name: 'home' }" class="nav-link"
                            :class="currentRoute == 'home' ? 'active' : ''" aria-current="page"
                            href="#">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{ name: 'features' }" class="nav-link"
                            :class="currentRoute == 'features' ? 'active' : ''">Features</router-link>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Pricing</a>
                    </li>
                </ul>

                <div class="d-flex">
                    <button class="btn btn-outline-light" type="submit">Login</button>
                </div>

            </div>
        </div>
    </nav>
</template>

<script>
import { ref, onMounted, watch } from 'vue';
import { useRouter } from 'vue-router'
export default {
    name: "Header",
    setup(props) {
        const currentRoute = ref('');
        const router = useRouter();
        onMounted(() => {
            setInterval(() => {
                let route = router.currentRoute.value.name;
                currentRoute.value = route;
            }, 1000);
        })

        return { currentRoute };

    }
}
</script>