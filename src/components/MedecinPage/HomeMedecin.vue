<template>
  <SidebarMedecin/>
  <div class="page">
    <img class="logo_ordotech" src="../../assets/logo/OrdoTech_logo.png">
    <div class="container">
      <div class="parent-grid">
        <div class="child-grid box1">
          <router-link to="/prescription/:numSecu">
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
              <h4>Aucune consultation de prévu</h4>
            </div>
          </div>



        </div>
        <div class="child-grid box3">
          <h3> Ordonnances récentes <i class='bx bxs-hourglass-top'></i></h3>
          <div v-if="ordos.length!==0" class="liste_ordo">
            <div  v-for="ordo in lastTwoValues(suppressDoublons(ordos))" key="num_secu" class="ordo-item" >
              <img src="../../assets/icones/pdf.png" alt="icone_pdf">
              <p>{{ordo.first_name}} {{ordo.last_name}} <br> {{formatDate(ordo.date)}}</p>
              <div class="buttons">
                <p @click="generatePDF(ordo)" title="Télécharger l'ordonnance"><i class='bx bxs-download'></i></p>
                <p @click="sendEmail(ordo)" title="Envoyer comme e-mail à l'école"><i class='bx bx-mail-send'></i></p>
              </div>
            </div>
            <p class="historique"><router-link to="/historiqueMedecin">Voir l'historique des ordonnances &#8594;</router-link></p>

          </div>
          <div v-else class="aucune-ordo">
            <img src="../../assets/icones/aucun-resultat.png" alt="icone_aucun_res">
            <h4>Aucune ordonnance pour le moment</h4>

          </div>

        </div>
        <div class="child-grid box4">
          <h3> Etudiants en suivi </h3>
          <input type="search" id="recherche_ordo" name="recherche_ordo" placeholder="Recherchez un étudiant..." v-model="searchQuery">
          <div v-if="etudiants.length!==0" class="liste_etudiant">
            <div v-for="etudiant in filteredEtudiants" key="num_secu" class="etudiant-item">
              <img src="../../assets/icones/avatar.png" alt="icone_pdf">
              <div class="infos_etudiant">
                <p><i class='bx bxs-user'></i>{{etudiant.first_name}} {{etudiant.last_name}}<br><i class='bx bxs-envelope'></i> {{etudiant.email}}<br><i class='bx bx-health'></i> Nº sécu :  {{etudiant.id_patient}}</p>

              </div>
              <i title="Créer une ordonnance" id="add_ordo" @click="ouvrirPrescription(etudiant.id_patient)" class='bx bxs-file-plus'></i>



            </div>

          </div>
          <div v-else class="aucun-etudiant">
            <img src="../../assets/icones/aucun_etudiant.png" alt="icone_aucun_res">

            <h4>Aucun étudiant en suivi <br> pour le moment</h4>
          </div>

        </div>
      </div>
    </div>


  </div>

</template>

<script>
import {jsPDF} from "jspdf";
import SidebarMedecin from '@/components/MedecinPage/SidebarMedecin.vue'
import axios from 'axios'
import {useSessionStore} from "@/stores/session";
import logo from "@/assets/logo/OrdoTech_logo.png";
import { RouterLink, RouterView, router } from 'vue-router';

