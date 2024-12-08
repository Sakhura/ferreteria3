<template>
  <div class="login-container">
    <img src="@/assets/logo.svg" alt="Logo" class="logo" />
    <div class="card">
      <h2>Iniciar Sesión</h2>
      <form @submit.prevent="login">
        <div class="form-group">
          <label for="email">Correo Electrónico</label>
          <input
            type="email"
            id="email"
            v-model="email"
            required
            placeholder="Ingrese su correo electrónico"
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
        <button type="submit" class="btn btn-primary">Iniciar Sesión</button>
        <hr />
        <router-link to="/register" class="register-link"
          >Registrarse</router-link
        >
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginView",
  data() {
    return {
      email: "",
      password: "",
      validUser: null,
    };
  },
  methods: {
    async login() {
      try {
        const response = await fetch(
          "https://raw.githubusercontent.com/shaka0241/ferreteria_Api/main/login.json"
        );
        const data = await response.json();

        console.log("Datos recibidos:", data);

        if (data.login) {
          const { correoElectronico, contrasena } = data.login;

          if (
            this.email === correoElectronico &&
            this.password === contrasena
          ) {
            this.$router.push("/home");
          } else {
            alert("Correo electrónico o contraseña incorrectos");
          }
        } else {
          alert("Error: Datos del usuario no encontrados");
        }
      } catch (error) {
        console.error("Error durante el login:", error);
        alert("Error al iniciar sesión. Intente nuevamente.");
      }
    },
  },
};
</script>

<style scoped>
.login-container {
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

.register-link {
  display: block;
  margin-top: 10px;
}
</style>
