<template>

  <div class="container_page"></div>
  <img class="logo_ordotech" src="../../assets/logo/OrdoTech_logo.jpg">
  <div class="form-container">

    <div class="flex">
      <div class="register">
        <router-link to="/chooseRole"><p class="info_form">Vous n'avez pas encore de compte ? Cliquez ici !</p></router-link>
        <div class="signup_form">

          <h1 class="titre_form">Se connecter</h1>
          <div class="ligne">
            <label><b>E-mail</b></label>
            <input type="email" v-model="mail" placeholder="Email" name="mail" required>
          </div>
          <div class="ligne">
            <label><b>Mot de Passe</b></label>
            <input type="password" v-model="mdp" placeholder="Mot de Passe" name="mdp" required>
          </div>

          <button class="signupButton" >Se connecter !</button>

          <!-- Bouton pour naviguer vers le formulaire de prescription à supprimer -->


        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login"
}
</script>

<style src="../../style/login-register.css" scoped>
</style>
