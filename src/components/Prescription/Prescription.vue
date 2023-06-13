<template>
    <div class="form-container">
      <div class="signup_form register">
        <h1 class="titre_form">Prescription médicale</h1>
        <form @submit.prevent="submitForm">
          <div class="ligne">
            <label for="patientName">Nom du patient</label>
            <input id="patientName" v-model="patientName" type="text" required>
          </div>
          <div class="ligne">
            <label for="patientBirthDate">Date de naissance du patient</label>
            <input id="patientBirthDate" v-model="patientBirthDate" type="date" required>
          </div>
          <div class="ligne">
            <label for="medication">Médicament</label>
            <input id="medication" v-model="medication" type="text" required>
          </div>
          <div class="ligne">
            <label for="dosage">Dosage</label>
            <input id="dosage" v-model="dosage" type="text" required>
          </div>
          <button class="signupButton" type="submit">Soumettre</button>
        </form>
      </div>
    </div>
  
    <!-- Section pour l'affichage de l'ordonnance générée -->
    <div v-if="prescriptionGenerated" class="form-container">
      <div class="signup_form register">
        <h1 class="titre_form">Ordonnance générée</h1>
        <div id="prescription">
          <p>
            <b>Ordonnance pour :</b> {{ patientName }}<br>
            <b>Date de naissance :</b> {{ patientBirthDate }}<br>
            <b>Médicament prescrit :</b> {{ medication }}<br>
            <b>Dosage :</b> {{ dosage }}<br>
            <b>Prescription :</b> Prendre {{ medication }} à {{ dosage }} tous les jours.
          </p>
        </div>
        <button class="signupButton" @click="generatePDF">Générer PDF</button>
      </div>
    </div>
  </template>
    
  <script>
  import { jsPDF } from "jspdf";
  
  export default {
    data() {
      return {
        patientName: '',
        patientBirthDate: '',
        medication: '',
        dosage: '',
        prescriptionGenerated: false,
      }
    },
    methods: {
      submitForm() {
        // Mettre à jour la valeur de prescriptionGenerated pour afficher l'ordonnance générée
        this.prescriptionGenerated = true;
      },
      
      generatePDF() {
  const doc = new jsPDF();

  doc.setFont("Helvetica, Arial, sans-serif"); // Choisissez une police agréable.
  doc.setFontSize(22); // Augmentez la taille de la police pour le titre.

  doc.text("Ordonnance médicale", 20, 20); // Titre de l'ordonnance.

  doc.setFontSize(16); // Réduisez la taille de la police pour le contenu.

  // Imprimez chaque ligne de l'ordonnance à une position spécifiée.
  doc.text(`Nom du patient : ${this.patientName}`, 20, 40);
  doc.text(`Date de naissance : ${this.patientBirthDate}`, 20, 60);
  doc.text(`Médicament prescrit : ${this.medication}`, 20, 80);
  doc.text(`Dosage : ${this.dosage}`, 20, 100);

  doc.save("Ordonnance.pdf");
}

  
  
  
  
      
    }
  }
  </script>
  