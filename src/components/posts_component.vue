<template>
    <div>
        <p v-if="loading">Loading data...</p>
        <div v-else>
            <ul class="post-list">
                <li class="post-item" v-for="post in posts" :key="post.id">
                    <strong class="item-title">{{ post.title }}</strong><br>
                    <p class="item-body">{{ post.body }}</p>
                </li>
            </ul>
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

<style>
.post-item {
    display: flex;
    flex-direction: column;
    margin-bottom: 5px;
    align-items: flex-start;
    align-content: flex-start;
    justify-items: flex-start;
    justify-content: flex-start;

}

.post-item .item-title {
    align-items: flex-start
}

.post-item .item-body {
    align-items: flex-start;
    align-content: flex-start;
    justify-items: flex-start;
    justify-content: flex-start
}
</style>