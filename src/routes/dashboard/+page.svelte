<script>
    export let data;
</script>

<section class="dashboard">
    <form method="post" action="/login?/logout">
        <button>Logout</button>
    </form>
    <div class="dashboard__header">
        <h1>Dashboard</h1>
        <p>Here you can see all your data</p>
    </div>
    <div class="dashboard__content">
        <div class="sessions">
            <h1>Create A Schema</h1>
        </div>

        <form action="?/create" method="post">
            <input
                type="text"
                name="schemaName"
                placeholder="Enter schema name.."
            />
            <input
                type="text"
                name="schemaDescription"
                placeholder="Enter schema description.."/>
            <button>Create</button>
        </form>

        {#if data.schemas && data.schemas.length > 0}
            <h3>Your Schemas:</h3>
        {:else}
            <h3>You have no schemas at the moment</h3>
        {/if}

        <hr>

        {#each data.schemas as schema}
            <div class="schema">
                <h1>{schema.name}</h1>
                <p>Created: {schema.created}</p>
                <p>Description: {schema.description}</p>
                <a href="/dashboard/{schema.id}">View</a>
                <hr>
            </div>
        {/each}
    </div>
</section>

