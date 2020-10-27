<script>
  import { getJson } from '../lib/fetch';
  import { formatDate } from '../lib/utils';
  import Waffle from './chart/Waffle.svelte';

  const dataFile = 'data/teacher-tapp/questions.json';
  const loadData = getJson(dataFile);
  let dimension = 0;
  let comparator = undefined;
</script>

<section class="teachertapp">
  <h2>Teacher Tapp</h2>

  {#await loadData}
    <p>Loading data file</p>
  {:then questions}
    <div>
      <label for="tt-dimension">Choose a primary dimension</label>
      <select id="tt-dimension" bind:value={dimension}>
        {#each questions.k as dim, i}
          <option value={ i }>{ dim }</option>
        {/each}
      </select>
    </div>
    {#if dimension != 0}
      <div>
        <label for="tt-dimension">Choose a dimension to compare against</label>
        <select id="tt-dimension" bind:value={comparator}>
          <option>None</option>
          {#each questions.k as dim, i}
            <option value={ i }>{ dim }</option>
          {/each}
        </select>
      </div>
    {/if}

    {#each questions.q as question}
      <h3>{ question.q }</h3>
      <div class="grid">
        {#each question.a as response }
          <section class="response">
            <Waffle number={ response.d[dimension] } reference={ dimension > 0 ? response.d[comparator] : undefined }/>
            <p>{ response.t }</p>
          </section>
        {/each}
      </div>
      <p>Total respondents { question.r }</p>
      <p>Question asked on { formatDate(question.d) }</p>
    {/each}
  {/await}
</section>

<style type="text/scss">
  .grid {
    display: flex;
    flex-wrap: wrap;
  }
  .response {
    width: 10em;
    padding-bottom: 1em;
    padding-right: 1em;
    p {
      font-size: 0.7em;
      margin: 0; 
    }
  }
</style>