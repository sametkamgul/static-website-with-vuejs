<template>
    <HeaderCustom />
    <div
        class="articles"
        v-for="articleItem in articles"
        :key="articleItem.title"
    >
        <PostCustom
            :category="articleItem.category"
            :title="articleItem.title"
            :date="articleItem.date"
            :text="articleItem.text"
            :keywords="articleItem.keywords"
        />
    </div>
    <FooterCustom />
</template>

<script>
import articlesMoch from "./moch/database.json";
import FooterCustom from "./components/FooterCustom.vue";
import HeaderCustom from "./components/HeaderCustom.vue";
import PostCustom from "./components/PostCustom.vue";

export default {
    name: "App",
    components: {
        FooterCustom,
        HeaderCustom,
        PostCustom,
    },
    data() {
        console.log(articlesMoch);
        return { articles: articlesMoch };
    },
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    max-width: 100%;
    overflow-y: hidden;
}
body {
    background-color: #242424;
    /* width: 100%; */
}
.articles {
    padding-left: 30px;
    padding-right: 30px;
    padding-bottom: 50px;
}
</style>
