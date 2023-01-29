<template>
  <div class="details">
    <div v-if="!isLoading">
      <div class="product-details">
          <h1 class="product-name"> {{ product.title }}</h1>
          <div class="product-info">
            <img class="product-img" :src="product.images[0]" alt="" />
            <p>{{product.description}}</p>
          </div>
        </div>
      </div>
    <div v-else>Cargando...</div>
  </div>
</template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import useProducts from '@/composables/useProducts';

  
  
  export default defineComponent({
    name: 'productDetailsView',
    components: {

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
  margin-right: 10px;
  margin-left: 10px;
}

/* .details {
    min-height: 200px;
    max-width: 50%;
    border: 1px solid black;
    border-radius: 1rem;
    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-flow: column wrap;
    justify-content: space-between;
} */

.product-info {
    width: 100%;
    background-color: blanchedalmond;
    padding: 2px;
    text-align: end;
    border-radius: 1rem;
}

</style>