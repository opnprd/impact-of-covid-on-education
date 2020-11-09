<script>
  import Seo from './components/Seo.svelte';
  import Barnardos from './components/Barnardos.svelte';
  import ControlPanel from './components/ControlPanel.svelte';
  import Header from './components/Header.svelte';
  import Mumsnet from './components/Mumsnet.svelte';
  import TeacherTapp from './components/TeacherTapp.svelte';

  const title='Data About Children’s Lives in the Pandemic';
</script>

<Seo
  title='ODI Analyses: { title }'
  description='Visualisations supporting the ODI Analyses study on the impact of the Covid-19 Pandemic on Children and Education.'
  keywords='open,data,odi,study,research,education,lockdown,pandemic,covid,2020,children'
/>

<Header { title }/>
<ControlPanel/>
<main role='main'>
  <Barnardos/>
  <TeacherTapp/>  
  <Mumsnet/>
</main>
