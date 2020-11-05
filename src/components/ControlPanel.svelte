<script>
  import { afterUpdate } from 'svelte';
  import { spring } from 'svelte/motion';
  let open = false;

  const scrollPos = spring(window.scrollX);

  const topPadding = 80;
  let hidden = [];

  const findHeaders = () => {
    const targets = document.querySelectorAll('main section h2');
    return Array.from(targets).reduce((a, x) => {
      a[x.id] = x.offsetTop;
      return a;
    }, {});
  };

  const calculateState = () => {
    const offsets = findHeaders();
    const y = window.scrollY + 2 * topPadding;

    hidden = Object.values(offsets).map(
      (c, i, a) => !(y > c && !(y > a[i + 1]))
    );
  };

  const scrollHandler = () => calculateState();

  const scroller = (pos) => () => {
    const offsets = findHeaders();
    scrollPos.set(offsets[pos] - topPadding);
    open = false;
  };

  $: window.scrollTo(0, $scrollPos);

  afterUpdate(() => {
    calculateState();
  });
</script>

<style>
  p,
  ul {
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

<svelte:window on:scroll={scrollHandler} />

<button
  class="toc-display"
  on:click={() => (open = !open)}>
  {open ? 'Hide' : 'Show'} Menu
</button>

<aside class:open>
  <section class:hidden={hidden[0]}>
    <h2 on:click={scroller('barnardos')}>
      <a href="#barnardos">The Child's Perspective &rarr;</a>
    </h2>
    <p>
      This data results from analysis of referrals from the
      <a href="https://www.barnardos.org.uk/see-hear-respond">Barnardo's See,
        Hear, Respond</a>
      initiative.
    </p>
    <p>
      The numbers presented refer to individual referrals not including children
      reached in detached settings. The latter accounted for a further 12,451
      children reached from the launch of the service until mid-October.
    </p>
    <ul>
      <li>You can scroll through the available data by dragging the slider.</li>
      <li>Pressing the Play button will animate the display.</li>
      <li>You can choose between a cumulative or weekly report.</li>
    </ul>
  </section>

  <section class:hidden={hidden[1]}>
    <h2 on:click={scroller('teachertapp')}>
      <a href="#teachertapp">The Teacher's Perspective &rarr;</a>
    </h2>
    <p>
      The research team commissioned three questions to run on the
      <a href="https://teachertapp.co.uk"> Teacher Tapp App</a>
      to run during October 2020. These questions surveyed users of the app on
      topics related to the impact lockdown had had on their pupils and work.
    </p>
    <ul>
      <li>
        The square charts show the percentage of respondents who selected that
        option. Each square represents 1 percent.
      </li>
      <li>
        The surveys returned by the teachers are broken down by the
        characteristics of the respondents. Select a value from the dropdown to
        drill down into the results.
      </li>
      <li>
        You can comare this result against another segment with the select box
        that appears. The baseline figure will appear as a small dot in the centre
        of the chart.
      </li>
    </ul>
  </section>

  <section class:hidden={hidden[2]}>
    <h2 on:click={scroller('mumsnet')}>
      <a href="#mumsnet">The Parent's Perspective &rarr;</a>
    </h2>
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
