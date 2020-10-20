<script>
  export let maxWidth = 500;
  export let lineHeight = 20;
  export let data;
</script>

<svg class="chart" width={ maxWidth + 100 } height={ lineHeight * data.responses.length } aria-labelledby="title desc" role="img">
  <title id="title">{ data.title }</title>
  <!-- <desc id="desc">4 apples; 8 bananas; 15 kiwis; 16 oranges; 23 lemons</desc> -->
  {#each data.responses as response, i }
  <g class="bar">
    <rect width={ maxWidth * response.respondents / data.respondents } height={ lineHeight - 1} y={lineHeight * i}></rect>
    <text x={ 5 + maxWidth * response.respondents / data.respondents } y={lineHeight * (i + 0.5)} dy=".35em">{ response.text }</text>
  </g>
  {/each}
</svg>
