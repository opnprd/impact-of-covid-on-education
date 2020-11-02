<script>
  export let value;
  export let max = 100;
</script>

<svg viewBox='0 0 1 1' preserveAspectRatio='xMidYMin slice'>
  <rect x=0 y=0 width={value / max} height=1 />
</svg>