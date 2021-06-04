<template>
    <div class="items-list">
        <Loading v-if="isLoading" />
        <Item v-for="item in itemsList" :key="item.id" :item="item" />
    </div>
</template>

<script>
import axios from 'axios';
import Item from './Item';
import Loading from './Loading';

export default {
    name: 'ItemsList',
    components: {
        Item,
        Loading
    },
    data() {
        return {
            itemsList: [],
            isLoading: false
        };
    },
    created() {},
    computed: {
        selectedCategory: {
            get() {
                return this.$store.state.selectedCategory;
            }
        }
    },
    methods: {
        getItemsList() {
            this.isLoading = true;
            this.itemsList = [];

            setTimeout( () => {
                axios.get(`http://localhost:3000/${this.selectedCategory}`).then((response) => {
                    this.itemsList = response.data;
                    this.isLoading = false;
                });
            }, 2000);
        }
    },
    watch: {
        selectedCategory() {
            this.getItemsList();
        }
    }
};
</script>

<style lang="less" scoped>
.items-list {
    margin: 50px;
    display: flex;
    width: 100%;

    @media @tablets {
        flex-wrap: wrap;
        margin: 20px;
    }
}
</style>
