<template>
  <LayoutComp :homeData="homeData">
    <main class="product-detail-container" v-if="product">
      <p>{{ product.categoria }}</p>
      <h2>{{ product.nombre }}</h2>
      <p>{{ product.descripcion }}</p>
      <p>Precio: {{ product.precio }}</p>
      <p>Stock: {{ product.stock }}</p>
      <router-link to="/products">Regresar al listado de productos</router-link>
    </main>
  </LayoutComp>
</template>

<script>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import LayoutComp from "@/components/LayoutComp.vue";

export default {
  name: "ProductDetailView",
  components: {
    LayoutComp,
  },
  setup() {
    const product = ref(null);
    const homeData = ref(null);
    const route = useRoute();

    const fetchProduct = async () => {
      try {
        const response = await fetch(
          "https://raw.githubusercontent.com/shaka0241/ferreteria_Api/main/productos.json"
        );
        const data = await response.json();
        product.value = data.productos.find(
          (p) => p.id === parseInt(route.params.id)
        );
      } catch (error) {
        console.error("Error fetching product", error);
      }
    };

    const fetchHomeData = async () => {
      try {
        const response = await fetch(
          "https://raw.githubusercontent.com/shaka0241/ferreteria_Api/main/home.json"
        );
        const data = await response.json();
        homeData.value = data.paginaHome;
      } catch (error) {
        console.error("Error fetching home data", error);
      }
    };

    onMounted(() => {
      fetchProduct();
      fetchHomeData();
    });

    return { product, homeData };
  },
};
</script>

<style scoped>
.product-detail-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}
</style>
