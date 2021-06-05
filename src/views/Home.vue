<template>
  <div class="home">
    <CategoryMenu />
    <ItemsList />
    <Cart />
  </div>
</template>

<script>
// @ is an alias to /src
import CategoryMenu from '@/components/CategoryMenu.vue';
import ItemsList from '@/components/ItemsList.vue';
import Cart from '@/components/Cart.vue';

export default {
  name: 'Home',
  components: {
    CategoryMenu,
    ItemsList,
    Cart
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
