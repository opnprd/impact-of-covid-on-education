<script>
  import Waffle from './chart/Waffle.svelte';
  import { formatDate } from '../lib/utils';

  export let question;
  export let keys;
  let responses;

  let segment = 'All';
  let baseline = 'All';
  $: {
    const k1 = keys.indexOf(segment);
    const k2 = keys.indexOf(baseline);
    responses = question.a.map(({t, d}) => ({
      title: t,
      number: d[k1],
      reference: k1 !== 0 ? d[k2] : undefined,
    }));
  }
</script>

<section>
  <h3>{question.q}</h3>

  <div>
    <label for='primary-segment'>Segment</label>
    <select id='primary-segment' bind:value={segment}>
      {#each keys as k}<option>{ k }</option>{/each}
    </select>
  </div>
  {#if segment != 'All'}
    <div>
      <label for='comarison-segment'>Comparison</label>
      <select id='comparison-segment' bind:value={baseline}>
        <option>None</option>
        {#each keys as k}<option>{ k }</option>{/each}
      </select>
    </div>
  {/if}

  <div class="grid">
    {#each responses as { title, number, reference }}
      <section class="response">
        <Waffle { number } { reference } />
        <p>{ title }</p>
        <p class='summary'>{ number }% of { segment } respondents</p>
      </section>
    {/each}
  </div>
  <p>Total respondents {question.r}</p>
  <p>Question asked on {formatDate(question.d)}</p>
</section>
