<template>
    <div class="item">
        <Quantity :item="item" class="item--quantity" />
        <div class="item--img-container">
            <img class="item--img" :src="imagePath" />
        </div>
        <div class="content">
            <h3 class="item--name">{{ item.name }}</h3>
            <a class="item--observation" @click="onShowObservationModal">Adicionar observação</a>
            <p class="item--observation-text">{{ item.observations }}</p>
        </div>
        <p class="item--price">{{ item.price | currency }}</p>
        <Modal :show="showObservationModal" @on-modal-close="onCloseObservationModal">
            <div class="modal-content">
                <h1>Adicionar observação</h1>
                <textarea v-model="item.observations" rows="8"></textarea>
                <button class="secondary-button" @click="onCloseObservationModal">Cancelar</button>
                <button class="primary-button" @click="saveObservation">Salvar</button>
            </div>
        </Modal>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
import Quantity from './Quantity';
import Modal from './Modal.vue';

export default {
    name: 'CartItem',
    components: {
        Quantity,
        Modal
    },
    data() {
        return {
            showObservationModal: false
        };
    },
    props: {
        item: {}
    },
    filters: {
        currency(value) {
            return `R$ ${value.toLocaleString('pt-br', { minimumFractionDigits: 2 })}`;
        }
    },
    computed: {
        imagePath() {
            return require(`../assets/images/${this.item.id}.png`);
        }
    },
    methods: {
        ...mapActions(['increaseQuantity', 'decreaseQuantity']),
        onShowObservationModal() {
            this.showObservationModal = true;
        },
        onCloseObservationModal() {
            this.showObservationModal = false;
        },
        saveObservation() {
            this.$store.dispatch('addObservation', this.item);
            this.showObservationModal = false;
        }
    }
};
</script>

<style lang="less" scoped>
.item {
    display: flex;
    padding: 20px 0;
    border-bottom: 1px solid @light-grey;

    &--quantity {
        display: flex;
        align-items: center;
        padding-right: 40px;

        .number {
            font-weight: 500;
            font-size: 18px;
            color: @yellow;
            width: 28px;
            text-align: center;
        }

        .buttons {
            font-weight: 600;
            font-size: 18px;
            cursor: pointer;
            background: none;
            border: 0;

            &:focus {
                outline: 0;
            }
        }
    }

    &--img-container {
        border-radius: 8px;
        background: @light-yellow;
        width: 81px;
        height: 66px;
        display: flex;
        align-items: center;
    }

    &--img {
        width: 65px;
        display: block;
        margin: auto;
    }

    &--name {
        font-weight: 600;
        font-size: 18px;
        margin: 0;
    }

    &--observation {
        font-weight: 500;
        font-size: 12px;
        color: @dark-grey;
        text-decoration: underline;
        cursor: pointer;
    }

    &--observation-text {
        font-size: 12px;
        color: @dark-grey;
    }

    .content {
        flex-grow: 1;
        padding: 0 20px;
    }

    &--price {
        font-weight: 600;
        font-size: 18px;
        line-height: 27px;
        color: @yellow;
    }

    .modal-content {
        text-align: center;

        textarea {
            width: 100%;
            margin-bottom: 20px;
        }

        button + button {
            margin-left: 15px;
        }
    }

    @media @tablets {
        flex-wrap: wrap;

        &--img-container {
            order: 1;
        }

        .content {
            order: 2;
        }

        &--quantity {
            order: 3;
            padding: 0;
            width: 81px;
            justify-content: center;
        }

        &--price {
            order: 4;
            padding: 0 20px;
            margin: 5px 0;
        }

        .modal-content {
            h1 {
                font-size: 20px;
            }
        }
    }
}
</style>
