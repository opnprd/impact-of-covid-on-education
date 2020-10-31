<script>
  import Barnardos from './components/Barnardos.svelte';
  import ControlPanel from './components/ControlPanel.svelte';
  import Header from './components/Header.svelte';
  import Mumsnet from './components/Mumsnet.svelte';
  import TeacherTapp from './components/TeacherTapp.svelte';
</script>

<Header/>
<ControlPanel/>
<main role='main'>
  <Barnardos/>
  <Mumsnet/>
  <TeacherTapp/>  
</main>
