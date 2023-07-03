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
              <label><b>Mot de Passe</b></label>
              <input type="password" v-model="mdp" placeholder="Mot de Passe" name="mdp" required>
            </div>


            <div class="ligne">
              <label>Médecin traitant</label>
              <select v-model="selectedMedecin" id="medecin-select">
                <option v-for="medecin in medecins" :value="medecin.id_medecin" :key="medecin.id_medecin">
                  {{ medecin.first_name + ' ' + medecin.last_name }}
                </option>
              </select>
              <!-- <select name="Medecins" id="medecin-select">
              </select> -->
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
  name: "RegisterUser",
  data() {
    return {
      secu: null,
      mail: '',
      nom: '',
      prenom: '',
      mdp: '',
      numero: null,
      medecins: [],
      selectedMedecin: null,
    }
  },
  created() {
    this.getMedecins()
  },
  methods: {
    modifyList(objets) {
      var resultat = [];

      for (var i = 0; i < objets.length; i++) {
        var objet = objets[i];
        var nouvelObjet = {
          text: objet.first_name + " " + objet.last_name
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
        var medecin = listOptions[i];
        selectBox.add(new Option(medecin.text, medecin.text, medecin.selected));
      }
    },
    getMedecins() {
      axios.get("http://localhost:5001/getMedecinIdName")
        .then(response => {
          // console.log("Medecin list"+response.data)
          this.medecins = response.data
          // this.fillSelectMedecins()
        })
    },
    registerToTable() {
      let user = {
        secu: this.secu,
        mail: this.mail,
        nom: this.nom,
        prenom: this.prenom,
        mdp: this.mdp,
        numero: this.numero,
        selectedMedecin: this.selectedMedecin
      };
      //console.log(user.selectedMedecin)
      axios.post("http://localhost:5001/inscriptionStudent", user)
        .then(response => {
          // console.log(response.data)
          console.log("Patient registeration success!")
          alert("Votre compte a bien été enregistré !")
          this.$router.push("/")
        })
        .catch(error => {
          console.error('Error:', error);
          alert("Le mail ou le numéro social est déjà enregistré!")
          //alert("Une erreur est survenue lors de l'inscription. ")
        });

    }
  }
}
</script>

<style scoped>
.signupButton {
  width: 100%;
}

</style>