<template>
  <div class="home">
    <CategoryMenu />
  </div>
</template>

<script>
// @ is an alias to /src
import CategoryMenu from '@/components/CategoryMenu.vue'
import axios from 'axios';

export default {
  name: 'Home',
  components: {
    CategoryMenu
  },
  created() {
    axios.get('http://localhost:3000/burguers').then( response => {
      console.log(response);
    })
  }
}
</script>
