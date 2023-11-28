<script>
    export let data;
</script>

{#if data.username == undefined}
    <a href="/login"><button>Login</button></a>
{:else}
    <form method="post" action="/login?/logout">
        <button>Logout</button>
    </form>
{/if}

<h1>Hej och välkommen!</h1>
<p>Här är landningpagen</p>

<h3>Links:</h3>
<hr>
<a href="/dashboard">Dashboard</a>