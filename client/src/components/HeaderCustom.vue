<template>
    <ul>
        <li>
            <a href="/science" v-on:click.prevent="sortByCategory('science')">#science</a>
        </li>
        <li>
            <a href="/politics" v-on:click.prevent="sortByCategory('politics')">#politics</a>
        </li>
        <li>
            <a href="/sport" v-on:click.prevent="sortByCategory('sport')">#sport</a>
        </li>
        <li>
            <a href="/music" v-on:click.prevent="sortByCategory('music')">#music</a>
        </li>
    </ul>
</template>

<script>
export default {
    name: "HeaderCustom",
    methods: {
        sortByCategory(category) {
            console.log('sorting by category', cate);
        }
    }
};
</script>
 
<style scoped>
li {
    font-size: 24px;
    list-style: none;
    display: inline;
    margin: auto;
    padding: 20px;
    text-decoration: none;
}
</style>