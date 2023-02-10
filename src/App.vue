<script>


import { RouterLink, RouterView } from 'vue-router';
import Header from './components/Header.vue';
import Menu from './components/Menu.vue'

export default {
   components: {
    Header,Menu
  },
  data(){
    return {}
  }
}
  </script>

<template>
<Header />
<div class="grid grid-cols-12">
<div class="col-span-12 md:col-span-3 lg:col-span-3"><Menu /></div>
<div class="col-span-12 md:col-span-9 lg:col-span-9 page-content" >

  <RouterView />
</div>

</div>
</template>



