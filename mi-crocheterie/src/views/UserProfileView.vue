<template>
  <NavBar>
    <div class="nav-button">
      <logout-button class="logout-button"></logout-button>
    </div>
  </NavBar>
  <br />
    <div>
      <h1>Perfil de usuario</h1>
    </div>
  <div class="user-details">
    <div class="details">
        <div v-if="isLoading">Cargando...</div>
        <div v-else>
          <div class="user-profile">
              <h1 class="user-name"> {{ user.name }}</h1>
              <p class="user-info">Id: {{ user.role }}</p>
              <p class="user-info">Email: {{ user.email }}</p>
              <p class="user-info">Rol: {{ user.role }}</p>
          <div class="avatar">  
              <img class="user-avatar" :src="user.avatar" />
          </div>
        </div>
  </div> 
    
  </div>
</div> 
</template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import useUser from '@/composables/useUser';
  import NavBar from '@/components/NavBar.vue';
  import LogoutButton from '@/components/LogoutButton.vue';

  export default defineComponent({
    name: 'userProfileView',
    components: {
      NavBar,
      LogoutButton
    },
    

    setup() {
      const {user, isLoading, getUserInfo} = useUser()

      getUserInfo()

      console.log(user)

      return {
        user,
        isLoading
      }
    }
  });
  </script>

<style scoped>

.user-details {
  display: flex;
  justify-content: center;
}

.details {
  max-height: 40%;
  max-width: 50%;
  border: 1px solid black;
  border-radius: 1rem;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
}


.user-avatar {
  flex: 0 0 100%;
  width: 100%;
  object-fit: cover;
}

</style>