<template>
    <div class="container">
        <p class="date">{{ date }}</p>
        <p class="category">#{{ category }}</p>
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
    </div>
    <button class="expand-button">expand</button>
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
        console.log('button created');
        // TODO: add button listener to expand article here!!!
    }
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
.category {
    font-size: 18px;
    margin: auto;
    float: left;
    padding: 10px;
    display: block;
}
.title {
    font-size: 40px;
    margin: auto;
    padding: 5px;
}
.date {
    font-size: 18px;
    margin: auto;
    float: right;
    padding: 10px;
    display: block;
}
.article {
    font-size: 16px;
    margin: auto;
    padding: 5px;
}
.keywords {
    margin: auto;
    display: block;
    color: wheat;
}
.keyword-li {
    font-size: 16px;
    display: inline;
    margin: auto;
    padding: 5px;
}
p {
    color: wheat;
}
</style>