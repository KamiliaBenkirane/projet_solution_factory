<template>
  <SidebarMedecin/>
  <div class="page">
    <img class="logo_ordotech" src="../../assets/logo/OrdoTech_logo.png">
    <div class="container">
      <div class="parent-grid">
        <div class="child-grid box1">
          <router-link to="/prescription">
          <div class="ajouter_ordo">

            <h3><i class='bx bxs-plus-circle'></i> Créer une ordonnance</h3>
            <img src="../../assets/icones/ordonnance.png" alt="icone_ordonnance">

          </div>
          </router-link>
        </div>
        <div class="child-grid box2">
          <h3>Mes prochaines consultations :</h3>
          <div class="container-rdv">
            <div class="aucune-consultation">

              <img src="../../assets/icones/aucun-resultat.png" alt="icone_aucun_res">
              <h3>Aucune consultation de prévu</h3>
            </div>
          </div>



        </div>
        <div class="child-grid box3">
          <h3> Ordonnances récentes <i class='bx bxs-hourglass-top'></i></h3>
          <div class="liste_ordo">
            <div v-for="ordo in ordos" key="id_ordo" class="ordo-item">
              <img src="../../assets/icones/pdf.png" alt="icone_pdf">
              <p>{{ordo.patient}} <br> {{ordo.date}}</p>
            </div>
            <p class="historique">Voir l'historique des ordonnances &#8594;</p>

          </div>

        </div>
        <div class="child-grid box4">
          <h3> Etudiants en suivi </h3>
          <div class="liste_etudiant">
            <div v-for="etudiant in etudiants" key="num_secu" class="etudiant-item">
              <img src="../../assets/icones/avatar.png" alt="icone_pdf">
              <div class="infos_etudiant">
                <p>{{etudiant.prenom}} {{etudiant.nom}}</p>
                <p>Nº sécurité sociale :  {{etudiant.num_secu}}</p>
              </div>
            </div>
            <p class="voir-plus">Voir tous les étudiants en suivi &#8594;</p>

          </div>

        </div>
      </div>
    </div>


  </div>

</template>

<script>
import SidebarMedecin from '@/components/MedecinPage/SidebarMedecin.vue'

export default {
  name: "HomeMedecin",
  components: {
    SidebarMedecin
  },
  data(){
    return{
      ordos : [{
        id_ordo : 1,
        patient : "Nom Prénom",
        date : "01/01/2023"
      },
        {
          id_ordo : 2,
          patient : "Nom Prénom",
          date : "01/01/2023"
        },
        {
          id_ordo : 3,
          patient : "Nom Prénom",
          date : "01/01/2023"
        },
      ],
      etudiants : [{
        num_secu : 1,
        nom : "Nom",
        prenom : "Prénom",
        ordonnances_nb : 3,
      },
        {
        num_secu : 2,
          nom : "Nom",
        prenom : "Prénom",
        ordonnances_nb : 3,
      },
        {
        num_secu : 3,
        nom : "Nom",
        prenom : "Prénom",
        ordonnances_nb : 3,
      },
      ]
    }
  }
}
</script>

<style scoped>


.page{
  height : 100vh;
  width : 100vw;
  margin : 0;
  display : flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.logo_ordotech{
  height: 9vh;
  width: auto;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  margin: auto;
}

.container {
  width : 75vw;
  height : 550px;
  margin-left : 78px;
  margin-top : 100px;
  padding : 30px;

}

.ajouter_ordo{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 20px;
  border-radius: 10px;
}

.ajouter_ordo:hover{
  background-color: #CBFBDC;
}

.ajouter_ordo:hover h3{
  text-decoration: underline;
}

.parent-grid{
  height : 100%;
  width : 100%;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 20px;
}

.child-grid{
  border-radius : 10px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  padding : 20px;
  transition: all 0.25s ease;


}

.child-grid:hover{
  transform : scale(1.03);
}

.box1 {
  grid-area: 1 / 1 / 3 / 3;
  background-color: #B3ffcb;
  z-index: 55;
  display : flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.box2 {
  grid-area: 3 / 1 / 5 / 6;
  background-color: #96acc5;
  z-index: 55;
}

.box3 {
  grid-area: 1 / 3 / 3 / 6;
  background-color: #40b9de;
  z-index: 55;
  display: flex;
  flex-direction: column;
  gap : 10px;
  align-items: center;
  position : relative;
}

.box4 {
  color : white;
  grid-area: 1 / 6 / 5 / 8;
  background-color: #203f6b;
  z-index: 55;
}

.liste_ordo{
  display: flex;
  align-items: center;
  gap : 1vw;
}

.ordo-item{
  padding : 25px 15px 25px 5px ;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 5px;
  background-color: #8cd5eb;
}

.ordo-item:hover{
  cursor : pointer;
  background-color: #AEE1F1;

}

.ordo-item img{
  height : 7vh;
  width: auto;
}

.ordo-item p{
  font-size: 12px;
  line-height: 20px;

}

.etudiant-item img{
  height : 50px;
  width : auto;
}

.liste_etudiant{
  display: flex;
  flex-direction: column;
  gap : 10px;
  height : 90%;
  position: relative;
}

.etudiant-item{
  background-color: #4c6588;
  display: flex;
  align-items: center;
  gap : 20px;
  border-radius: 10px;
  padding : 0 15px;
}


.box1 img{
  width : 40%;
  height : auto;
  border-radius : 10px;
}

.voir-plus{
  line-height: 0;
  font-size : 15px;
 padding-left: 10px;
  color : lightgray;
  align-self: flex-end;
  position: absolute; /* Add this */
  bottom: 0; /* Add this */
  right: 0;
}

.voir-plus:hover{
  cursor : pointer;
  text-decoration: underline;
}

.historique{
  font-size: 15px;
  align-self: flex-end;
  position: absolute; /* Add this */
  bottom: 0; /* Add this */
  right: -10;
  color : #404040;
}

.historique:hover{
  cursor : pointer;
  text-decoration : underline;
}

.box2 img{
  height : 100px;
  width : auto;
}

.container-rdv{
  display: flex;
  align-items: center;
  justify-content: center;
}
.aucune-consultation{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

a{
  text-decoration: none;
  color : #1d1b31;
}

@media screen and (max-width: 1300px) {
  .container{
    width : 1035px;
  }
}

</style>