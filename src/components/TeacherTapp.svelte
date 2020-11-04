<script>
  import { getJson } from '../lib/fetch';
  import TeacherTappGriddle from './TeacherTappGriddle.svelte';
  import { questions } from '../store/teacher-tapp.js';

  const dataFile = 'data/teacher-tapp/questions.json';
  const loadData = async () => {
    $questions = await getJson(dataFile);
  }
  const loader = loadData();
</script>

<section class="teachertapp">
  <h2 id='teachertapp'>Teacher Surveys</h2>
  {#await loader}
    <p>Loading data file</p>
  {:then}
    {#each $questions.q as question, i}
      <TeacherTappGriddle {question} keys={$questions.k} id={i}/>
    {/each}
  {/await}
</section>
