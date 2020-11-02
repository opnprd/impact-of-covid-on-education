<script>
  import { getCsv } from '../lib/fetch';
  import Bar from './chart/Bar.svelte';
  let data;
  let date = 0;
  let row = {};
  let playing = false;
  let maxReferrals = 0;

  let player;

  let channels = [];
  let reasons = [];
  let priorityGroups = [];

  const loader = async () => {
    data = await getCsv('data/barnardos/referrals.csv');
    date = data.length - 1;
  };
  const loadData = loader();

  $: if (data) {
    maxReferrals = Math.max(...data.map((x) => x['Total referrals']));
    row = data[date];
    const getData = (x) => ({ channel: x, value: row[x] });
    channels = [
      'Approved Delivery Partner',
      'Professional',
      'Guardian',
      'Self',
    ].map(getData);
    reasons = [
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
    ].map(getData);
    priorityGroups = [
      'Child mental health',
      'BAMER',
      'Children with SEN',
      'Children under 5',
      'At risk of (outside) exploitation',
      'Young carers',
    ].map(getData);
  }
  const togglePlay = () => {
    if (player) {
      window.clearInterval(player);
      player = undefined;
      return;
    }
    player = window.setInterval(() => {
      date = (date + 1) % data.length;
    }, 500);
  };
</script>

<style type="text/scss">
  ul {
    display: block;
    width: 100%;
  }
  // ul {
  //   display: grid;
  //   grid-template-columns: repeat(2, 1fr);
  // }
  // li {
  //   display: block;
  // }
</style>

<section class="barnardos">
  <h2>The Child's Perspective</h2>
  {#await loadData}
    <p>Loading data...</p>
  {:then}
    <ul>
      <li>Week ending {row['date']}</li>
      <li>
        <button on:click={togglePlay}>{ player ? 'Stop' : 'Play' }</button>
        <input
          type="range"
          bind:value={date}
          min="0"
          max={data.length - 1}
          step="1" />
      </li>
      <li>{row['Total referrals']}</li>
      <li>
        Breakdown by channel
        <table>
          <tr>
            <td>All Channels</td>
            <td class="wider">
              <Bar value={row['Total referrals']} max={maxReferrals} />
            </td>
            <td>{row['Total referrals']}</td>
          </tr>
          {#each channels as { channel, value }}
            <tr>
              <td>{channel}</td>
              <td class="wider">
                <Bar {value} max={maxReferrals} />
              </td>
              <td>{value}</td>
            </tr>
          {/each}
        </table>
      </li>
      <li>
        <p>Reasons</p>
        <table>
          {#each reasons as { channel, value }}
            <tr>
              <td>{channel}</td>
              <td class="wider">
                <Bar {value} />
              </td>
              <td>{value}%</td>
            </tr>
          {/each}
        </table>
      </li>
      <li>
        <p>Priority Group</p>
        <table>
          {#each priorityGroups as { channel, value }}
            <tr>
              <td>{channel}</td>
              <td class="wider">
                <Bar {value} />
              </td>
              <td>{value}%</td>
            </tr>
          {/each}
        </table>
      </li>
    </ul>
  {/await}
</section>
