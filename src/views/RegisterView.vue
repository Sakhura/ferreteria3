<template>
  <div class="register-container">
    <img src="@/assets/logo.svg" alt="Logo" class="logo" />
    <div class="card">
      <h2>Registro de Usuario</h2>
      <form @submit.prevent="register">
        <div class="form-group">
          <label for="name">Nombre</label>
          <input
            type="text"
            id="name"
            v-model="name"
            required
            placeholder="Ingrese su nombre"
          />
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input
            type="email"
            id="email"
            v-model="email"
            required
            placeholder="Ingrese su email"
          />
        </div>
        <div class="form-group">
          <label for="phone">Teléfono</label>
          <input
            type="text"
            id="phone"
            v-model="phone"
            required
            placeholder="Ingrese su teléfono"
          />
        </div>
        <div class="form-group">
          <label for="password">Contraseña</label>
          <input
            type="password"
            id="password"
            v-model="password"
            required
            placeholder="Ingrese su contraseña"
          />
        </div>
        <div class="form-group">
          <label for="confirmPassword">Repetir Contraseña</label>
          <input
            type="password"
            id="confirmPassword"
            v-model="confirmPassword"
            required
            placeholder="Repita su contraseña"
          />
        </div>
        <button type="submit" class="btn btn-primary">Registrarme</button>
        <hr />
        <router-link to="/" class="login-link">Regresar al login</router-link>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "RegisterView",
  data() {
    return {
      name: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
    };
  },
  methods: {
    async register() {
      if (this.password !== this.confirmPassword) {
        alert("Las contraseñas no coinciden");
        return;
      }
      try {
        const response = await fetch(
          "https://raw.githubusercontent.com/shaka0241/ferreteria_Api/main/registroreq.json"
        );
        const data = await response.json();

        if (data.registroUsuario) {
          this.$router.push("/confirmation");
        }
      } catch (error) {
        console.error("Error durante el registro:", error);
        alert("Error al registrar el usuario. Intente nuevamente.");
      }
    },
  },
};
</script>

<style scoped>
.register-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
}

.logo {
  width: 200px;
  margin-bottom: 3px;
}

.card {
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
}

.form-group input {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
}

.btn {
  width: 100%;
  margin-bottom: 10px;
}

hr {
  margin: 20px 0;
}

.login-link {
  display: block;
  margin-top: 10px;
}
</style>
