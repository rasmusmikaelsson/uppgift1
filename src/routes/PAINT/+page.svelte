<script>
    export let data;
</script>

<div class="pixelartPlaceholder">
    <div class="createContainer">
        <h1>Pixel Creator</h1>
        <form action="?/createPixelart" method="post">
            <input type="text" name="name" placeholder="Name of your pixelart" required>
            <input type="number" name="width" placeholder="Width" required>
            <input type="number" name="height" placeholder="Height" required>
            <button type="submit">Create</button>
        </form>
    </div>
    <div class="pixelartsContainer">
        <h1>Pixelarts</h1>
        <div class="pixelarts">
            {#each data.pixelarts as pixelart}
                <a href="/PAINT/{pixelart.id}">
                    <div class="pixelart">
                        <h3>{pixelart.name}</h3>
                        <p>{pixelart.width}x{pixelart.height}</p>
                    </div>
                </a>
            {/each}
        </div>
    </div>
</div>

<style>
    .createContainer {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-top: 2rem;
    }

    .pixelartsContainer {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .pixelarts {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        margin-bottom: 2rem;
    }

    .pixelart {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        
        color: white;
        padding: .5rem 1rem;
        background:#555;
        border-radius: 1rem;
        transition: all 0.2s ease-in-out;
        box-shadow: 1px 2px 4px 2px rgba(0, 0, 0, 0.2);

        width: 100px;
        height: 100px;
    }

    .pixelart h3 {
        margin: 0;
    } 
    .pixelart:hover {
        background:#333;
        transform: scale(1.05);
    }

    a {
        text-decoration: none;
        color: black;
    }

    form {
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        border-radius: 0.5rem;

        padding: 1rem;
        box-shadow: 1px 2px 4px 2px rgba(0, 0, 0, 0.2);
    }

    input {
        padding: 0.5rem;
        border: 1px solid #ccc;
        border-radius: 0.5rem;
    }

    button {
        padding: 0.5rem;
        border: 1px solid #ccc;
        border-radius: 0.5rem;
        background-color: #555;
        color: white;
        cursor: pointer;
        transition: all 0.2s ease-in-out;
    }

    button:hover {
        background-color: #333;
    }
</style>