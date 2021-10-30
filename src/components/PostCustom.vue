<template>
    <div class="container">
        <div class="top-inner-container">
            <p class="date">{{ date }}</p>
            <p class="category">#{{ category }}</p>
        </div>
        <p class="title">{{ title }}</p>
        <p class="article">
            {{ text }}
        </p>
        <ul class="keywords">
            tags:
            <li class="keyword-li" v-for="keyword in keywords">
                #{{ keyword }}
            </li>
        </ul>
        <button class="expand-button" ref="expand-button" v-on:click="expandArticle">
            read more...
        </button>
    </div>
</template>

<script>
export default {
    name: "PostCustom",
    props: {
        category: String,
        title: String,
        date: String,
        text: String,
        keywords: Array,
    },
    created() {
        
    },
    methods: {
        expandArticle() {
            var expandButtonElement = this.$el.querySelector(".expand-button");
            var articleElement = this.$el.querySelector('.article');
            if (expandButtonElement.textContent.includes("read more...")) {
                expandButtonElement.textContent = "collapse";
                articleElement.style.height = "100%";
            } else {
                articleElement.style.height = "100px";
                expandButtonElement.textContent = "read more...";
            }
        },
    },
};
</script>
<style scoped>
.container {
    display: block;
    border: 4px solid wheat;
    border-radius: 10px;
    margin: auto;
    background-color: #00589f;
    padding: 20px;
    max-width: 75%;
}
.container:hover {
    box-shadow: 0px 0px 20px palegreen;
}
.top-inner-container {
    display: block;
    margin: auto;
    padding-top: 5px;
    padding-bottom: 50px;
}
.category {
    font-size: 18px;
    margin: auto;
    float: left;
    padding: 10px;
    /* display: block; */
    font-style: italic;
}
.title {
    font-size: 30px;
    margin: auto;
    padding: 5px;
    padding-top: 10px;
    display: inline-flex;
}
.date {
    font-size: 18px;
    margin: auto;
    float: right;
    padding: 10px;
    /* display: block; */
    font-style: italic;
}
.article {
    font-size: 16px;
    margin: auto;
    padding: 5px;
    height: 100px;
    overflow: hidden;
}
.keywords {
    display: block;
    margin: auto;
    padding: 0px;
    color: wheat;
}
.keyword-li {
    font-size: 16px;
    display: inline;
    margin: auto;
    padding: 5px;
}
.expand-button {
    font-size: 16px;
    font-weight: bolder;
    font-style: italic;
    border: none;
    background: none;
    padding-top: 10px;
    margin: auto;
    color: wheat;
}
p {
    color: wheat;
}
</style>