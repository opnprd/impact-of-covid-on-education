<script>
  import Seo from './components/Seo.svelte';
  import Barnardos from './components/Barnardos.svelte';
  import ControlPanel from './components/ControlPanel.svelte';
  import Header from './components/Header.svelte';
  import Mumsnet from './components/Mumsnet.svelte';
  import TeacherTapp from './components/TeacherTapp.svelte';
</script>

<Seo
  title='ODI Analyses: Data about Children in Lockdown'
  description='Visualisations supporting the ODI Analyses study on the impact of Lockdown on Children and Education.'
  keywords='open,data,odi,study,research,education,lockdown,covid,2020,children'
/>

<Header/>
<ControlPanel/>
<main role='main'>
  <Barnardos/>
  <TeacherTapp/>  
  <Mumsnet/>
</main>
