<template>
    <div class="home">
        <router-link to="/cart" class="cart-icon">
            <CartIcon />
        </router-link>
        <CategoryMenu />
        <ItemsList />
        <Cart class="cart-menu" />
    </div>
</template>

<script>
// @ is an alias to /src
import CategoryMenu from '@/components/CategoryMenu.vue';
import ItemsList from '@/components/ItemsList.vue';
import Cart from '@/components/Cart.vue';
import Mixin from '@/mixins/mixins';

import CartIcon from '@/assets/icons/cart.svg';

export default {
    name: 'Home',
    components: {
        CategoryMenu,
        ItemsList,
        Cart,
        CartIcon
    },
    mixins: [Mixin]
};
</script>
<style scoped lang="less">
.home {
    display: flex;

    .cart-icon {
        display: none;
    }

    @media @small-desktops {
        flex-direction: column;

        .cart-menu {
            display: none;
        }

        .cart-icon {
            width: 42px;
            height: 42px;
            background: @pink;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 20px 20px 20px auto;
        }
    }
}
</style>
