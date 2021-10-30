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
import articlesMoch from "../moch/database.json";
import FooterCustom from "../components/FooterCustom.vue";
import HeaderCustom from "../components/HeaderCustom.vue";
import PostCustom from "../components/PostCustom.vue";

export default {
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
.articles {
    padding-left: 30px;
    padding-right: 30px;
    padding-bottom: 50px;
}
</style>