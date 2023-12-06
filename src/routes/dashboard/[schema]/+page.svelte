<script lang="ts">
    export let data;
</script>

<a href="/dashboard"><button>Back</button></a>

<h1>Schema: {data.schemaName}</h1>
<p>Description: {data.schemaDescription}</p>

<form action="?/addExercise" method="post">
    <input type="text" name="exerciseName" placeholder="Exercise name.." />

    <label for="sets">Sets: </label>
    <select name="sets" id="sets" placeholder="Reps..">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
    </select>
    <label for="reps">Reps</label>
    <select name="reps" id="reps" placeholder="Reps..">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
    </select>
 
    <input type="text" name="weight" placeholder="Weight in kg..">
    <input type="submit" value="Add exercise" />
</form>

{#each data.exercise as exercise}
    <div>
        <h2>{exercise.name}</h2>
        <p>sets: {exercise.sets}</p>
        <p>reps: {exercise.reps}</p>
        <p>weight: {exercise.weight}</p>
        <button>Done</button>
        <hr>
    </div>
{/each}
