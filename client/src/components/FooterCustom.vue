<template>
    <div class="container-footer">
        <ul class="ul-footer">
            <li class="li-footer">
                <a href="/about" v-on:click.prevent="">about</a>
            </li>
            <li class="li-footer">
                <a href="/contact" v-on:click.prevent="">contact</a>
            </li>
            <li class="li-footer">
                <a href="/faq" v-on:click.prevent="">faq</a>
            </li>
        </ul>
    </div>
</template>

<script scoped>
export default {
    name: "FooterCustom",
};
</script>

<style scoped>
.container-footer {
    margin: auto;
    padding: 12px;
}
.li-footer {
    font-size: 18px;
    list-style: none;
    display: inline;
    margin: auto;
    padding: 5px;
}
.ul-footer {
    margin: auto;
    padding: 0px;
}
a {
    text-decoration: none;
    color: wheat;
}
</style>