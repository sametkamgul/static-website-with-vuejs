<template>
    <div class="login-wrapper">
        <p class="header">Article App</p>
        <p>login</p>
        <div class="login-container">
            <form action="" method="post">
                <input
                    type="email"
                    name=""
                    id="email"
                    placeholder="yourmail@email.com"
                    v-model="emailInput"
                />
                <input
                    type="password"
                    name=""
                    id="password"
                    placeholder="your password"
                    v-model="passwordInput"
                />
                <input
                    type="submit"
                    value=""
                    id="submit"
                    v-on:click.prevent="handleLogin"
                />
            </form>
            <p
                class="login-message"
                v-bind:class="{ 'login-message-fail': isActive }"
            >
                {{ loginMessage }}
            </p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            loginMessage: "",
            passwordInput: "",
            emailInput: "",
        };
    },
    methods: {
        handleLogin() {
            var user = {
                email: "sametkamgul@gmail.com",
                password: "1234",
            };
            console.log(
                `[INFO] trying to login... ${this.emailInput}:${this.passwordInput}`
            );
            if (
                this.emailInput === user.email &&
                this.passwordInput === user.password
            ) {
                console.log(`[INFO ] user is authorized`);
                this.$router.push("/home"); // TODO: assume user is logged in
            } else {
                console.log(
                    `[ERROR] user is not authorized ${this.emailInput}`
                );
                this.emailInput = "test@gmail.com";
                this.isActive = true;
                this.loginMessage = "email or password is wrong!";
                setTimeout(() => {
                    this.isActive = false;
                    this.loginMessage = "";
                    this.emailInput = "";
                    this.passwordInput = "";
                }, 2000);
            }
        },
    },
};
</script>

<style>
body {
    background-image: url("../assets/login-background.jpg");
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: cover;
}
.login-wrapper {
    width: 75%;
    height: 50%;
    /* display: block; */
    margin: auto;
    margin-top: 50px;
    margin-bottom: 50px;
    padding: 0px;
    padding-bottom: 50px;
    padding-top: 50px;
    box-shadow: 0px 0px 2px rgb(255, 255, 255);
    background-color: #9a9a9a3b;
}
.header {
    font-size: 64px;
    font-weight: bolder;
    padding-top: 10px;
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
#submit:hover {
    background-color: #8b8b8b;
}
p {
    color: white;
    font-size: 48px;
    margin: auto;
    padding: 0px;
}
.login-message {
    color: white;
    font-size: 18px;
    margin: auto;
    padding: 0px;
    padding-top: 10px;
}
.login-message-fail {
    animation: shake 1s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
    transform: translate3d(0, 0, 0);
    backface-visibility: hidden;
}
@keyframes shake {
    100% {
        opacity: 100%;
    }
    ,
    10% {
        opacity: 0%;
    }

    10%,
    90% {
        transform: translate3d(-1px, 0, 0);
    }

    20%,
    80% {
        transform: translate3d(2px, 0, 0);
    }

    30%,
    50%,
    70% {
        transform: translate3d(-4px, 0, 0);
    }

    40%,
    60% {
        transform: translate3d(4px, 0, 0);
    }
}
</style>