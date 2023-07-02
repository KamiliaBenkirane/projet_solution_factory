<template>
  <SidebarMedecin />
  <div class="page">
    <img class="logo_ordotech" src="../../assets/logo/OrdoTech_logo.png">


  <div v-show="!numSecuValide" class="form-container" id="OrdonnanceForm">
    <div class="signup_form register">
      <h1 class="titre_form">Prescription médicale<img class="icone" src="../../assets/icones/sante.png">
      </h1>
      <form @submit.prevent="submitForm()" id="form_ordo">
        <div class="ligne">
          <label for="numSecu">Numéro de Sécurité Sociale de l'étudiant</label>
          <input id="numSecu" v-model="numSecu" type="number" placeholder="N° Sécurité Sociale" required>
        </div>
        <div id="medicament_container">
          <div class="medicament m1">
            <div class="ligne">
              <label>Médicament</label>
              <select name="Medicaments" id="medicament-select">
              </select>
            </div>
            <div class="ligne_container">
              <div class="ligne">
                <label for="nbFoisParJour">Nombre de fois par jour</label>
                <input id="nbFoisParJour" v-model="nbFoisParJour" placeholder="Exemple : 3" type="number" required>
              </div>
              <div class="ligne">
                <label for="nbJour">Pendant cb de jours ?</label>
                <input id="nbJour" v-model="nbJour" type="number" placeholder="Exemple : 7" required>
              </div>
            </div>
          </div>
        </div>



        <p @click="addMedoc" id="addMedicament">Ajouter un médicament</p>

        <button class="signupButton" type="submit">Soumettre</button>
      </form>
    </div>
  </div>

  <!-- Section pour l'affichage de l'ordonnance générée -->
  <div v-if="prescriptionGenerated && numSecuValide" class="form-container">
    <div class="register">

      <router-link to="/homeMedecin">
        <p class="info_form">Retourner à l'accueil</p>
      </router-link>

      <div class="signup_form register">

        <h1 class="titre_form">Ordonnance générée ! </h1>
        <div id="prescription">
          <p>
            <b><u>Ordonnance pour :</u></b> {{ prenomEtudiant }} {{ nomEtudiant }}<br>
            <b><u>Nº Sécurité Social :</u></b> {{ numSecu }}<br>
            <b><u>Tel :</u></b> {{ numEtudiant }}<br>
            <b><u>Mail :</u></b> {{ mailEtudiant }}<br>
          </p>
        </div>
        <button class="signupButton" @click="generatePDF(today); postOrdonnance()">Générer PDF <i class='bx bxs-file-pdf'></i></button>
      </div>
    </div>
  </div>
  </div>
</template>
    
<script>
import { jsPDF } from "jspdf";
import SidebarMedecin from "@/components/MedecinPage/SidebarMedecin.vue";
import logo from '@/assets/logo/OrdoTech_logo.png';
import axios from 'axios'
import { useSessionStore} from "@/stores/session";


