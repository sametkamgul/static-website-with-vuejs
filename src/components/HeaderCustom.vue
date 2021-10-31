<template>
    <div class="container-header">
        <ul class="ul-header">
            <li>
                <a
                    href="/science"
                    v-on:click.prevent="sortByCategory('science')"
                    >#science</a
                >
            </li>
            <li>
                <a
                    href="/politics"
                    v-on:click.prevent="sortByCategory('politics')"
                    >#politics</a
                >
            </li>
            <li>
                <a href="/sport" v-on:click.prevent="sortByCategory('sport')"
                    >#sport</a
                >
            </li>
            <li>
                <a href="/music" v-on:click.prevent="sortByCategory('music')"
                    >#music</a
                >
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "HeaderCustom",
    methods: {
        sortByCategory(category) {
            console.log("sorting by category", category);
        },
    },
};
</script>
 
<style scoped>
@media (max-width: 600px) {
    /* portrait tablets, portrait iPad, e-readers (Nook/Kindle), landscape 800x480 phones (Android) */
    .container-header {
        margin: auto;
        padding: 12px;
        max-width: 100%;
    }
    li {
        font-size: 18px;
        list-style: none;
        display: inline;
        margin: auto;
        padding: 5px;
        text-decoration: none;
    }
    .ul-header {
        margin: auto;
        padding: 0px;
    }
}
@media (min-width: 600px) {
    /* desktop */
    .container-header {
        display: block;
        margin: auto;
        padding: 12px;
        display: flex;
        justify-content: center;
        /* padding-bottom: 60px; */
    }
    li {
        font-size: 24px;
        list-style: none;
        display: inline;
        margin: auto;
        padding: 20px;
        text-decoration: none;
        color: wheat;
    }
    .ul-header {
        margin: auto;
        padding: 0px;
    }
}
a {
    text-decoration: none;
    color: #ffffff;
;
}
</style>