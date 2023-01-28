<template>
    <button class="btn btn-danger btn-sm">
        <p class="button-text">Cerrar sesión</p>
    </button>
</template>

<script lang="ts">

    import { defineComponent } from 'vue';
    export default defineComponent({
        name: "LogoutButton"
})
</script>

<style scoped>

    .btn {

        font-size: 12px;
        border-radius: 10px;  
        text-align: center;
        vertical-align: middle;
        height: 30px;
    }

   



</style>