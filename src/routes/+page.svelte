<script>
    export let data;
</script>

<div class="navbar">
    <div class="logo">
        <h1>Pixel art App</h1>
    </div>
    {#if data.username == undefined}
        <a href="/login"><button>Login</button></a>
    {:else}
        <form method="post" action="/login?/logout">
            <button>Logout</button>
        </form>
    {/if}
</div>

<div class="container">
    <h1>Hej och välkommen!</h1>
    <p>Här är landningpagen</p>
    
    <h3>Links:</h3>
    <hr>
    <a href="/PAINT">PAINT!</a>
</div>

<style>
    .navbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 2rem;
        background-color: #f1f1f1;
    }

    .navbar a {
        text-decoration: none;
        color: black;
    }

    .navbar a:hover {
        color: #555;
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

    .container {
        padding: 0 2rem;
    }

    .container a {
        text-decoration: none;
        color: black;
    }
</style>