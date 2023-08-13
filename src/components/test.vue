<template>
    <div class="test w-100 h-100 align-items-center d-flex justify-content-center">
        <a>test</a>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    setup() {
        
    },
})
</script>





<style lang="scss" scoped>

    .test {
        background-color: red;
        position: absolute;

        a {
            color: green;
        }
        a:hover{
            color: black;
        }
    }

</style>