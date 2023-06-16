<template>
  <div class="container">
    <img class="logo_ordotech" src="../../assets/logo/OrdoTech_logo.png">
    <div class="box">
      <div>
      <h3>Choisissez votre rôle :</h3>
      </div>
      <div class="container_roles">
        <router-link to="/registerUser">
        <div class="box_user etudiant">
          <h3>Etudiant</h3>
          <img src="../../assets/icones/etudiant.png">
        </div>
        </router-link>
        <router-link to="/registerMedecin">
        <div class="box_user medecin">
          <h3>Medecin</h3>
          <img src="../../assets/icones/docteur.png">
        </div>
        </router-link>
          <router-link to="/registerPharmacie">
        <div class="box_user pharmacie">
          <h3>Pharmacie</h3>
          <img src="../../assets/icones/pharmacie.png">
        </div>
          </router-link>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "ChooseRole"
}
</script>

<style scoped>

img{
  width : 100px;
  height: auto;
  color : white;
}


.logo_ordotech{
  height : 70px;
  width : auto;
  position: absolute;
  top: 0;
  left: 0;
}


.container{
  height : 100vh;
  width : 100vw;
  margin : 0;
  display : flex;
  justify-content: center;
  align-items: center;
  color : white;
}

.box{
  color : black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding : 40px;
  background-color: whitesmoke;
  border-radius: 10px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}

.container_roles{
  display : flex;
  flex-direction: row;
  justify-content: center;

}

.box_user{

  color : white;
  height : 150px;
  width : 150px;
  padding : 0 15px 20px 15px;
  margin : 0 20px;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
}

.etudiant{
  background-color: #203f6b;
}

.etudiant:hover{
  background-color: #162c4a;
}

.medecin{
  background-color: #40b9de;
}

.medecin:hover{
  background-color: #3394b1;
}

.pharmacie{
  background-color: #96acc5;
}
.pharmacie:hover{
  background-color: #78899d;
}

a{
  text-decoration: none;
}

.box_user:hover{
  cursor : pointer;
}

</style>