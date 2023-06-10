<template>
  <div class="form-container">
    <img class="logo_ordotech" src="../../assets/logo/OrdoTech_logo.jpg">
    <div class="flex">
      <div class="register">
        <router-link to="/"><p class="info_form">Vous possédez déjà un compte ? Cliquez ici !</p></router-link>
        <div class="signup_form">

          <h1 class="titre_form">Créer un compte</h1>

          <div class="ligne">
            <label><b>Nom</b></label>
            <input type="text" v-model="nom" placeholder="Nom" name="nom" required>
          </div>

          <div class="ligne">
            <label><b>Prénom</b></label>
            <input type="text" v-model="prenom" placeholder="Prénom" name="prenom" required>
          </div>

          <div class="ligne">
            <label><b>E-mail</b></label>
            <input type="email" v-model="mail" placeholder="E-mail" name="mail" required>
          </div>

          <div class="ligne">
            <label><b>Numéro de téléphone</b></label>
            <input type="number" v-model="numero" placeholder="Numéro" name="numero" required>
          </div>

          <div class="ligne">
            <label><b>Adresse</b></label>
            <input type="text" v-model="adresse" placeholder="Adresse" name="adresse" required>
          </div>

          <div class="ligne">
            <label><b>Mot de Passe</b></label>
            <input type="password" v-model="mdp" placeholder="Mot de Passe" name="mdp" required>
          </div>

          <button class="signupButton">M'inscrire !</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RegisterPharmacie"
}
</script>

<style src="../../style/login-register.css">

</style>