export default {
  name: "HomeMedecin",
  components: {
    SidebarMedecin
  },
  setup () {
    const store = useSessionStore()
    return{store}
  },
  data(){
    return{

      etudiants : [],
      ordos : [],
      searchQuery : '',
    }
  },
  created(){
    this.getOrdonnances()
    this.getEtudiantsSuivi()
  },
  computed: {
    filteredEtudiants() {
      const searchQuery = this.searchQuery.toLowerCase().trim();
      if (searchQuery === '') {
        return this.etudiants;
      } else {
        return this.etudiants.filter(etudiant => {
          const idPatient = etudiant.id_patient.toString();
          const firstName = etudiant.first_name.toLowerCase();
          const lastName = etudiant.last_name.toLowerCase();
          return idPatient.includes(searchQuery) ||
              firstName.includes(searchQuery) ||
              lastName.includes(searchQuery);
        }).reverse();
      }
    }
},
  methods : {
    async sendEmail(ordo) {
        // préparer les informations de l'email
        const mailData = {
            to: 'destinationEmail@gmail.com', // mettez l'email de la destination ici
            subject: `Ordonnance pour ${ordo.first_name} ${ordo.last_name}`,
            text: `Ordonnance pour ${ordo.first_name} ${ordo.last_name} a été générée le ${this.formatDate(ordo.date)}`
        };
        
        try {
            // envoyer une requête POST à l'API de votre serveur pour envoyer l'email
            const response = await axios.post('http://localhost:5001/sendmail', mailData);

            // afficher le message de succès ou d'échec selon la réponse du serveur
            if (response.data.status === 'success') {
                alert('Email sent successfully');
            } else {
                alert('Failed to send email: ' + response.data.message);
            }
        } catch (error) {
            console.error('Failed to send email: ', error);
        }
    },

    getOrdonnances(){
      axios.post("http://localhost:5001/getOrdonnances", {
        role : "id_medecin",
        id : this.store.getId(),
      }).then(response=>{
        console.log(response.data)
        this.ordos = response.data
      }).catch(err=>{
        console.log(err)
      })
    },
    getEtudiantsSuivi(){
      axios.post("http://localhost:5001/getEtudiantsSuivi", {
        id_medecin : this.store.getId(),
      }).then(response=>{
        console.log(response.data)
        this.etudiants = response.data
      }).catch(err=>{
        console.log(err)
      })
    },


    formatDate(dateString) {
      const date = new Date(dateString);
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();

      return `${day < 10 ? '0' + day : day}-${month < 10 ? '0' + month : month}-${year}`;
    },

    lastTwoValues(ordo) {
      const length = ordo.length;
      if (length === 1) {
        return [ordo[0]];
      } else if (length > 1) {
        return ordo.slice(length - 2).reverse();
      } else {
        return [];
      }
    },

    generatePDF(ordo) {
      const doc = new jsPDF();

      doc.setFont("Helvetica, Arial, sans-serif"); // Choisissez une police agréable.

      doc.setFontSize(12); // Réduisez la taille de la police pour le contenu.




      const imgData = logo;

      doc.addImage(imgData, 'PNG', 85, 10, 48, 12);

      // Informations médecin
      doc.text(`${this.store.getPrenom()} ${this.store.getNom()}\nMédecin généraliste`, 20, 50);
      doc.text(`Adresse : ${this.store.getNumRue()} rue ${this.store.getRue()}, ${this.store.getVille()} ${this.store.getCodePostal()}  \nTel cabinet : ${this.store.getNumero()}`, 110, 50);



      //Informations étudiant(e)
      doc.text(`${ordo.first_name} ${ordo.last_name}\nNuméro de sécurité social de l'étudiant(e) : ${ordo.id_patient}`, 20, 70);
      doc.text(`Tel étudiant(e) : ${ordo.num_phone}`, 110, 70);


      //Informations ordonnance médicaments
      var y_medoc = 120
      doc.text(`Prescription : `, 20, 110);

      const filteredOrdo = this.ordos.filter((ordonnance) => ordonnance.id_ordo === ordo.id_ordo);


      for (let i = 0; i < filteredOrdo.length; i++) {





        const medicament = filteredOrdo[i].name_drug
        const nbFoisParJour = filteredOrdo[i].nb_fois_par_jour
        const nbJour = filteredOrdo[i].nb_jour


        doc.text(`Médicament prescrit : ${medicament}\nA prendre ${nbFoisParJour} fois par jour pendant pendant ${nbJour} jours`, 20, y_medoc);
        y_medoc += 20;

      }



      doc.text(`Fait le ${this.formatDate(ordo.date)}\n\nSignature :`, 140, 220);


      doc.save(`Ordonnance-${ordo.first_name}-${ordo.last_name}-${this.formatDate(ordo.date)}`);
    },
    ouvrirPrescription(numSecu) {
      this.$router.push({ name: 'prescription', params: { numSecu: numSecu } });
    },

    suppressDoublons(list){
      const result = {};
      if(list.length===0){
        return []
      }
      else{
        list.forEach((obj) => {
          const {id_ordo, id_patient, first_name, last_name, date, num_phone} = obj;
          const key = `${id_ordo}-${id_patient}-${first_name}-${last_name}-${date}-${num_phone}`;

          result[key] = {
            id_ordo,
            id_patient,
            first_name,
            last_name,
            date,
            num_phone

          }
        });
        return Object.values(result);
      }
    },
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
  color : #F9F9F9;
  grid-area: 1 / 6 / 5 / 8;
  background-color: #203f6b;
  z-index: 55;

}

.liste_ordo{
  display: flex;
  align-items: center;
  gap : 1vw;
}

.ordo-item {
  padding: 25px 15px 25px 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 5px;
  background-color: #8cd5eb;
  position: relative;
  z-index: 0;
}

.ordo-item:hover {
  cursor: pointer;
}

.ordo-item:hover > .buttons > p{
  display : block;

}

.ordo-item:hover::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(232, 246, 251, 0.87);
  z-index: -1;
  border-radius: 5px;
}

.ordo-item:hover > *:not(.buttons) {
  opacity: 0.5;
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
  height : 40px;
  width : auto;
}

.liste_etudiant{
  display: flex;
  flex-direction: column;
  gap : 10px;
  height : 80%;
  position: relative;
  overflow-y: scroll;
}

::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #162c4a;
  border-radius: 5px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #091220;
  border-radius: 5px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background:
      #000000
;
}

.etudiant-item{
  background-color: #4c6588;
  display: flex;
  align-items: center;
  gap : 20px;
  border-radius: 10px;
  padding : 0 15px;
  font-size : 13px;
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
  right: -10px;
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

.aucune-ordo{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.aucune-ordo img{
  height : 90px;
  width : auto;
}

.aucune-ordo h4{
  text-align: center;
}
.aucun-etudiant{
  height : 80%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.aucun-etudiant img{
  height : 110px;
  width : auto;
}

.aucun-etudiant h4{
  text-align: center;
}

.buttons{
  display: flex;
  gap : 15px;
  position: absolute;
  bottom: 50%; /* Modifier cette ligne */
  right: 50%; /* Modifier cette ligne */
  transform: translate(50%, 50%);
}

.buttons p{
  font-size : 20px;
  display: none;
  padding : 8px;
  border-radius: 4px;
  background-color: #00101e;
  color : white;
}

.buttons p:hover{
  background-color: #33495b;
}

.box4 p{
  line-height: 25px;
}

input{
  padding : 8px;
  width : 100%;
  border-radius : 10px;
  border : white 1px solid;
  background-color: #1c3860;
  margin-bottom : 10px;
  color : white;
}

::placeholder{
  color : white;
}

input:focus{
  outline: none;
  border : white 2px solid;
  background-color: #193255;
}

#add_ordo{
  margin-left: auto;
  font-size : 25px;
  transition : 0.2s ease;
  padding : 8px;
  border-radius : 4px;
}

#add_ordo:hover{
  background-color: #F2F2F2;
  color : #1d1b31;
  cursor: pointer;
}


@media screen and (max-width: 1300px) {
  .container{
    width : 1035px;
  }
}

</style>