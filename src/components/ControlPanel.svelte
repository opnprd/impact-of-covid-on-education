<script>
  import { afterUpdate } from 'svelte';
  import { tweened } from 'svelte/motion';
  import { cubicInOut } from 'svelte/easing';

  const scrollPos = tweened(window.scrollX, {
    duration: 400,
    easing: cubicInOut,
  });

  import { datasets as mDatasets, dataset as mDataset } from '../store/mumsnet';

  const topPadding = 100;
  let hidden = [];

  const findHeaders = () => {
    const targets = document.querySelectorAll('main section h2');
    return Array.from(targets).map((x) => x.offsetTop);
  };

  const calculateState = () => {
    const offsets = findHeaders();
    const y = window.scrollY + 2 * topPadding;

    hidden = offsets.map((c, i, a) => !(y > c && !(y > a[i + 1])));
  };

  const scrollHandler = () => calculateState();

  const scroller = (pos) => () => {
    const offsets = findHeaders();
    scrollPos.set(offsets[pos] - topPadding);
  };

  $: window.scrollTo(0, $scrollPos);

  afterUpdate(() => {
    calculateState();
  });
</script>

<style type="text/scss">
  section {
    &:first-of-type {
      margin-top: -1.2em;
    }
    &.hidden {
      :not(:first-child) {
        display: none;
      }
    }
  }
</style>

<svelte:window on:scroll={scrollHandler} />
<aside>
  <section class:hidden={hidden[0]}>
    <h2 on:click={scroller(0)}>The Child's Perspective</h2>
    <p>TKTKTK</p>
  </section>

  <section class:hidden={hidden[1]}>
    <h2 on:click={scroller(1)}>The Parent's Perspective</h2>
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

  <section class:hidden={hidden[2]}>
    <h2 on:click={scroller(2)}>The Teacher's Perspective</h2>
    <p>We commissioned a series of surveys with Teacher Tapp. TKTKTK</p>
    <p>
      The square charts show the percentage of respondents who selected that
      option. Each square represents 1 percent.
    </p>
    <p>
      The surveys returned by the teachers have been segmented during analysis.
      Select a segment to drill down into the results.
    </p>
    <p>
      You can comare this result against another segment with the select box
      that appears. The baseline figure will appear as a solid border on the
      chart.
    </p>
  </section>
</aside>
