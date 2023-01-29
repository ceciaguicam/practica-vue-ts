<template>
    <br />
    <div>
      <h1>Inicio de sesión</h1>
    </div>
    <br />
    <div class="login-form">
      <form>
        <div>
          <input type="email" placeholder="E-mail" v-model="email" required>
        </div>
        <br />
        <div>
          <input type="password" placeholder="Password" v-model="password" required>
        </div> 
        <br />
        <div id="lower">
            <input type="submit" value="Login">
        </div>
      </form>
    </div>
  </template>
  
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  
  export default defineComponent({
    name: 'loginView',
    components: {
    },
  
  setup() {
    const email = ref<string>('')
    const password = ref<string>('')

    return {
      email,
      password
    }       
  }
});

  
  </script>

<style scoped>

.login-form {
  display: flex;
  flex-direction: column;
}

</style>