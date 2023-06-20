<template>
  <Sidebar/>
    <div class="form-container" id="OrdonnanceForm">
      <div class="signup_form register">
        <h1 class="titre_form">Prescription médicale</h1>
        <form @submit.prevent="submitForm()" id="form_ordo" >
          <div class="ligne">
            <label for="numSecu">Numéro de Sécurité Social de l'étudiant</label>
            <input id="numSecu" v-model="numSecu" type="number" required>
          </div>
          <div id="medicament_container">
            <div class="medicament">
              <div class="ligne">
                <label>Médicament</label>
                <select name="Medicaments" id="medicament-select">
                </select>
              </div>
              <div class="ligne_container">
                <div class="ligne">
                  <label for="dosage">Nombre de fois par jour</label>
                  <input id="dosage" v-model="nbFoisParJour" type="number" required>
                </div>
                <div class="ligne">
                  <label for="patientBirthDate">Pendant cb de jours ?</label>
                  <input id="patientBirthDate" v-model="nbJour" type="number" required>
                </div>
              </div>
            </div>
          </div>



          <p @click="addMedoc"  id="addMedicament">Ajouter un médicament</p>

          <button class="signupButton" type="submit">Soumettre</button>
        </form>
      </div>
    </div>
  
    <!-- Section pour l'affichage de l'ordonnance générée -->
    <div v-if="prescriptionGenerated" class="form-container">
      <div class="register">

        <router-link to="/homeMedecin"><p class="info_form">Retourner à l'accueil</p></router-link>

      <div class="signup_form register">

        <h1 class="titre_form">Ordonnance générée : </h1>
        <div id="prescription">
          <p>
            <b><u>Ordonnance pour :</u></b> {{ prenomEtudiant }} {{nomEtudiant}}<br>
            <b><u>Numéro Sécurité Social :</u></b> {{ numSecu }}<br>
            <b><u>Date de naissance :</u></b> {{ dateNaissanceEtudiant }}<br>
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
  import Sidebar from "@/components/SideBar/Sidebar";
  import logo from '@/assets/logo/OrdoTech_logo.png';
  
  export default {
    components: {
      Sidebar
    },
    data() {
      return {
        numSecu: null,
        nbFoisParJour: null,

        nbJour: null,
        prescriptionGenerated: false,
        nomMedecin : 'Nom',
        prenomMedecin : 'Prénom',
        numMedecin : '0625221555',
        adresseMedecin : "Adresse",
        prenomEtudiant : 'Prenom',
        nomEtudiant : 'Nom',
        adresseEtudiant : "Adresse",
        numEtudiant : "05514896",
        dateNaissanceEtudiant : "15/05/2001",
        option :
            [
              {
                "text"  : "Doliprane",
                "selected" : true
              },
              {
                "text"     : "Ibuprofène",
              },
              {
                "text"  : "Aspegic",
              }
            ],

      }
    },
    mounted(){
      this.fillSelectMedicament()
    },
    methods: {
      submitForm() {
        // Mettre à jour la valeur de prescriptionGenerated pour afficher l'ordonnance générée
        this.prescriptionGenerated = true;
        document.getElementById("OrdonnanceForm").style.display = "none";
      },

      addMedoc(){
        const divToDuplicate = document.querySelector('.medicament');
        const formContainer = document.getElementById('medicament_container');
        if (divToDuplicate && formContainer) {
          const clonedDiv = divToDuplicate.cloneNode(true);
          formContainer.appendChild(clonedDiv);
        }
      },

      fillSelectMedicament(){
        var selectBox = document.getElementById('medicament-select');
        let listOptions = this.option

        for(var i = 0; i < listOptions.length; i++){
          var option = listOptions[i];
          selectBox.add( new Option(option.text, option.text, option.selected) );
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
          const medication = document.getElementById('medicament-select').options[document.getElementById('medicament-select').selectedIndex].text

          doc.text(`Prescription : `, 20, 110);
          doc.text(`Médicament prescrit : ${medication}\nA prendre ${this.nbFoisParJour} par jour pendant pendant ${this.nbJour} jours`, 20, 120);


        doc.text(`Fait le ${formattedTodaySignature}\n\nSignature :`, 140, 180);


        doc.save(`Ordonnance-${this.prenomEtudiant}-${this.nomEtudiant}-${formattedTodayPdf}`);
}

  
  
  
  
      
    }
  }
  </script>

<style scoped>

p{
  line-height: 20px;
}

p:hover{
  text-decoration: none;
}

select{
  padding : 8px;
  margin-top: 5px;
  border-radius: 5px;
  width: 100%;
}

.signupButton{
  width: 100%;
}

#addMedicament{
  margin-top : 10px;
  padding : 10px 20px;
  font-size: 14px;
  color : black;
  align-self: center;
  border : none;
  border-radius : 5px;
  background-color: #F0F0F0;
}

#addMedicament:hover{
  background-color: #E0E0E0;
  cursor: pointer;

}

form{
  display: flex;
  flex-direction: column;
  justify-content: center;
}

</style>