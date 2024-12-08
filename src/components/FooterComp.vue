<template>
  <footer
    v-if="
      homeData &&
      homeData.informacionGeneral &&
      homeData.informacionGeneral.redesSociales
    "
    class="footer-container"
  >
    <div class="social-section">
      <h2>Redes Sociales</h2>
      <p v-if="homeData.informacionGeneral.redesSociales.facebook">
        <a
          :href="homeData.informacionGeneral.redesSociales.facebook"
          target="_blank"
        >
          <i class="bi bi-facebook"></i>
        </a>
      </p>
      <p v-if="homeData.informacionGeneral.redesSociales.instagram">
        <a
          :href="homeData.informacionGeneral.redesSociales.instagram"
          target="_blank"
        >
          <i class="bi bi-instagram"></i>
        </a>
      </p>
      <p v-if="homeData.informacionGeneral.redesSociales.twitter">
        <a
          :href="homeData.informacionGeneral.redesSociales.twitter"
          target="_blank"
        >
          <i class="bi bi-twitter-x"></i>
        </a>
      </p>
    </div>
    <div class="contact-section">
      <h2>Contacto</h2>
      <p>
        <i class="bi bi-envelope-fill"></i>
        {{ homeData.informacionGeneral.correoElectronico }}
      </p>
      <p>
        <i class="bi bi-geo-alt-fill"></i>
        {{ homeData.informacionGeneral.direccion }}
      </p>
      <p>
        <i class="bi bi-telephone-fill"></i>
        {{ homeData.informacionGeneral.telefono }}
      </p>
    </div>
  </footer>
  <p v-else>Cargando...</p>
</template>

<script>
export default {
  name: "FooterComp",
  props: {
    homeData: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.footer-container {
  background-color: #f8f9fa;
  padding: 20px;
  border-top: 1px solid #e0e0e0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: left;
}

.contact-section,
.social-section {
  width: 45%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.bi {
  font-size: 1.03em;
}

.contact-section {
  text-align: right;
}

h2 {
  margin-top: 0;
  font-size: 18px;
  color: #333;
}

p {
  margin: 5px 0;
  font-size: 14px;
  color: #666;
}

a {
  color: #007bff;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>
