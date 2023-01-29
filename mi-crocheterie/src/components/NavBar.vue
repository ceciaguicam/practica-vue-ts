<template>
    <nav>
        <div class="store-name"><p>Mi Tienda</p></div>
        <div class="nav-links">
            <router-link to="/">Productos</router-link> |
            <router-link to="/user-profile">Perfil</router-link>
        </div>
        <div class="nav-button">
            <slot></slot>
        </div>
  </nav>
</template>

<script lang="ts">

    import { defineComponent } from 'vue';
    export default defineComponent({
        name: "NavBar"
})
</script>

<style scoped>

    nav {
        padding: 30px;
        background-color: rgb(81, 234, 139);
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
  
    nav a {
        font-weight: bold;
        color: #2c3e50;
    }
    
    nav a.router-link-exact-active {
        color: rgb(26, 117, 61);
    }

</style>

