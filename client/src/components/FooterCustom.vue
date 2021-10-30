<template>
    <ul>
        <li>
            <a href="/about" v-on:click.prevent="">about</a>
            <a href="/contact" v-on:click.prevent="">contact</a>
            <a href="/faq" v-on:click.prevent="">faq</a>
        </li>
    </ul>
</template>

<script>
export default {
    name: "FooterCustom",
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