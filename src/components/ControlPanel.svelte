<script>
  import { afterUpdate } from 'svelte';
  import { spring } from 'svelte/motion';
  let open = false;

  const scrollPos = spring(window.scrollX);

  const topPadding = 80;
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

<svelte:window on:scroll={scrollHandler} />

<button
  class="toc-display"
  on:click={() => (open = !open)}>{open ? 'Hide' : 'Show'}
  Menu</button>
<aside class:open>
  <section class:hidden={hidden[0]}>
    <h2 on:click={scroller(0)}>The Child's Perspective</h2>
    <p>
      This data results from analysis of referral data from the Barnardo's See,
      Hear, Respond initiative.
    </p>
    <p>
      You can scroll through the available data by dragging the slider. Pressing
      the Play button will animate the display.
    </p>
  </section>

  <section class:hidden={hidden[1]}>
    <h2 on:click={scroller(1)}>The Teacher's Perspective</h2>
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

  <section class:hidden={hidden[2]}>
    <h2 on:click={scroller(2)}>The Parent's Perspective</h2>
    <p>
      The text extracted from the Mumsnet forums has been analysed to assess the
      relative frequencies of individual terms and pairs of words during all of
      January, April and September 2020.
    </p>
    <ul>
      <li>
        Select either bigrams (pairs of words) or tokens (single words) to see
        how many times they were mentioned in the months of January, April or
        September.
      </li>

      <li>
        You can select either 'Tokens' for single words or 'Bigrams' for pairs
        of words. Clicking the column title will sort the terms by the
        prevalence in that month. The number of terms will be limited to the top
        10.
      </li>
    </ul>
  </section>
</aside>

<style>
  p, ul {
    margin-bottom: 0.5em;
  }
  ul {
    list-style: square outside none;
    margin-left: 2em;
  }
  li {
    margin-bottom: 0.2em;
  }
</style>