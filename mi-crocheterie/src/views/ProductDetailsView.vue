<template>
  <NavBar>
    <div class="nav-button">
      <logout-button class="logout-button"></logout-button>
    </div>
  </NavBar>
  <div class="details">
    <div v-if="!isLoading">
      <div class="product-details">
          <h1 class="product-name"> {{ product.title }}</h1>
          <div class="product-info">
            <div class="slider-container">  
              <img class="product-img" :src="product.images[0]" />
              <img class="product-img" :src="product.images[1]"/>
              <img class="product-img" :src="product.images[2]"/>
            </div> 
            <p class="product-description">{{product.description}}</p>
          </div>
        </div>
      </div>
    <div v-else>Cargando...</div>
  </div>
</template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import useProducts from '@/composables/useProducts';
  import NavBar from '@/components/NavBar.vue';
  import LogoutButton from '@/components/LogoutButton.vue';

  
  
  export default defineComponent({
    name: 'productDetailsView',
    components: {
      NavBar,
      LogoutButton

    },
    props: {
      id: {
        type: Number,
        required: true,
      },
    userRole: String,
    },

    setup(props) {
        const {product, isLoading, fetchProductById} = useProducts()

        fetchProductById(props.id)


      return {product, isLoading}
    }
  });
</script>

<style scoped>

.product-details {
  min-height: 200px;
  max-width: 70%;
  border: 1px solid black;
  border-radius: 1rem;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
}

.details {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.product-img {
  flex: 0 0 100%;
  width: 100%;
  object-fit: cover;
  scroll-snap-align: center;
}

.product-info {
  display: flex;
  direction: columns;
  
}


.product-info {
    width: 100%;
    background-color: blanchedalmond;
    padding: 2px;
    text-align: end;
    border-radius: 1rem;
}

.product-description {
  font-size: medium;
}

.slider-container {
  display: flex;
  width: 100%;
  height: 100vh;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
}


</style>