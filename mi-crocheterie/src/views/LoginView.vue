<template>
    <br />
    <div>
      <h1>Inicio de sesión</h1>
    </div>
    <br />
    <div class="login-form">
      <form>
        <div>
          <label for="email">E-mail:</label>
          <input type="email" required>
        </div>
        <br />
        <div>
          <label for="password">Password:</label>
          <input type="password" required>
        </div> 
        <br />
        <div id="lower">
            <input type="submit" value="Login">
        </div>
      </form>
    </div>
  </template>
  
<script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'loginView',
    components: {
    },
  });
  </script>

<style scoped>

.login-form {
  display: flex;
  flex-direction: column;
}

</style>