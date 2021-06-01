<template>
  <div class="home">
    <CategoryMenu />
    <ItemsList />
  </div>
</template>

<script>
// @ is an alias to /src
import CategoryMenu from '@/components/CategoryMenu.vue';
import ItemsList from '@/components/ItemsList.vue';

export default {
  name: 'Home',
  components: {
    CategoryMenu,
    ItemsList
  },
}
</script>
<style scoped lang="less">
  .home {
    display: flex;

    @media @tablets {
       flex-direction: column;
    }
  }
</style>
