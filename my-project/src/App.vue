<template>
 <Header/>
 <Footer/>
</template>

<script>
// b1: import vào

import Header from './components/ComHeader.vue'

import Footer from './components/ComFooter.vue'
export default {
  name: 'App',
  components: {

    Header,
    Footer,
 
  }
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /* color: #2c3e50; */
    position: relative;
    top: -20px; 
    width: 100%; 
    margin-top: 20px; 
    box-sizing: border-box; 
   
}
</style>
