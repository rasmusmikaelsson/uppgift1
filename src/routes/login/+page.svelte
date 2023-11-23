<script lang="ts">
    import { enhance } from "$app/forms";
    export let form;
    export let data;

</script>

<main>
    <!-- Loginpage -->
    <div class="login-form">
        <h1>Log In</h1>
        <p>
            'There is no registration'
        </p>
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