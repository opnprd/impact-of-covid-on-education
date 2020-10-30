<script>
  import { dimension, comparator, questions } from '../store/teacher-tapp.js';
  import { datasets as mDatasets, dataset as mDataset } from '../store/mumsnet';

  let barnardosHidden = true;
  let mumsnetHidden = true;
  let teacherTappHidden = true;

  const yBreak = [10, 920];

  const scrollHandler = (e) => {
    const { scrollY: y } = window;
    if (y < yBreak[0]) {
      ([barnardosHidden, mumsnetHidden, teacherTappHidden] = [false, true, true]);
      return;
    }
    if (y < yBreak[1]) {
      ([barnardosHidden, mumsnetHidden, teacherTappHidden] = [true, false, true]);
      return;
    }
    ([barnardosHidden, mumsnetHidden, teacherTappHidden] = [true, true, false]);

  }
</script>

<svelte:window on:scroll={scrollHandler}/>

<style type="text/scss">
  aside {
    position: fixed;
    font-size: 0.9em;
    top: 0;
    left: -2px;
    padding: 1rem;
    padding-top: 9rem;
    box-sizing: content-box;
    height: 100%;
    width: 18rem;
  }
  select {
    width: 100%;
  }
  section {
    &.hidden {
      :not(:first-child) {
        display: none;
      }
    }
  }
</style>

<aside>
  <section class:hidden={barnardosHidden}>
    <h2 on:click={ () => barnardosHidden = !barnardosHidden }>
      The Child's Perspective</h2>
    <p>
      TKTKTK
    </p>
  </section>

  <section class:hidden={mumsnetHidden}>
    <h2 on:click={ () => mumsnetHidden = !mumsnetHidden }>
      The Parent's Perspective</h2>
    <p>
      The text extracted from the Mumsnet forums has been analysed to assess the
      relative frequencies of individual terms and pairs of words during all of
      January, April and September 2020.
    </p>
    <p>
      You can select either 'Tokens' for single words or 'Bigrams' for pairs of
      words. Clicking the column title will sort the terms by the prevalence in
      that month. The number of terms will be limited to the top 10.
    </p>
    <select bind:value={$mDataset}>
      {#each $mDatasets as opt, i}
        <option value={i}>{opt.charAt(0).toUpperCase() + opt.slice(1)}</option>
      {/each}
    </select>
  </section>

  {#if $questions}
    <section class:hidden={ teacherTappHidden }>
      <h2 on:click={ () => teacherTappHidden = !teacherTappHidden }>
        The Teacher's Perspective
      </h2>
      <p>
        We commissioned a series of surveys with Teacher Tapp.
        TKTKTK
      </p>
      <p>
        The square charts show the percentage of respondents who selected that
        option. Each square represents 1 percent.
      </p>
      <p>
        The surveys returned by the teachers have been segmented during
        analysis. Select a segment to drill down into the results.
      </p>
      <div>
        <label for="tt-dimension">Primary</label>
        <select id="tt-dimension" bind:value={$dimension}>
          {#each $questions.k as dim, i}
            <option value={i}>{dim}</option>
          {/each}
        </select>
      </div>
      {#if $dimension != 0}
        <p>
          You can comare this result against another segment by selecting below.
          That will appear as a solid border on the chart.
        </p>
        <div>
          <label for="tt-dimension">Comparison</label>
          <select id="tt-dimension" bind:value={$comparator}>
            <option>None</option>
            {#each $questions.k as dim, i}
              <option value={i}>{dim}</option>
            {/each}
          </select>
        </div>
      {/if}
    </section>
  {/if}
</aside>
