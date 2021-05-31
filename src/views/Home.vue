<template>
  <div class="home">
    <CategoryMenu />
  </div>
</template>

<script>
// @ is an alias to /src
import CategoryMenu from '@/components/CategoryMenu.vue'

export default {
  name: 'Home',
  components: {
    CategoryMenu
  }
}
</script>
