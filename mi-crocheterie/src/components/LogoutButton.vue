<template>
    <button class="btn btn-danger btn-sm" @click="logout()">
        <p class="button-text">Cerrar sesión</p>
    </button>
</template>

<script lang="ts">

    import { defineComponent } from 'vue';
    import router from '@/router';

    export default defineComponent({
        name: "LogoutButton",

        setup() {

            const token = localStorage.getItem("token")

        return{
        logout() {
            localStorage.removeItem('token')
            router.push({name: "loginView"})
        },
        token
        }
}

        
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