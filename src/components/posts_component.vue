<template>
    <div>
        <p v-if="loading" class="text-center mt-5"> <span class="spinner-border spinner-border-sm"></span> Loading
            data...</p>
        <div v-else>
            <div class="row d-flex align-content-center justify-content-center">
                <div class="col-md-3" v-for="post in posts" :key="post.id">
                    <div class="card m-3" style="width: 18rem;">
                        <img src="https://placebear.com/640/360" class="card-img-top" alt="placehoder image">
                        <div class="card-body">
                            <h5 class="card-title fw-bold">{{ post.title }}</h5>
                            <p class="card-text">{{ post.body }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import compositions from "@/compositions";
export default {
    name: 'posts-component',
    setup(props) {
        const { posts, loading } = compositions.post.usePost();
        return {
            posts, loading
        };
    }
}
</script>
