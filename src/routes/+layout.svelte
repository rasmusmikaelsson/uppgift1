<script lang="ts">
    import type { LayoutData } from "./$types";

    export let data: LayoutData;
</script>

<main>
    <nav class="navbar">
        <div class="links">
            <ul>
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/paint">Paint</a>
            </ul>
        </div>
        <div class="logo"><h1>PixyFy</h1></div>
        <div class="loginButton">
            {#if data.username == undefined}
                <a href="/login"><button>Login</button></a>
            {:else}
                <form method="post" action="/login?/logout">
                    <button>Logout</button>
                </form>
            {/if}
        </div>
    </nav>
</main>

<slot />

<style>
    main {
        width: 100vw;
        display: flex;
        justify-content: center;
    }

    .navbar {
        position: absolute;
        margin-top: 1rem;

        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 50vw;

        border: 4px solid var(--primary-color);
        border-radius: 2rem;
    }

    .links {
        box-sizing: border-box;
        display: flex;
        align-items: center;
        width: 190.16px;
        transform: translateX(2rem);
    }

    ul {
        padding: 0;
    }

    .links a {
        padding: 10px;
        text-decoration: none;
        color: var(--primary-color);

    }

    .logo h1 {
        font-size: xx-large;
        font-weight: bolder;
        margin: 0;
    }

    .loginButton {
        display: flex;
        justify-content: end;
        width: 190.16px;
    }

    .loginButton button {
        transform: translateX(-2rem);
    }

    :root {
        --primary-color: #1D2B53;
        --secondary-color: #7E2553;
        --tertiary-color: #FF004D;
        --quaternary-color: #FAEF5D;
    }

</style>
