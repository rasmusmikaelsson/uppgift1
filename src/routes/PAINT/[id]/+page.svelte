<script lang="ts">
    import { enhance } from "$app/forms";
    import type { PageData } from "./$types";

    export let data: PageData;

    let selectedColor = 'black';


</script>

<!-- <h1>{data.pixelart.id}</h1> -->

<main>
    <div class="colorButtons">
        <button style="background-color: black; border: 4px solid {selectedColor === 'black' ? 'black' : 'transparent'}" on:click={() => selectedColor = 'black'}></button>
        <button style="background-color: red; border: 4px solid {selectedColor === 'red' ? 'black' : 'transparent'}" on:click={() => selectedColor = 'red'}></button>
        <button style="background-color: blue; border: 4px solid {selectedColor === 'blue' ? 'black' : 'transparent'}" on:click={() => selectedColor = 'blue'}></button>
        <button style="background-color: green; border: 4px solid {selectedColor === 'green' ? 'black' : 'transparent'}" on:click={() => selectedColor = 'green'}></button>
        <button style="background-color: darkblue; border: 4px solid {selectedColor === 'darkblue' ? 'black' : 'transparent'}" on:click={() => selectedColor = 'darkblue'}></button>
        <button style="background-color: goldenrod; border: 4px solid {selectedColor === 'goldenrod' ? 'black' : 'transparent'}" on:click={() => selectedColor = 'goldenrod'}></button>
        <input type="color" on:input={(event) => selectedColor = event.currentTarget.value}>
        <button style="border: 4px solid {selectedColor === 'white' ? 'black' : 'transparent'}" on:click={() => selectedColor = 'white'}><i class="fa-regular fa-eraser fa-2xl" role="button"></i></button>
    </div>
    <div class="thePixelart">
        {#if data.pixelart}
            {#each Array.from(data.pixelart.pixels) as pixel}
                <form method="post" action="?/paint" use:enhance>
                    <input type="hidden" name="id" value={pixel.id}>
                    <input type="hidden" name="color" value={selectedColor}>
                    <button class="pixel" style={"background-color: "+pixel.color+";"} on:mouseover={(e) => {if (e.buttons == 1)
                        
                        // submit the form
                        e.currentTarget.click()
                        
                        }}></button>
                </form>
            {/each}
        {/if}
    </div>
</main>

<style>
    * {
        user-select: none;
    }
    main {
        margin: auto;
        width: 80vw;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 4rem;
        position: relative;
    }
    .colorButtons {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: .5rem;
        width: 25%;
        padding: 2rem;
        border-radius: 1rem;

        box-shadow: 1px 2px 4px 2px rgba(0, 0, 0, 0.2);
    }
    .colorButtons button,
    .colorButtons input {
        width: 4rem;
        height: 4rem;
        border-radius: 50%;
        border: none;
        outline: none;
        transition: all .2s ease-in-out;
        box-shadow: 1px 2px 4px 2px rgba(0, 0, 0, 0.2);
    }
    .thePixelart {
        display: grid;
        grid-template-columns: repeat(16, 1fr);
        grid-template-rows: repeat(16, 1fr);
        gap: 0;
        padding: 2rem;
        border-radius: 1rem;

        box-shadow: 1px 2px 4px 2px rgba(0, 0, 0, 0.2);
        /* width: 70%; */
    }
    .thePixelart form {
        height: 1rem;
    }
    .colorButtons button:hover {
        cursor: pointer;
        scale: 1.1;
    }


    .thePixelart form button {
        width: 1rem;
        height: 1rem;
        transition: all 0.2s ease-in-out;
    }

    .thePixelart form button:hover {
        background-color: #333;
    }
</style>