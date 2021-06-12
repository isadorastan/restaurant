<template>
    <div class="add-cart">
        <router-link to="/" class="add-cart--go-back" v-if="isSmallScreens()">←️ Voltar</router-link>
        <Item :item="item" class="add-cart--item" />
        <div class="add-cart--container">
          <span>Quantidade</span>
          <Quantity :item="item" :useStore="false" />
        </div>
        <p class="add-cart--observations">Observações:</p>
        <textarea v-model="observations" rows="10"></textarea>
        <button>Adicionar ao carrinho</button>
    </div>
</template>

<script>
import Mixin from '@/mixins/mixins';
import axios from 'axios';
import Item from './Item';
import Quantity from './Quantity';

export default {
    props: ['id'],
    mixins: [Mixin],
    components: {
      Item,
      Quantity
    },
    data() {
      return {
        item: {},
        observations: ''
      }
    },
    computed: {
        selectedCategory() {
            return this.$store.state.selectedCategory;
        }
    },
    created() {
        axios.get(`http://localhost:3000/${this.selectedCategory}/${this.id}`).then((response) => {
            this.item = { quantity: 1, ...response.data};
        });
    }
};
</script>

<style lang="less" scoped>
.add-cart {
    padding: 50px 20px;

    &--go-back {
        font-weight: 600;
        font-size: 18px;
        text-decoration: none;
        color: black;
    }

    &--item {
      margin-top: 50px;
    }

    &--container {
      display: flex;
      border: 1px solid @light-grey;
      padding: 10px 20px;
      border-radius: 8px;
      margin: 20px 0;

      span {
        margin-right: auto;
        font-weight: 600;
        font-size: 16px;
      }
    }

    &--observations {
      font-weight: 600;
      font-size: 16px;
    }

    textarea {
      width: 100%;
      border-radius: 8px;
      border: 1px solid @light-grey;
    }

    button { 
      width: calc(100% - 40px);
      position: fixed;
      bottom: 30px;
      left: 20px;
      right: 20px;
    }
}
</style>
