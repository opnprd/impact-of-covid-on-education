<script>
  import { getJson } from '../lib/fetch';
  import { formatDate } from '../lib/utils';
  import Waffle from './chart/Waffle.svelte';
  import { dimension, comparator, questions } from '../store/teacher-tapp.js';
  
  const dataFile = 'data/teacher-tapp/questions.json';
  const loadData = async () => {
    questions.set(await getJson(dataFile));
  }
  const loader = loadData();
</script>

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

<section class="teachertapp">
  <h2>The Teacher's Perspective</h2>
  {#await loader}
    <p>Loading data file</p>
  {:then}
    {#each $questions.q as question}
      <h3>{question.q}</h3>
      <div class="grid">
        {#each question.a as response}
          <section class="response">
            <Waffle
              number={response.d[$dimension]}
              reference={$dimension > 0 ? response.d[$comparator] : undefined} />
            <p>{response.t}</p>
          </section>
        {/each}
      </div>
      <p>Total respondents {question.r}</p>
      <p>Question asked on {formatDate(question.d)}</p>
    {/each}
  {/await}
</section>
