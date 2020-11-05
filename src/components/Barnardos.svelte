<script>
  import { spring } from 'svelte/motion';
  import { getCsv } from '../lib/fetch';
  import GraphRow from './GraphRow.svelte';

  let data;
  let date = 0;
  let row = spring(undefined);
  let dates = [];
  let maxReferrals = 0;
  let player;
  let cumulative = true;

  const loader = async () => {
    const csv = await getCsv('data/barnardos/referrals.csv');
    data = csv.map((r) =>
      Object.entries(r).reduce((a, [k, v]) => {
        if (!['date'].includes(k)) a[k] = parseInt(v);
        return a;
      }, {})
    );
    dates = csv.map(({ date }) => new Date(date));
    date = data.length - 1;
  };
  const loadData = loader();
  const channels = [
    'Approved Delivery Partner',
    'Professional',
    'Guardian',
    'Self',
  ];
  const reasons = [
    'Child mental health',
    'Isolation & loneliness',
    'Barriers to reintegration to education',
    'Parenting support',
    'Parent mental health',
    'Barriers to engagement with support services',
    'Impact of caring responsibilities',
    'Concerns about children outside the home',
    'Other',
    'Exposure to online harm',
    'Child protection or safeguarding concerns referred to Statutory Agencies',
  ];

  const priorityGroups = [
    'Child mental health',
    'BAMER',
    'Children with SEN',
    'Children under 5',
    'At risk of (outside) exploitation',
    'Young carers',
  ];
  $: if (data) {
    let totalFunc = (s) => Math.max(...s);
    if (cumulative) totalFunc = (s) => s.reduce((a, b) => a + b, 0);
    maxReferrals = totalFunc(data.map((x) => x['Total referrals']));
    if (cumulative) {
      $row = data.slice(0, date+1).reduce((a, c) => {
        const lastTotal = a['Total referrals'];
        ['Total referrals', ...channels].forEach(x => a[x] = (a[x] || 0) + c[x]);
        [...priorityGroups, ...reasons].forEach(x => a[x] = ((a[x] * lastTotal || 0) + (c[x] * c['Total referrals'])) / a['Total referrals']);
        return a;
      }, {});
    } else {
      $row = data[date];
    }
  }
  const togglePlay = () => {
    if (player) {
      window.clearInterval(player);
      player = undefined;
      return;
    }
    player = window.setInterval(() => {
      date = (date + 1) % data.length;
      if (date == data.length - 1) togglePlay();
    }, 500);
  };
  const dateFormatter = new Intl.DateTimeFormat('default', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
</script>

<section class="barnardos">
  <h2 id="barnardos">Data from See, Hear, Respond</h2>
  {#await loadData}
    <p>Loading data...</p>
  {:then}
    <section class="headline">
      <p>{dateFormatter.format(dates[date])}</p>
      <p>
        {Math.round($row['Total referrals'], 0)}
        <span class='reporting-type'>{ cumulative ? 'Total referrals' : 'Referrals / week'}</span>
      </p>
    </section>
    <section class="timeline">
      <button
        class="grey-button play"
        on:click={togglePlay}>{player ? 'Stop' : 'Play'}</button>
      <input
        title='Week selector slider'
        type="range"
        bind:value={date}
        min="0"
        max={data.length - 1}
        step="1" />
      <div class='control-block'>
        <label for='barnardos-cumulative'>Cumulative </label>
        <input id='barnardos-cumulative' type='checkbox' bind:checked={ cumulative }/>
      </div>
    </section>
    <section class="two-col">
      <div>
        <h3>Sources of referral</h3>
        <GraphRow
          label="All Channels"
          value={$row['Total referrals']}
          max={maxReferrals} />
        {#each channels as key}
          <GraphRow label={key} value={$row[key]} max={maxReferrals} />
        {/each}
        <h3>Priority Groups</h3>
        {#each priorityGroups as key}
          <GraphRow label={key} value={$row[key]} unit="%" />
        {/each}
      </div>
      <div>
        <h3>Reasons for referral</h3>
        {#each reasons as key}
          <GraphRow label={key} value={$row[key]} unit="%" />
        {/each}
      </div>
    </section>
  {/await}
</section>
