<script lang="ts">
    import { enhance } from "$app/forms";
    export let form;
    // export let data;

</script>

<main>
    <div class="navbar">
        <div class="logo">
            <h1>Tränings App</h1>
        </div>
        <a href="/"><button>Back</button></a>
    </div>
    <!-- Loginpage -->
    <div class="login-form">
        <h1>Log In</h1>
        <div class="chose-username">
            <form method="post" action="?/login" use:enhance>
                <input type="text" name="username" placeholder="Enter Username..">
                <input type="password" name="password" placeholder="Enter Password..">
                <button>Login</button>
                {#if form?.username}
                    <span style="color:red;">{form.username}</span>
                {/if}
                {#if form?.password}
                    <span style="color:red;">{form.password}</span>
                {/if}
            </form>
        </div>
    </div>
</main>

<style>
    .navbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 2rem;
        background-color: #f1f1f1;
    }

    .navbar button {
        padding: 0.5rem 2rem;
        border: none;
        border-radius: 0.5rem;
        background-color: #555;
        color: white;
        cursor: pointer;
        transition: all 0.2s ease-in-out;
    }
    
    .navbar button:hover {
        background-color: #333;
    }

    .logo {
        font-size: 1.5rem;
    }

    .login-form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 5rem;
    }

    .login-form h1 {
        margin-bottom: 2rem;
    }

    .login-form form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .login-form input {
        margin-bottom: 1rem;
        padding: 0.5rem 1rem;
        border: none;
        border-radius: 0.5rem;
        background-color: #f1f1f1;
        outline: none;
    }

    .login-form button {
        margin-top: 1rem;
        padding: 0.5rem 1rem;
        border: none;
        border-radius: 0.5rem;
        background-color: #555;
        color: white;
        cursor: pointer;
        transition: all 0.2s ease-in-out;
    }

    .login-form button:hover {
        background-color: #333;
    }
</style>