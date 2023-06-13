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
  </template>
  
  <script>

  export default {
    name : "Prescription"
    
  }
  </script>
  