<template>
    <div class="g-recaptcha-container">
        <form @submit.prevent="submitForm">
            <div class="g-recaptcha" ref="recaptchaElement" data-sitekey="6LdUFOMmAAAAAB9zknMxDPOwg2gBR2ek7yz1Ya14" data-callback="onRecaptchaVerify"
                data-hl="en"></div>
            <br />
        </form>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { validationCaptcha } from '../../scripts/validationForm';
export default defineComponent({
    mounted() {
       (window as any).onRecaptchaVerify = this.onRecaptchaVerify;
    },
    methods: {
        submitForm() { },
        
         async onRecaptchaVerify(response: any) {

           try {
                const data = await validationCaptcha(response);

                if (data) {
                    this.$emit("captchaValidStatus", true);
                } else {
                    console.log("error");
                    this.$emit("captchaValidStatus", false);
                }
            } catch (error) {
                console.error("Wystąpił błąd:", error);
            }
        },
        
    },
});
</script>

<style lang="scss" scoped>
@media only screen and (max-width: 569px) {
    .g-recaptcha {
        transform: scale(0.77);
        transform-origin: 0 0;
    }
}
</style>