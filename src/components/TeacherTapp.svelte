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
  <h2>The Teacher's Perspective</h2>
  {#await loader}
    <p>Loading data file</p>
  {:then}
    {#each $questions.q as question}
      <TeacherTappGriddle {question} keys={$questions.k}/>
    {/each}
  {/await}
</section>
