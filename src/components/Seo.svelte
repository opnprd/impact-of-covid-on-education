<script>
  export let title;
  export let description;
  export let keywords;
</script>

<svelte:head>
  <title>{ title }</title>
  <link href="https://odileeds.org/resources/images/favicon.ico" rel="shortcut icon" type="image/vnd.microsoft.icon">

  <!-- Twitter -->
  <meta name="twitter:card" content="summary">
	<meta name="twitter:site" content="@ODILeeds">
	<meta name="twitter:url" property="og:url" content="https://odileeds.org/">
	<meta name="twitter:title" property="og:title" content="{ title }">
	<meta name="twitter:description" property="og:description" content="{ description }">
	<meta name="twitter:image" property="og:image" content="https://odileeds.org/resources/images/odileeds.png">
	<!-- <script type="application/ld+json">{"@context":"http://schema.org","@type":"WebSite","url":"https://odileeds.org/","name":"ODI Leeds","potentialAction":{"@type":"SearchAction","target":"https://odileeds.org/search/?q={search_term_string}","query-input":"required name=search_term_string"}}</script> -->
  <meta name="keywords" content="{ keywords }">

</svelte:head>