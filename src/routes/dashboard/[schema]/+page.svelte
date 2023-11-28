<script>
    export let data;
    let exercise = "";
    let repCount = "";
    let setCount = "";
    /**
     * @type {any[]}
     */
    let exercisesList = [];

    const exercises = ["Pushups", "Situps", "Squats"];
    const repCounts = Array.from({ length: 100 }, (_, i) => i + 1);
    const setCounts = Array.from({ length: 20 }, (_, i) => i + 1);

    function createExercise() {
        const newExercise = {
            exercise,
            repCount,
            setCount,
        };
        exercisesList = [...exercisesList, newExercise];

        exercise = "";
        repCount = "";
        setCount = "";
    }
</script>

<a href="/dashboard"><button>Back</button></a>

<h1>Schema: {data.schemaName}</h1>
<p>Description: {data.schemaDescription}</p>

<form on:submit|preventDefault={createExercise}>
    <label for="exercise">Exercise:</label>
    <select id="exercise" bind:value={exercise}>
        {#each exercises as ex}
            <option value={ex}>{ex}</option>
        {/each}
    </select>
    <label for="repCount">Rep Count:</label>
    <select id="repCount" bind:value={repCount}>
        {#each repCounts as rep}
            <option value={rep}>{rep}</option>
        {/each}
    </select>
    <label for="setCount">Set Count:</label>
    <select id="setCount" bind:value={setCount}>
        {#each setCounts as set}
            <option value={set}>{set}</option>
        {/each}
    </select>
    <button type="submit">Add Exercise</button>
</form>

{#each exercisesList as exercise}
    <div>
        <hr>
        <p>Exercise: {exercise.exercise}</p>
        <p>Rep Count: {exercise.repCount}</p>
        <p>Set Count: {exercise.setCount}</p>
    </div>
{/each}
