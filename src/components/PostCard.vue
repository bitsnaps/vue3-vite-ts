<script lang="ts" setup>

import { ref, onMounted } from "vue";
import axios /*, { AxiosError } */ from "axios";

type Post = {
    title: string,
    body: string
}

const post = ref<Post>();
const loading = ref(true);
const error = ref<string | null | void>(null);

const fetchPost = async () => {
    try {
        const { data } = await axios.get(
            "https://jsonplaceholder.typicode.com/posts/1"
        );
        post.value = data;
    } catch (err /*: AxiosError | unknown*/) {
        if (axios.isAxiosError(err)) {
            error.value = err.message;
        } else {
            error.value = 'Error occurred'
        }
    } finally {
        loading.value = false;
    }
};

onMounted(() => {
    fetchPost();
});

</script>

<template>
    <div>
        <div v-if="post">
            <h1 data-testid="post-title">{{ post.title }}</h1>
            <p data-testid="post-body">{{ post.body }}</p>
        </div>
        <p v-if="loading" data-testid="loader">Loading...</p>
        <p v-if="error" data-testid="error-message">{{ error }}</p>
    </div>
</template>