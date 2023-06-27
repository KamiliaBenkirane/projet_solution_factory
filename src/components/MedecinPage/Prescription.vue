<template>
  <SidebarMedecin />
  <div v-show="!numSecuValide" class="form-container" id="OrdonnanceForm">
    <div class="signup_form register">
      <h1 class="titre_form">Prescription médicale</h1>
      <form @submit.prevent="submitForm()" id="form_ordo">
        <div class="ligne">
          <label for="numSecu">Numéro de Sécurité Social de l'étudiant</label>
          <input id="numSecu" v-model="numSecu" type="number" required>
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
                <input id="nbFoisParJour" v-model="nbFoisParJour" type="number" required>
              </div>
              <div class="ligne">
                <label for="nbJour">Pendant cb de jours ?</label>
                <input id="nbJour" v-model="nbJour" type="number" required>
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

        <h1 class="titre_form">Ordonnance générée : </h1>
        <div id="prescription">
          <p>
            <b><u>Ordonnance pour :</u></b> {{ prenomEtudiant }} {{ nomEtudiant }}<br>
            <b><u>Numéro Sécurité Social :</u></b> {{ numSecu }}<br>
            <b><u>Numéro téléphone :</u></b> {{ numEtudiant }}<br>
          </p>
        </div>
        <button class="signupButton" @click="generatePDF()">Générer PDF</button>
      </div>
    </div>
  </div>
</template>
    
<script>
import { jsPDF } from "jspdf";
import SidebarMedecin from "@/components/MedecinPage/SidebarMedecin.vue";
import logo from '@/assets/logo/OrdoTech_logo.png';
import axios from 'axios'

export default {
  components: {
    SidebarMedecin
  },
  data() {
    return {
      numSecu: null,
      numSecuValide : false,
      nbFoisParJour: null,

      nbJour: null,
      prescriptionGenerated: false,
      nomMedecin: 'Nom',
      prenomMedecin: 'Prénom',
      numMedecin: '0625221555',
      adresseMedecin: "Adresse",
      prenomEtudiant: '',
      nomEtudiant: '',
      numEtudiant: null,
      nbMedicament: 1,
      drugs : [],

    }
  },
  created() {
    this.getDrugs()
  },
  methods: {
    modifyList(objets) {
      var resultat = [];

      for (var i = 0; i < objets.length; i++) {
        var objet = objets[i];
        var nouvelObjet = {
          text: objet.name_drug
        };

        if (i === 0) {
          nouvelObjet.selected = true;
        }

        resultat.push(nouvelObjet);
      }

      return resultat;
    },


    fillSelectMedicament() {
      console.log(this.drugs)

      var selectBox = document.getElementById('medicament-select');
      let listOptions = this.modifyList(this.drugs)

      for (var i = 0; i < listOptions.length; i++) {
        var drug = listOptions[i];
        selectBox.add(new Option(drug.text, drug.text, drug.selected));
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

          console.log(response.data)
          this.prenomEtudiant = response.data[0].first_name
          this.nomEtudiant = response.data[0].last_name
          this.numEtudiant = response.data[0].num_phone
          console.log(this.numEtudiant)
          console.log(this.nomEtudiant)
          console.log(this.prenomEtudiant)




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
        console.log(clonedDiv)
        formContainer.appendChild(clonedDiv);

      }
    },



    generatePDF() {
      const doc = new jsPDF();

      doc.setFont("Helvetica, Arial, sans-serif"); // Choisissez une police agréable.

      doc.setFontSize(12); // Réduisez la taille de la police pour le contenu.

      const today = new Date();
      const yyyy = today.getFullYear();
      let mm = today.getMonth() + 1; // Months start at 0!
      let dd = today.getDate();

      if (dd < 10) dd = '0' + dd;
      if (mm < 10) mm = '0' + mm;

      const formattedTodayPdf = dd + '-' + mm + '-' + yyyy;
      const formattedTodaySignature = dd + '/' + mm + '/' + yyyy;


      const imgData = logo;

      doc.addImage(imgData, 'PNG', 85, 10, 48, 12);

      // Informations médecin
      doc.text(`${this.prenomMedecin} ${this.nomMedecin}\nMédecin généraliste`, 20, 50);
      doc.text(`Adresse : ${this.adresseMedecin}\nTel cabinet : ${this.numMedecin}`, 130, 50);



      //Informations étudiant(e)
      doc.text(`${this.prenomEtudiant} ${this.nomEtudiant}\nNuméro de sécurité social de l'étudiant(e) : ${this.numSecu}`, 20, 70);
      doc.text(`Tel étudiant(e) : ${this.numEtudiant}`, 130, 70);


      //Informations ordonnance médicaments
      var y_medoc = 120
      doc.text(`Prescription : `, 20, 110);
      for (let i = 1; i < this.nbMedicament + 1; i++) {

        const medication = document.querySelector(`.m${i} #medicament-select`).options[document.querySelector(`.m${i} #medicament-select`).selectedIndex].text
        console.log(`${i}`, medication)

        var nbFoisParJour = document.querySelector(`.m${i} #nbFoisParJour`).value
        var nbJour = document.querySelector(`.m${i} #nbJour`).value


        doc.text(`Médicament prescrit : ${medication}\nA prendre ${nbFoisParJour} fois par jour pendant pendant ${nbJour} jours`, 20, y_medoc);
        y_medoc += 20;
      }



      doc.text(`Fait le ${formattedTodaySignature}\n\nSignature :`, 140, 220);


      doc.save(`Ordonnance-${this.prenomEtudiant}-${this.nomEtudiant}-${formattedTodayPdf}`);
    }

  },
}

</script>

<style scoped>
p {
  line-height: 20px;
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
}

#addMedicament {
  margin-top: 10px;
  padding: 10px 20px;
  font-size: 14px;
  color: black;
  align-self: center;
  border: none;
  border-radius: 5px;
  background-color: #F0F0F0;
}

#addMedicament:hover {
  background-color: #E0E0E0;
  cursor: pointer;

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