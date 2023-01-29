<template>
  <NavBar>
    <div class="nav-button">
      <logout-button class="logout-button"></logout-button>
    </div>
  </NavBar>
  <div>
    <h1>Lista de productos</h1>
  </div>
  <div>
    <div v-if="isLoading">Cargando...</div>
    <div class="product-list" v-else>
      <ProductCard v-for="product in products" :key="product.id" :product="product" @goDetail="goDetail"/>
    </div>
  </div>
</template>

  <!-- <UserItem
        
        @addCart="addElementToCart"
        
      /> -->
  
  <script lang="ts">
    import { defineComponent } from 'vue';
    import ProductCard from '@/components/ProductCard.vue';
    import useProducts from '@/composables/useProducts';
    import router from '@/router';
    import { Product } from '@/models/product';
    import NavBar from '@/components/NavBar.vue';
    
    export default defineComponent({
      name: 'productsListView',
      components: {
          ProductCard,
          NavBar
      },

      setup() {
        const {products, isLoading, fetchProducts} = useProducts()

        fetchProducts()


      return {
        products, 
        isLoading,
        goDetail: (product: Product) =>
          router.push({name: "productDetailsView", params: { id: product.id } })
        }
    }

  });
  </script>

<style scoped>

.product-list {
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  gap: 1rem 1rem;
  margin-left: 10px;
}

</style>


