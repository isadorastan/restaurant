<template>
    <div class="order">
        <form>
            <div class="user-data">
                <p class="section-title">Seus dados</p>
                <div class="input-field">
                    <label for="">{{ formData.name.label }}</label>
                    <input
                        type="text"
                        :placeholder="formData.name.placeholder"
                        v-model="formData.name.value"
                        @blur="formData.name.isValid()"
                        :class="{ error: !formData.name.valid }"
                    />
                    <p class="error-message" v-if="!formData.name.valid">{{ formData.name.errorMessage }}</p>
                </div>
                <div class="input-field">
                    <label for="">{{ formData.cellphone.label }}</label>
                    <input
                        type="text"
                        :placeholder="formData.cellphone.placeholder"
                        v-mask="'(##) # ####-####'"
                        v-model="formData.cellphone.value"
                        @blur="formData.cellphone.isValid()"
                        :class="{ error: !formData.cellphone.valid }"
                    />
                    <p class="error-message" v-if="!formData.cellphone.valid">{{ formData.cellphone.errorMessage }}</p>
                </div>
            </div>

            <div class="address">
              <p class="section-title">Endereço</p>
              <div class="delivery-type">
                <div class="radio-options">
                  <input type="radio" name="delivery-type" id="store" checked>
                  <label for="store">Retirar na loja</label>
                </div>

                <div class="radio-options">
                  <input type="radio" name="delivery-type" id="delivery">
                  <label for="delivery">Delivery</label>
                </div>
              </div>
              <a>Adicionar endereço</a>
            </div>
        </form>
        <button class="primary-button" @click="orderItens">Concluir pedido</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            formData: {
                name: {
                    value: '',
                    placeholder: 'Digite seu nome',
                    errorMessage: 'O nome é obrigatório',
                    label: 'Nome*',
                    valid: true,
                    isValid: () => {
                        this.formData.name.valid = this.formData.name.value.length;
                    }
                },
                cellphone: {
                    value: '',
                    placeholder: 'Digite seu celular',
                    errorMessage: 'O celular é obrigatório',
                    label: 'Celular*',
                    valid: true,
                    isValid: () => {
                        this.formData.cellphone.valid = this.formData.cellphone.value.length === 16;
                    }
                }
            }
        };
    },
    methods: {
        triggerValidations() {
            this.formData.name.isValid();
            this.formData.cellphone.isValid();
        },
        orderItens() {
            this.triggerValidations();
        }
    }
};
</script>

<style lang="less" scoped>
.order {
    width: 720px;
    margin: 30px auto;
    background: white;
    border-radius: 8px;
    padding: 30px 50px;

    form {
        display: flex;
        flex-direction: column;

        .input-field {
            display: flex;
            flex-direction: column;

            & + .input-field {
                margin-top: 15px;
            }
        }

        .section-title {
            font-weight: 600;
            font-size: 22px;
            margin-bottom: 20px;
        }

        label {
            font-weight: 500;
            font-size: 16px;
            margin-bottom: 5px;
        }

        .error-message {
            font-size: 12px;
            color: @error-color;
        }


        .address {
          .delivery-type {
            display: flex;
          }

          a {
            color: @pink;
            font-weight: normal;
            font-size: 12px;
            text-decoration: underline;
            cursor: pointer;
          }
        }

        .radio-options {
          display: flex;
          align-items: center;   

          &+.radio-options {
            margin-left: 25px;
          }

          label {
            padding-left: 10px;
            margin: 0;
          }
        }
    }

    button {
        margin: 30px auto;
    }
}
</style>
