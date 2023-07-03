<template>

  <div class="container_page gradient-background"></div>
  <img class="logo_ordotech" src="../../assets/logo/OrdoTech_logo.png">
  <div class="form-container">

    <div class="flex">
      <div class="register">
        <router-link to="/chooseRole"><p class="info_form">Vous n'avez pas encore de compte ? Cliquez ici !</p></router-link>

        <div class="signup_form login">

          <h1 class="titre_form">Se connecter</h1>
          <form @submit.prevent="login()" id="form_ordo">
          <div class="ligne">
            <label><b>E-mail</b></label>
            <input type="email" v-model="mail" placeholder="Email" name="mail" required>
          </div>
          <div class="ligne">
            <label><b>Mot de Passe</b></label>
            <input type="password" v-model="mdp" placeholder="Mot de Passe" name="mdp" required>
          </div>

          <button class="signupButton" type="submit" >Se connecter !</button>
          </form>

          <!-- Bouton pour naviguer vers le formulaire de prescription à supprimer -->


        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { useSessionStore} from "@/stores/session";
import "../../style/login-register.css";
export default {
  name: "Login",
  data(){
    return{
      mail : '',
      mdp : ''
    }
  },
  setup () {
    const store = useSessionStore()
    return{store}
  },
  methods : {
    login(){
      axios.post("http://localhost:5001/login", {
        mail : this.mail,
        mdp : this.mdp
      }).then(response=>{
        console.log("coucou")
        console.log(response)
        if (response.data.message ==="login_medecin"){
          console.log(response.data.results[0])

          this.store.setId(response.data.results[0].id_medecin)
          this.store.setNom(response.data.results[0].last_name)

          this.store.setPrenom(response.data.results[0].first_name)
          this.store.setMail(response.data.results[0].email)
          this.store.setNumero(response.data.results[0].num_phone)
          this.store.setRue(response.data.results[0].street_name)
          this.store.setNumRue(response.data.results[0].nb_street)
          this.store.setVille(response.data.results[0].city)
          this.store.setCodePostal(response.data.results[0].post_code)
          this.$router.push("/homeMedecin")
        }
        else if(response.data.message === 'login_user'){
          console.log(response.data.result)
          this.store.setId(response.data.result[0].id_patient)
          this.store.setNom(response.data.result[0].last_name)
          this.store.setPrenom(response.data.result[0].first_name)
          this.store.setMail(response.data.result[0].email)
          this.store.setNumero(response.data.result[0].num_phone)
          if(response.data.result[0].id_medecin_treat!==null){
            this.store.setIdMedecinT(response.data.result[0].id_medecin_treat)
            this.store.setPrenomMedecinT(response.data.result[0].first_name_medecin)
            this.store.setNomMedecinT(response.data.result[0].last_name_medecin)
            this.store.setNumeroMedecinT(response.data.result[0].num_phone_medecin)
            this.store.setMailMedecinT(response.data.result[0].email_medecin)
          }

          this.$router.push("/homeUser")
        }
        else{
          console.log(response.data.results)
          this.store.setNomPharma(response.data.results[0].name_pharma)
          this.store.setIdPharma(response.data.results[0].id_pharma)
          this.store.setMailPharma(response.data.results[0].email)
          this.store.setNumPharma(response.data.results[0].num_phone)

          this.$router.push("/homePharmacie")
        }

      }).catch(err=>{
        alert("Mail ou mot de passe invalide !")
        console.log(err)
      })
    }
  }
}
</script>

<style scoped>

.signup_form {
  background-color: #40b9de;
}

.signupButton{
  background-color: #A2E1B8;
  width : 100%;
}
.signupButton:hover{
  background-color: #90C8A4;
}

</style>
