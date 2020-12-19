<template>
  <div id="app" class="bg-gray-100 font-sans">
    <Navigation></Navigation>
    <Header></Header>
    <div class="container mx-auto">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Navigation from './components/Navigation'
import Header from './components/Header'
export default {
  name: 'App',
  components: {
    Header, Navigation
  }
}
</script>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
body{
  margin: 0;
}
</style>