export default {
  components: {
    SidebarMedecin
  },
  setup () {
    const store = useSessionStore()
    return{store}
  },
  data() {
    return {
      numSecu: null,
      numSecuValide : false,
      nbFoisParJour: null,

      nbJour: null,
      prescriptionGenerated: false,
      nomMedecin: this.store.getNom(),
      prenomMedecin: this.store.getPrenom(),
      numMedecin: this.store.getNumero(),
      adresseMedecin: "Adresse",
      numRue : this.store.getNumRue(),
      rue : this.store.getRue(),
      code_postal : this.store.getCodePostal(),
      ville : this.store.getVille(),
      prenomEtudiant: '',
      nomEtudiant: '',
      numEtudiant: null,
      nbMedicament: 1,
      idEtudiant : null,
      drugs : [],
      today : new Date(),
      infoMedicaments : [],
      mailEtudiant : ''
    }
  },
  created() {
    this.getDrugs()
  },
  mounted() {
    this.numSecu = this.$route.params.numSecu;
  },
  methods: {
    modifyList(objets) {
      var resultat = [];

      for (var i = 0; i < objets.length; i++) {
        var objet = objets[i];
        var nouvelObjet = {
          text: objet.name_drug,
          option : objet.id_drug
        };

        if (i === 0) {
          nouvelObjet.selected = true;
        }

        resultat.push(nouvelObjet);
      }

      return resultat;
    },

    postOrdonnance(){
      let infoOrdonnance = {
        id_medecin : this.store.getId(),
        id_patient : parseInt(this.idEtudiant),
        date : this.formatDate(this.today)[0],
        infoMedicaments : this.infoMedicaments
      }
      console.log(infoOrdonnance)

      axios.post("http://localhost:5001/addOrdonnance", infoOrdonnance).then(response=>{
        alert("Ordonnance ajoutée à la base de données")
      }).catch(err=>{
        console.log(err)
      })
    },


    fillSelectMedicament() {

      var selectBox = document.getElementById('medicament-select');
      let listOptions = this.modifyList(this.drugs)

      for (var i = 0; i < listOptions.length; i++) {
        var drug = listOptions[i];
        selectBox.add(new Option(drug.text, drug.option, drug.selected));
      }
    },
    getDrugs() {
      axios.get("http://localhost:5001/getDrugs")
          .then(response => {
            this.drugs = response.data;
            this.fillSelectMedicament();
          })
          .catch(error => {
            console.error('Une erreur s\'est produite lors de la récupération des médicaments :', error);
          });
    },
    getPatient(){
      axios.post("http://localhost:5001/getPatient", {
      numSecu: this.numSecu,
    })
        .then((response) => {
          this.numSecuValide = true
          this.prescriptionGenerated = true;

          this.prenomEtudiant = response.data[0].first_name
          this.nomEtudiant = response.data[0].last_name
          this.numEtudiant = response.data[0].num_phone
          this.idEtudiant = response.data[0].id_patient
          this.mailEtudiant = response.data[0].email




        })
        .catch((err) => {
          alert("Ce numéro de sécurité social n'existe pas")
          console.log(err)
        });
    },



      submitForm() {
      this.getPatient()

      // Mettre à jour la valeur de prescriptionGenerated pour afficher l'ordonnance générée


      // Get the form data
      const prescription = {
        numSecu: this.numSecu,
        nbFoisParJour: this.nbFoisParJour,
        nbJour: this.nbJour,
        // TBC
      };

      //Send to the server
      fetch('http://localhost:5001/addPrescription', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(prescription),
      })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch((error) => {
          console.error('Error:', error);
        });
    },

    addMedoc() {
      const divToDuplicate = document.querySelector('.medicament');
      const formContainer = document.getElementById('medicament_container');
      if (divToDuplicate && formContainer) {
        const clonedDiv = divToDuplicate.cloneNode(true);
        this.nbMedicament += 1
        clonedDiv.classList.remove('m1');
        clonedDiv.classList.add(`m${this.nbMedicament}`);
        formContainer.appendChild(clonedDiv);

      }
    },
    formatDate(today){
      const yyyy = today.getFullYear();
      let mm = today.getMonth() + 1; // Months start at 0!
      let dd = today.getDate();

      if (dd < 10) dd = '0' + dd;
      if (mm < 10) mm = '0' + mm;

      const formattedTodayPdf = dd + '-' + mm + '-' + yyyy;
      const formattedTodaySignature = dd + '/' + mm + '/' + yyyy;
      const dates = [];
      dates[0] = formattedTodayPdf
      dates[1] = formattedTodaySignature
      return dates
    },



    generatePDF(today) {
      const doc = new jsPDF();

      doc.setFont("Helvetica, Arial, sans-serif"); // Choisissez une police agréable.

      doc.setFontSize(12); // Réduisez la taille de la police pour le contenu.


     const formattedTodayPdf = this.formatDate(today)[0]
      const formattedTodaySignature = this.formatDate(today)[1]



      const imgData = logo;

      doc.addImage(imgData, 'PNG', 85, 10, 48, 12);

      // Informations médecin
      doc.text(`${this.prenomMedecin} ${this.nomMedecin}\nMédecin généraliste`, 20, 50);
      doc.text(`Adresse : ${this.numRue} rue ${this.rue}, ${this.ville} ${this.code_postal}  \nTel cabinet : ${this.numMedecin}`, 110, 50);



      //Informations étudiant(e)
      doc.text(`${this.prenomEtudiant} ${this.nomEtudiant}\nNuméro de sécurité social de l'étudiant(e) : ${this.numSecu}`, 20, 70);
      doc.text(`Tel étudiant(e) : ${this.numEtudiant}`, 110, 70);


      //Informations ordonnance médicaments
      var y_medoc = 120
      doc.text(`Prescription : `, 20, 110);
      for (let i = 1; i < this.nbMedicament + 1; i++) {

        const medicament = parseInt(document.querySelector(`.m${i} #medicament-select`).options[document.querySelector(`.m${i} #medicament-select`).selectedIndex].value)



        const medication= document.querySelector(`.m${i} #medicament-select`).options[document.querySelector(`.m${i} #medicament-select`).selectedIndex].text
        console.log(medication)


        var nbFoisParJour = document.querySelector(`.m${i} #nbFoisParJour`).value
        var nbFoisParJourInt = parseInt(document.querySelector(`.m${i} #nbFoisParJour`).value)
        var nbJour = document.querySelector(`.m${i} #nbJour`).value
        var nbJourInt = parseInt(document.querySelector(`.m${i} #nbJour`).value)



        doc.text(`Médicament prescrit : ${medication}\nA prendre ${nbFoisParJour} fois par jour pendant pendant ${nbJour} jours`, 20, y_medoc);
        y_medoc += 20;
        this.infoMedicaments.push([medicament, nbFoisParJourInt, nbJourInt])
        console.log(this.infoMedicaments)
      }



      doc.text(`Fait le ${formattedTodaySignature}\n\nSignature :`, 140, 220);


      doc.save(`Ordonnance-${this.prenomEtudiant}-${this.nomEtudiant}-${formattedTodayPdf}`);
    }

  },
}

</script>

<style scoped>

.titre_form{
  color : #d0f0db;
  display: flex;
  font-size : 35px;
  justify-content: center;
  align-items: center;
  gap : 10px;
}
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
p {
  line-height: 25px;
}

p:hover {
  text-decoration: none;
  cursor: default;
}

select {
  padding: 8px;
  margin-top: 5px;
  border-radius: 5px;
  width: 100%;
}

.signupButton {
  width: 100%;
  font-size : 20px;
}

#addMedicament {
  margin-top: 10px;
  padding: 10px 20px;
  font-size: 14px;
  color: black;
  align-self: center;
  border: none;
  border-radius: 5px;
  background-color: #E0E0E0;
}

#addMedicament:hover {
  background-color: #C9C9C9;
  cursor: pointer;

}

.icone{
  height : 50px;
  width: auto;
}

input {
  border-radius: 5px;
}

form {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>