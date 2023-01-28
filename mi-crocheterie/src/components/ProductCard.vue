<template>
  <div class="product-card">
    <div class="product-img">
      <img :src="product.images[0]" :alt="product.title" />
    </div>
    <div class="user-info">
      <div class="user-name">{{ product.title }}</div>
      <div class="buttons">
        <!-- <button class="btn btn-sm btn-primary" @click="$emit('addCart', user)">
          Al Carro
        </button>
        <button class="btn btn-sm btn-success" @click="$emit('goDetail', user)">
          Detalle
        </button> -->
        <button class="btn btn-sm btn-primary">
          Al Carro
        </button>
        <button>
          Detalle
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { Product } from "@/models/product";
  import { defineComponent, PropType } from "vue";

  export default defineComponent({
    props: {
      product: {
        type: Object as PropType<Product>,
        //required: true,
      },
    },


  });

</script>
  
  <style scoped>
  .product-card {
    width: 300px;
    display: flex;
    border: 1px solid black;
  }
  
  .product-img {
    width: 50%;
  }
  .product-img > img {
    width: 100%;
    height: auto;
  }
  </style>