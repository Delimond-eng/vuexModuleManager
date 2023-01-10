<template>
    <div>
        <div v-if="loading" class="row mt-5 d-flex align-content-center justify-content-center">
            <div class="col-md-3" v-for="i in 4" :key="i">
                <div class="card" aria-hidden="true">
                    <img src="https://www.colorbook.io/imagecreator.php?hex=0000ff&width=300&height=320&text=text"
                        height="150" class="card-img-top placeholder-glow" alt="placehoder image">
                    <div class="card-body">
                        <h5 class="card-title placeholder-glow">
                            <span class="placeholder rounded col-6"></span>
                        </h5>
                        <p class="card-text placeholder-glow">
                            <span class="placeholder col-7 rounded"></span>
                            <span class="placeholder col-4 rounded"></span>
                            <span class="placeholder col-4 rounded"></span>
                            <span class="placeholder col-6 rounded"></span>
                            <span class="placeholder col-8 rounded"></span>
                        </p>

                    </div>
                </div>
            </div>
        </div>
        <div v-else>
            <div class="row d-flex align-content-center justify-content-center">
                <div class="col-md-3" v-for="post in posts" :key="post.id">
                    <div class="card" style="width: 18rem;">
                        <img src="https://placebear.com/640/360" height="150" class="card-img-top"
                            alt="placehoder image">
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
