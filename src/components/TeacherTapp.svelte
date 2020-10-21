<script>
  import d3 from '../lib/d3';
  import { formatDate } from '../lib/utils';
  import Bargraph from './Bargraph.svelte';
  import Waffle from './chart/Waffle.svelte';

  const dataFile = 'data/teacher-tapp/questions.json';
  const loadData = d3.json(dataFile);
</script>

<section class="teachertapp">
  <h2>Teacher Tapp</h2>

  {#await loadData}
    <p>Loading data file</p>
  {:then questions}
    {#each questions as question}
      <h3>{ question.title }</h3>
      <div class="grid">
        {#each question.responses as response, i }
          <section class="response">
            <Waffle number={ response.respondents } total={ question.respondents } />
            <p>{ response.text }</p>
          </section>
        {/each}
      </div>
      <p>Total respondents { question.respondents }</p>
      <p>Question asked on { formatDate(question.date) }</p>
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
      font-size: smaller;
      margin: 0; 
    }
  }
</style>