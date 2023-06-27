<template>
  <div class="form-container">
    <img class="logo_ordotech" src="../../assets/logo/OrdoTech_logo.png">
    <div class="flex">
      <div class="register">
        <router-link to="/"><p class="info_form">Vous possédez déjà un compte ? Cliquez ici !</p></router-link>
        <div class="signup_form">

          <h1 class="titre_form">Créer un compte</h1>

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
            <input type="number" v-model="numero" placeholder="Numéro" name="numero" required>
          </div>
          </div>
          <div class="ligne">
            <label><b>Numéro de sécurité sociale</b></label>
            <input type="number" v-model="secu" placeholder="Sécurité Sociale" name="adresse" required>
          </div>


          <div class="ligne">
            <label>Médecin traitant</label>
            <select name="Medecins" id="medecin-select">
            </select>
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
import axios from 'axios'
export default {
  name: "RegisterUser",
  data(){
    return{
      secu : null,
      mail : '',
      nom : '',
      prenom : '',
      mdp : '',
      numero : null,
      medecins : []
    }
  },
  created(){
    this.getMedecins()
  },
  methods : {
    getMedecins(){
      axios.get("http://localhost:5001/getMedecin").then(response =>{
        console.log(response.data)
        this.medecins = response.data
        this.fillSelectMedecins()
      })
    },
    modifyList(objets) {
      var resultat = [];

      for (var i = 0; i < objets.length; i++) {
        var objet = objets[i];
        var nouvelObjet = {
          text: objet.first_name+" "+objet.last_name
        };

        if (i === 0) {
          nouvelObjet.selected = true;
        }

        resultat.push(nouvelObjet);
      }

      return resultat;
    },
    fillSelectMedecins() {
      console.log(this.medecins)

      var selectBox = document.getElementById('medecin-select');
      let listOptions = this.modifyList(this.medecins)

      for (var i = 0; i < listOptions.length; i++) {
        var drug = listOptions[i];
        selectBox.add(new Option(drug.text, drug.text, drug.selected));
      }
    },
  }
}
</script>

<style src="../../style/login-register.css">




</style>