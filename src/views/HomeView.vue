<template>
  <!-- Header -->
  <LayoutComp :homeData="homeData">
    <!-- Contenido Principal -->
    <main class="home-container" v-if="homeData">
      <!-- Proveedores -->
      <section v-if="homeData.proveedoresActuales" class="section proveedores">
        <h2>Proveedores</h2>
        <table class="table table-bordered">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Contacto</th>
              <th>Teléfono</th>
              <th>Dirección</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="provider in homeData.proveedoresActuales"
              :key="provider.nombre"
            >
              <td>{{ provider.nombre }}</td>
              <td>{{ provider.contacto }}</td>
              <td>{{ provider.telefono }}</td>
              <td>{{ provider.direccion }}</td>
            </tr>
          </tbody>
        </table>
      </section>

      <!-- Promociones Activas -->
      <section v-if="homeData.promocionesActuales" class="section promociones">
        <h2>Promociones Activas</h2>
        <div class="card-deck">
          <div
            v-for="promotion in homeData.promocionesActuales"
            :key="promotion.descripcion"
            class="card"
          >
            <div class="card-header">
              <h3 class="card-title">{{ promotion.descripcion }}</h3>
            </div>
            <div class="card-body d-flex justify-content-between">
              <small class="text-muted"
                >Inicio: {{ promotion.fechaInicio }}</small
              >
              <small class="text-muted">Fin: {{ promotion.fechaFin }}</small>
            </div>
          </div>
        </div>
      </section>

      <!-- Botón de Consultar Productos -->
      <section class="section productos">
        <h2>Listado de Productos</h2>
        <router-link to="/products" class="btn btn-primary"
          >Consultar Productos</router-link
        >
      </section>
    </main>
    <!-- Footer -->
  </LayoutComp>
</template>

<script>
import LayoutComp from "@/components/LayoutComp.vue";

export default {
  name: "HomeView",
  components: {
    LayoutComp,
  },
  data() {
    return {
      homeData: null,
    };
  },
  async mounted() {
    try {
      const response = await fetch(
        "https://raw.githubusercontent.com/shaka0241/ferreteria_Api/main/home.json"
      );
      const data = await response.json();
      this.homeData = data.paginaHome;
    } catch (error) {
      console.error("Error al obtener los datos del home:", error);
    }
  },
};
</script>

<style scoped>
.home-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.section {
  margin-bottom: 20px;
}

h1,
h2,
h3 {
  margin: 15px 0;
}

a {
  color: #007bff;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

.btn {
  display: inline-block;
  padding: 10px 20px;
  font-size: 16px;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
}

.btn-primary {
  background-color: #007bff;
}

.btn-primary:hover {
  background-color: #0056b3;
}

footer {
  margin-top: 20px;
  padding: 10px;
  background-color: #f1f1f1;
  border-top: 1px solid #ddd;
}

.footer .social,
.footer .contact {
  width: 45%;
}

.table {
  width: 100%;
  margin-bottom: 20px;
  border-collapse: collapse;
}

.table th,
.table td {
  padding: 10px;
  text-align: left;
  border: 1px solid #ddd;
}

.card-deck {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.card {
  flex: 1;
  min-width: 250px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.card-header {
  background-color: #f7f7f7;
  padding: 10px 15px;
  border-bottom: 1px solid #ddd;
}

.card-title {
  margin: 0;
  font-size: 18px;
}

.card-body {
  padding: 15px;
}
</style>
