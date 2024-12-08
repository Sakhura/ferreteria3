<template>
  <div class="confirmation-container">
    <h2>Confirmación de Registro</h2>
    <p>{{ message }}</p>
    <!-- Mensaje de confirmación -->
    <router-link to="/">Regresar al login</router-link>
    <!-- Enlace para ir a la página de login -->
  </div>
</template>

<script>
export default {
  name: "ConfirmationView",
  data() {
    return {
      message: "",
    };
  },
  async mounted() {
    const response = await fetch(
      "https://raw.githubusercontent.com/shaka0241/ferreteria_Api/main/registroresp.json"
    );
    const data = await response.json();
    this.message = data.respuestaRegistro.mensaje; // Obtener el mensaje de confirmación desde el JSON
  },
};
</script>

<style scoped>
.confirmation-container {
  max-width: 300px;
  margin: 0 auto;
  padding: 20px;
}
</style>
