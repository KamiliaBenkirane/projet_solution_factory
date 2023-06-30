<template>
  <div class="form-container">
    <img class="logo_ordotech" src="../../assets/logo/OrdoTech_logo.png">
    <div class="flex">
      <div class="register">
        <router-link to="/"><p class="info_form">Vous possédez déjà un compte ? Cliquez ici !</p></router-link>
        <div class="signup_form">

          <h1 class="titre_form">Créer un compte</h1>
          <form @submit.prevent="registerMedecin()" id="form_ordo">
          <div class="ligne_container">
          <div class="ligne">
            <label><b>Nom</b></label>
            <input type="text" v-model="nom" placeholder="Nom" name="nom" required>
          </div>

          <div class="ligne">
            <label><b>Prénom</b></label>
            <input type="text" v-model="prenom" placeholder="Prénom" name="prenom" required>
          </div>
          </div>

          <div class="ligne_container">

          <div class="ligne">
            <label><b>E-mail</b></label>
            <input type="email" v-model="mail" placeholder="E-mail" name="mail" required>
          </div>

          <div class="ligne">
            <label><b>Numéro de téléphone</b></label>
            <input type="number" v-model="num" placeholder="Numéro" name="numero" required>
          </div>

          </div>

          <div class="ligne_container">
            <div class="ligne">
              <label><b>N°</b></label>
              <input type="text" v-model="num_rue" placeholder="N°" name="num_rue" required>
            </div>
            <div class="ligne">
              <label><b>Rue</b></label>
              <input type="text" v-model="rue" placeholder="Rue" name="rue" required>
            </div>
          </div>

          <div class="ligne_container">
            <div class="ligne">
              <label><b>Code Postal</b></label>
              <input type="number" v-model="code_postal" placeholder="Code Postal" name="code_postal" required>
            </div>


            <div class="ligne">
              <label><b>Ville</b></label>
              <input type="text" v-model="ville" placeholder="Ville" name="ville" required>
            </div>
          </div>



          <div class="ligne">
            <label><b>Mot de Passe</b></label>
            <input type="password" v-model="mdp" placeholder="Mot de Passe" name="mdp" required>
          </div>

          <button class="signupButton" type="submit">M'inscrire !</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "RegisterMedecin",
  data(){
    return{
      code_postal : null,
      rue : '',
      num_rue : null,
      ville : '',
      prenom : '',
      nom : '',
      mdp : '',
      num : '',
      mail : ''
    }
  },
  methods : {
    registerMedecin(){
      let info = {
        prenom : this.prenom,
        nom : this.nom,
        mail : this.mail,
        num : this.num,
        num_rue : this.num_rue,
        rue : this.rue,
        ville : this.rue,
        code_postal : this.code_postal,
        mdp : this.mdp
      }
      axios.post("http://localhost:5001/createMedecin", info).then(response =>{
        alert("Votre compte a été enregistré avec succès")
        this.$router.push('/')
      }).catch((err) => alert("Cette adresse mail est déjà enregistrée."));
    }
  }
}
</script>

<style scoped>
.signupButton {
  width: 100%;
}

</style>