<template>
  <header class="header-container">
    <div class="logo-title">
      <img src="../assets/logo.svg" alt="Logo" class="logo" />
      <h1 v-if="homeData">{{ homeData.nombre }}</h1>
      <p v-else>Cargando...</p>
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderComp",
  props: {
    homeData: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.header-container {
  background-color: #f8f9fa;
  padding: 20px;
  text-align: center;
  border-bottom: 1px solid #e0e0e0;
}

.logo-title {
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo {
  max-width: 10.03em;
  margin-right: 30px;
}

h1 {
  margin: 0;
  font-size: 24px;
  color: #333;
}

p {
  margin: 5px 0 0;
  font-size: 14px;
  color: #666;
}
</style>
