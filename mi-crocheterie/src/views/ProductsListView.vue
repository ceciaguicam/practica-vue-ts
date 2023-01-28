<template>
  <div>
    <h1>Lista de productos</h1>
  </div>
  <div>
    <div v-if="isLoading">Cargando...</div>
    <div class="product-list" v-else>
      <!-- <UserItem
        v-for="product in products"
        :key="product.id"
        :user="product"
        @addCart="addElementToCart"
        @goDetail="goDetail"
      /> -->
      <ProductCard v-for="product in products" :key="product.id" :product="product" />
    </div>
  </div>
</template>
  
  <script lang="ts">
    import { defineComponent } from 'vue';
    import ProductCard from '@/components/ProductCard.vue';
    import useProducts from '@/composables/useProducts';
    
    export default defineComponent({
      name: 'productsListView',
      components: {
          ProductCard
      },

      setup() {
      const {products, isLoading, fetchProducts} = useProducts()

      fetchProducts()

      return {products, isLoading}
    }

  });
  </script>

<style scoped>

.home {
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  gap: 1rem 1rem;
}
</style>