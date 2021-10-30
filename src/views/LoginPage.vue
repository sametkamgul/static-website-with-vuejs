<template>
    <p class="header">Article App</p>
    <p>login</p>
    <div class="login-container">
        <form action="/login" method="post">
            <input
                type="email"
                name=""
                id="email"
                placeholder="yourmail@email.com"
            />
            <input
                type="password"
                name=""
                id="password"
                placeholder="your password"
            />
            <input type="submit" value="" id="submit" />
        </form>
    </div>
</template>

<script>
export default {};
</script>

<style>
body {
    background-image: url("../assets/login-background.jpg");
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: cover;
}
.header {
    font-size: 64px;
    font-weight: bolder;
    padding-top: 160px;
}
.login-container {
    display: block;
    margin: auto;
    padding: 0px;
    padding-top: 20px;
}
#email,
#password,
#submit {
    font-size: 24px;
    display: block;
    margin: 10px auto;
    padding: 10px;
    max-width: 80%;
    width: 300px;
    color: #322f2d;
    background-color: #dfdfdf;
    border: 0px;
    border-radius: 10px;
    text-align: center;
}
p {
    color: white;
    font-size: 48px;
    margin: auto;
    padding: 0px;
    padding-top: 20px;
}
</style>