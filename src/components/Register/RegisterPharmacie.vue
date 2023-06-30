<template>
  <div class="form-container">
    <img class="logo_ordotech" src="../../assets/logo/OrdoTech_logo.png">
    <div class="flex">
      <div class="register">
        <router-link to="/">
          <p class="info_form">Vous possédez déjà un compte ? Cliquez ici !</p>
        </router-link>
        <div class="signup_form">
          <h1 class="titre_form">Créer un compte</h1>
          <form @submit.prevent="registerToTable">
            <div class="ligne_container">
              <div class="ligne">
                <label><b>Nom de la pharmacie</b></label>
                <input type="text" v-model="nom" placeholder="Nom" name="nom" required>
              </div>

              <div class="ligne">
                <label><b>E-mail</b></label>
                <input type="text" v-model="email" placeholder="E-mail" name="prenom" required>
              </div>
            </div>

            <div class="ligne">
              <label><b>Numéro de téléphone</b></label>
              <input type="number" v-model="numero" placeholder="Numéro" name="mail" required>
            </div>

            <div class="ligne_container">
              <div class="ligne">
                <label><b>N°</b></label>
                <input type="text" v-model="nb_adresse" placeholder="N°" name="adresse" required>
              </div>
              <div class="ligne">
                <label><b>Rue</b></label>
                <input type="text" v-model="adresse" placeholder="Rue" name="adresse" required>
              </div>
            </div>

            <div class="ligne_container">
              <div class="ligne">
                <label><b>Code Postal</b></label>
                <input type="number" v-model="code_postale" placeholder="Code Postal" name="numero" required>
              </div>


              <div class="ligne">
                <label><b>Ville</b></label>
                <input type="text" v-model="city" placeholder="Ville" name="adresse" required>
              </div>
            </div>

            <div class="ligne">
              <label><b>Mot de Passe</b></label>
              <input type="password" v-model="mdp" placeholder="Mot de Passe" name="mdp" required>
            </div>


            <button class="signupButton">M'inscrire !</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { createTextVNode } from "vue";
export default {
  name: "RegisterPharmacie",

  data() {
    return {
      nom: '',
      email: '',
      numero: '',
      nb_adresse: '',
      adresse: '',
      code_postale: '',
      city: '',
      mdp: ''
    }
  },
  methods: {
    registerToTable(){
      let data = {
        nom: this.nom,
        email: this.email,
        numero : this.numero,
        nb_adresse: this.nb_adresse,
        adresse: this.adresse,
        code_postale: this.code_postale,
        city: this.city,
        mdp: this.mdp
      };

      axios.post("http://localhost:5001/inscriptionPharmacie", data)
      .then(response => {
          // console.log(response.data)
          console.log("Pharmacie registeration success!")
        })
        .catch(error => {
          console.error('Error:', error);
        });
    }
  }
}
</script>

<style src="../../style/login-register.css"></style>
