<script>
  import d3 from '../lib/d3';
  import { formatDate } from '../lib/utils';
  import Bargraph from './Bargraph.svelte';

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
      <Bargraph data={question} lineHeight=40 />
      <p>Total respondents { question.respondents }</p>
      <p>Question asked on { formatDate(question.date) }</p>
    {/each}
  {/await}
</section>