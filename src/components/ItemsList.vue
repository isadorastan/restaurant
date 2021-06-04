<template>
    <div class="items-list">
        <Item v-for="item in itemsList" :key="item.id" :item="item" />
    </div>
</template>

<script>
import axios from 'axios';
import Item from './Item';

export default {
    name: 'ItemsList',
    components: {
        Item
    },
    data() {
        return {
            itemsList: []
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
            axios.get(`http://localhost:3000/${this.selectedCategory}`).then((response) => {
                this.itemsList = response.data;
            });
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

    @media @tablets {
        flex-wrap: wrap;
        margin: 20px;
    }
}
</style>
