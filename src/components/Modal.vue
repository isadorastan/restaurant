<template>
    <div class="modal" v-if="show">
        <div class="modal--content">
            <div class="modal--close" v-html="closeIcon" @click="onCloseButtonClick"></div>
            <slot></slot>
        </div>
    </div>
</template>

<script>
import feather from 'feather-icons';

export default {
    name: 'Modal',
    props: {
        show: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        closeIcon() {
            return feather.icons.x.toSvg()
        }
    },
    methods: {
        onCloseButtonClick() {
            this.$emit('on-modal-close');
        }
    }
};
</script>

<style lang="less" scoped>
    .modal {
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background: rgba(0,0,0,0.4);

        &--content {
            background: white;
            border-radius: 8px;
            width: 600px;
            padding: 30px;

            position: absolute;
            top: 50%;
            right: 50%;
            transform: translate(50%, -50%);
        }

        &--close {
            text-align: right;
        }

        @media @tablets {
            &--content {
                width: 90%;
                padding: 15px;
            }
        }
    }

</style>
