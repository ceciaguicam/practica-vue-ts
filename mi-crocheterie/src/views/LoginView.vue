<template>
    <br />
    <div>
      <h1>Inicio de sesión</h1>
    </div>
    <br />
    <div class="login-form">
      <form>
        <div>
          <input type="email" placeholder="E-mail" v-model="credentials.email" required>
        </div>
        <br />
        <div>
          <input type="password" placeholder="Password" v-model="credentials.password" required>
        </div> 
        <br />
        <div id="lower">
            <input type="submit" value="Login" @click="login(credentials)">  
        </div>
      </form>
    </div>
 </template>
  
<script lang="ts">
  import useLogin from '@/composables/useLogin';
  import { defineComponent, ref } from 'vue';
  import { Credentials } from "@/models/credentials";
  
  export default defineComponent({
    name: 'loginView',
    components: {
    },
  
  setup() {
    
    const credentials = ref<Credentials>({
      email: null,
      password: null
    })

    const { login } = useLogin()

    return {
      credentials, 
      login
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