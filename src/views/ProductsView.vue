<template>
  <!-- Header -->
  <LayoutComp :homeData="homeData">
    <main class="products-container">
      <h2>Listado de Productos</h2>
      <div class="card" v-for="product in products" :key="product.id">
        <div class="card-body">
          <p class="card-title">{{ product.categoria }}</p>
          <h5 class="card-text">{{ product.nombre }}</h5>
          <router-link :to="'/product/' + product.id" class="btn btn-primary">
            Ver Detalles
          </router-link>
        </div>
      </div>
      <router-link to="/home">Regresar al home</router-link>
    </main>
    <!-- Footer -->
  </LayoutComp>
</template>

<script>
import LayoutComp from "@/components/LayoutComp.vue";

export default {
  name: "ProductsView",
  components: {
    LayoutComp,
  },
  data() {
    return {
      products: [],
      homeData: null,
    };
  },
  async mounted() {
    try {
      const productsResponse = await fetch(
        "https://raw.githubusercontent.com/shaka0241/ferreteria_Api/main/productos.json"
      );
      const productsData = await productsResponse.json();
      this.products = productsData.productos;

      const homeResponse = await fetch(
        "https://raw.githubusercontent.com/shaka0241/ferreteria_Api/main/home.json"
      );
      const homeData = await homeResponse.json();
      this.homeData = homeData.paginaHome;
    } catch (error) {
      console.error("Error al obtener los datos:", error);
    }
  },
};
</script>

<style scoped>
.products-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}
</style>
