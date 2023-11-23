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

        <h3>Active Schema</h3>
    </div>
</section>
