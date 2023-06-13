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
      const prescription = document.getElementById('prescription').innerText;
      doc.text(prescription, 10, 10);
      doc.save("ordonnance.pdf");
    }
  }
}
</script>

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
      const prescription = document.getElementById('prescription').innerText;
      doc.text(prescription, 10, 10);
      doc.save("ordonnance.pdf");
    }
  }
}
</script>
>
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
      const prescription = document.getElementById('prescription').innerText;
      doc.text(prescription, 10, 10);
      doc.save("ordonnance.pdf");
    }
  }
}
</script>
egister">
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
      const prescription = document.getElementById('prescription').innerText;
      doc.text(prescription, 10, 10);
      doc.save("ordonnance.pdf");
    }
  }
}
</script>
Prescription médicale</h1>
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
      const prescription = document.getElementById('prescription').innerText;
      doc.text(prescription, 10, 10);
      doc.save("ordonnance.pdf");
    }
  }
}
</script>
submitForm">
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
      const prescription = document.getElementById('prescription').innerText;
      doc.text(prescription, 10, 10);
      doc.save("ordonnance.pdf");
    }
  }
}
</script>

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
      const prescription = document.getElementById('prescription').innerText;
      doc.text(prescription, 10, 10);
      doc.save("ordonnance.pdf");
    }
  }
}
</script>
Name">Nom du patient</label>
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
      const prescription = document.getElementById('prescription').innerText;
      doc.text(prescription, 10, 10);
      doc.save("ordonnance.pdf");
    }
  }
}
</script>
ame" v-model="patientName" type="text" required>
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
      const prescription = document.getElementById('prescription').innerText;
      doc.text(prescription, 10, 10);
      doc.save("ordonnance.pdf");
    }
  }
}
</script>

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
      const prescription = document.getElementById('prescription').innerText;
      doc.text(prescription, 10, 10);
      doc.save("ordonnance.pdf");
    }
  }
}
</script>

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
      const prescription = document.getElementById('prescription').innerText;
      doc.text(prescription, 10, 10);
      doc.save("ordonnance.pdf");
    }
  }
}
</script>
BirthDate">Date de naissance du patient</label>
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
      const prescription = document.getElementById('prescription').innerText;
      doc.text(prescription, 10, 10);
      doc.save("ordonnance.pdf");
    }
  }
}
</script>
irthDate" v-model="patientBirthDate" type="date" required>
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
      const prescription = document.getElementById('prescription').innerText;
      doc.text(prescription, 10, 10);
      doc.save("ordonnance.pdf");
    }
  }
}
</script>

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
      const prescription = document.getElementById('prescription').innerText;
      doc.text(prescription, 10, 10);
      doc.save("ordonnance.pdf");
    }
  }
}
</script>

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
      const prescription = document.getElementById('prescription').innerText;
      doc.text(prescription, 10, 10);
      doc.save("ordonnance.pdf");
    }
  }
}
</script>
ion">Médicament</label>
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
      const prescription = document.getElementById('prescription').innerText;
      doc.text(prescription, 10, 10);
      doc.save("ordonnance.pdf");
    }
  }
}
</script>
on" v-model="medication" type="text" required>
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
      const prescription = document.getElementById('prescription').innerText;
      doc.text(prescription, 10, 10);
      doc.save("ordonnance.pdf");
    }
  }
}
</script>

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
      const prescription = document.getElementById('prescription').innerText;
      doc.text(prescription, 10, 10);
      doc.save("ordonnance.pdf");
    }
  }
}
</script>

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
      const prescription = document.getElementById('prescription').innerText;
      doc.text(prescription, 10, 10);
      doc.save("ordonnance.pdf");
    }
  }
}
</script>
>Dosage</label>
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
      const prescription = document.getElementById('prescription').innerText;
      doc.text(prescription, 10, 10);
      doc.save("ordonnance.pdf");
    }
  }
}
</script>
v-model="dosage" type="text" required>
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
      const prescription = document.getElementById('prescription').innerText;
      doc.text(prescription, 10, 10);
      doc.save("ordonnance.pdf");
    }
  }
}
</script>

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
      const prescription = document.getElementById('prescription').innerText;
      doc.text(prescription, 10, 10);
      doc.save("ordonnance.pdf");
    }
  }
}
</script>
Button" type="submit">Soumettre</button>
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
      const prescription = document.getElementById('prescription').innerText;
      doc.text(prescription, 10, 10);
      doc.save("ordonnance.pdf");
    }
  }
}
</script>

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
      const prescription = document.getElementById('prescription').innerText;
      doc.text(prescription, 10, 10);
      doc.save("ordonnance.pdf");
    }
  }
}
</script>

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
      const prescription = document.getElementById('prescription').innerText;
      doc.text(prescription, 10, 10);
      doc.save("ordonnance.pdf");
    }
  }
}
</script>

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
      const prescription = document.getElementById('prescription').innerText;
      doc.text(prescription, 10, 10);
      doc.save("ordonnance.pdf");
    }
  }
}
</script>

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
      const prescription = document.getElementById('prescription').innerText;
      doc.text(prescription, 10, 10);
      doc.save("ordonnance.pdf");
    }
  }
}
</script>

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
      const prescription = document.getElementById('prescription').innerText;
      doc.text(prescription, 10, 10);
      doc.save("ordonnance.pdf");
    }
  }
}
</script>

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
      const prescription = document.getElementById('prescription').innerText;
      doc.text(prescription, 10, 10);
      doc.save("ordonnance.pdf");
    }
  }
}
</script>

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
      const prescription = document.getElementById('prescription').innerText;
      doc.text(prescription, 10, 10);
      doc.save("ordonnance.pdf");
    }
  }
}
</script>
 de l'ordonnance générée -->
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
      const prescription = document.getElementById('prescription').innerText;
      doc.text(prescription, 10, 10);
      doc.save("ordonnance.pdf");
    }
  }
}
</script>
ted" class="form-container">
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
      const prescription = document.getElementById('prescription').innerText;
      doc.text(prescription, 10, 10);
      doc.save("ordonnance.pdf");
    }
  }
}
</script>
ister">
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
      const prescription = document.getElementById('prescription').innerText;
      doc.text(prescription, 10, 10);
      doc.save("ordonnance.pdf");
    }
  }
}
</script>
donnance générée</h1>
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
      const prescription = document.getElementById('prescription').innerText;
      doc.text(prescription, 10, 10);
      doc.save("ordonnance.pdf");
    }
  }
}
</script>

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
      const prescription = document.getElementById('prescription').innerText;
      doc.text(prescription, 10, 10);
      doc.save("ordonnance.pdf");
    }
  }
}
</script>

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
      const prescription = document.getElementById('prescription').innerText;
      doc.text(prescription, 10, 10);
      doc.save("ordonnance.pdf");
    }
  }
}
</script>
/b> {{ patientName }}<br>
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
      const prescription = document.getElementById('prescription').innerText;
      doc.text(prescription, 10, 10);
      doc.save("ordonnance.pdf");
    }
  }
}
</script>
:</b> {{ patientBirthDate }}<br>
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
      const prescription = document.getElementById('prescription').innerText;
      doc.text(prescription, 10, 10);
      doc.save("ordonnance.pdf");
    }
  }
}
</script>
t :</b> {{ medication }}<br>
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
      const prescription = document.getElementById('prescription').innerText;
      doc.text(prescription, 10, 10);
      doc.save("ordonnance.pdf");
    }
  }
}
</script>
sage }}<br>
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
      const prescription = document.getElementById('prescription').innerText;
      doc.text(prescription, 10, 10);
      doc.save("ordonnance.pdf");
    }
  }
}
</script>
 Prendre {{ medication }} à {{ dosage }} tous les jours.
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
      const prescription = document.getElementById('prescription').innerText;
      doc.text(prescription, 10, 10);
      doc.save("ordonnance.pdf");
    }
  }
}
</script>

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
      const prescription = document.getElementById('prescription').innerText;
      doc.text(prescription, 10, 10);
      doc.save("ordonnance.pdf");
    }
  }
}
</script>

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
      const prescription = document.getElementById('prescription').innerText;
      doc.text(prescription, 10, 10);
      doc.save("ordonnance.pdf");
    }
  }
}
</script>
on" @click="generatePDF">Générer PDF</button>
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
      const prescription = document.getElementById('prescription').innerText;
      doc.text(prescription, 10, 10);
      doc.save("ordonnance.pdf");
    }
  }
}
</script>

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
      const prescription = document.getElementById('prescription').innerText;
      doc.text(prescription, 10, 10);
      doc.save("ordonnance.pdf");
    }
  }
}
</script>

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
      const prescription = document.getElementById('prescription').innerText;
      doc.text(prescription, 10, 10);
      doc.save("ordonnance.pdf");
    }
  }
}
</script>

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
      const prescription = document.getElementById('prescription').innerText;
      doc.text(prescription, 10, 10);
      doc.save("ordonnance.pdf");
    }
  }
}
</script>

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
      const prescription = document.getElementById('prescription').innerText;
      doc.text(prescription, 10, 10);
      doc.save("ordonnance.pdf");
    }
  }
}
</script>

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
      const prescription = document.getElementById('prescription').innerText;
      doc.text(prescription, 10, 10);
      doc.save("ordonnance.pdf");
    }
  }
}
</script>

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
      const prescription = document.getElementById('prescription').innerText;
      doc.text(prescription, 10, 10);
      doc.save("ordonnance.pdf");
    }
  }
}
</script>

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
      const prescription = document.getElementById('prescription').innerText;
      doc.text(prescription, 10, 10);
      doc.save("ordonnance.pdf");
    }
  }
}
</script>

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
      const prescription = document.getElementById('prescription').innerText;
      doc.text(prescription, 10, 10);
      doc.save("ordonnance.pdf");
    }
  }
}
</script>

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
      const prescription = document.getElementById('prescription').innerText;
      doc.text(prescription, 10, 10);
      doc.save("ordonnance.pdf");
    }
  }
}
</script>

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
      const prescription = document.getElementById('prescription').innerText;
      doc.text(prescription, 10, 10);
      doc.save("ordonnance.pdf");
    }
  }
}
</script>

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
      const prescription = document.getElementById('prescription').innerText;
      doc.text(prescription, 10, 10);
      doc.save("ordonnance.pdf");
    }
  }
}
</script>

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
      const prescription = document.getElementById('prescription').innerText;
      doc.text(prescription, 10, 10);
      doc.save("ordonnance.pdf");
    }
  }
}
</script>

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
      const prescription = document.getElementById('prescription').innerText;
      doc.text(prescription, 10, 10);
      doc.save("ordonnance.pdf");
    }
  }
}
</script>

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
      const prescription = document.getElementById('prescription').innerText;
      doc.text(prescription, 10, 10);
      doc.save("ordonnance.pdf");
    }
  }
}
</script>

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
      const prescription = document.getElementById('prescription').innerText;
      doc.text(prescription, 10, 10);
      doc.save("ordonnance.pdf");
    }
  }
}
</script>

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
      const prescription = document.getElementById('prescription').innerText;
      doc.text(prescription, 10, 10);
      doc.save("ordonnance.pdf");
    }
  }
}
</script>

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
      const prescription = document.getElementById('prescription').innerText;
      doc.text(prescription, 10, 10);
      doc.save("ordonnance.pdf");
    }
  }
}
</script>
lse,
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
      const prescription = document.getElementById('prescription').innerText;
      doc.text(prescription, 10, 10);
      doc.save("ordonnance.pdf");
    }
  }
}
</script>

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
      const prescription = document.getElementById('prescription').innerText;
      doc.text(prescription, 10, 10);
      doc.save("ordonnance.pdf");
    }
  }
}
</script>

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
      const prescription = document.getElementById('prescription').innerText;
      doc.text(prescription, 10, 10);
      doc.save("ordonnance.pdf");
    }
  }
}
</script>

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
      const prescription = document.getElementById('prescription').innerText;
      doc.text(prescription, 10, 10);
      doc.save("ordonnance.pdf");
    }
  }
}
</script>

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
      const prescription = document.getElementById('prescription').innerText;
      doc.text(prescription, 10, 10);
      doc.save("ordonnance.pdf");
    }
  }
}
</script>
r de prescriptionGenerated pour afficher l'ordonnance générée
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
      const prescription = document.getElementById('prescription').innerText;
      doc.text(prescription, 10, 10);
      doc.save("ordonnance.pdf");
    }
  }
}
</script>
d = true;
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
      const prescription = document.getElementById('prescription').innerText;
      doc.text(prescription, 10, 10);
      doc.save("ordonnance.pdf");
    }
  }
}
</script>

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
      const prescription = document.getElementById('prescription').innerText;
      doc.text(prescription, 10, 10);
      doc.save("ordonnance.pdf");
    }
  }
}
</script>

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
      const prescription = document.getElementById('prescription').innerText;
      doc.text(prescription, 10, 10);
      doc.save("ordonnance.pdf");
    }
  }
}
</script>

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
      const prescription = document.getElementById('prescription').innerText;
      doc.text(prescription, 10, 10);
      doc.save("ordonnance.pdf");
    }
  }
}
</script>
ment.getElementById('prescription').innerText;},
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
      const prescription = document.getElementById('prescription').innerText;
      doc.text(prescription, 10, 10);
      doc.save("ordonnance.pdf");
    }
  }
}
</script>

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
      const prescription = document.getElementById('prescription').innerText;
      doc.text(prescription, 10, 10);
      doc.save("ordonnance.pdf");
    }
  }
}
</script>

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
      const prescription = document.getElementById('prescription').innerText;
      doc.text(prescription, 10, 10);
      doc.save("ordonnance.pdf");
    }
  }
}
</script>

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
      const prescription = document.getElementById('prescription').innerText;
      doc.text(prescription, 10, 10);
      doc.save("ordonnance.pdf");
    }
  }
}
</script>

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
      const prescription = document.getElementById('prescription').innerText;
      doc.text(prescription, 10, 10);
      doc.save("ordonnance.pdf");
    }
  }
}
</script>

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
      const prescription = document.getElementById('prescription').innerText;
      doc.text(prescription, 10, 10);
      doc.save("ordonnance.pdf");
    }
  }
}
</script>

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
      const prescription = document.getElementById('prescription').innerText;
      doc.text(prescription, 10, 10);
      doc.save("ordonnance.pdf");
    }
  }
}
</script>

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
      const prescription = document.getElementById('prescription').innerText;
      doc.text(prescription, 10, 10);
      doc.save("ordonnance.pdf");
    }
  }
}
</script>

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
      const prescription = document.getElementById('prescription').innerText;
      doc.text(prescription, 10, 10);
      doc.save("ordonnance.pdf");
    }
  }
}
</script>
lse,
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
      const prescription = document.getElementById('prescription').innerText;
      doc.text(prescription, 10, 10);
      doc.save("ordonnance.pdf");
    }
  }
}
</script>

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
      const prescription = document.getElementById('prescription').innerText;
      doc.text(prescription, 10, 10);
      doc.save("ordonnance.pdf");
    }
  }
}
</script>

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
      const prescription = document.getElementById('prescription').innerText;
      doc.text(prescription, 10, 10);
      doc.save("ordonnance.pdf");
    }
  }
}
</script>

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
      const prescription = document.getElementById('prescription').innerText;
      doc.text(prescription, 10, 10);
      doc.save("ordonnance.pdf");
    }
  }
}
</script>

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
      const prescription = document.getElementById('prescription').innerText;
      doc.text(prescription, 10, 10);
      doc.save("ordonnance.pdf");
    }
  }
}
</script>
r de prescriptionGenerated pour afficher l'ordonnance générée
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
      const prescription = document.getElementById('prescription').innerText;
      doc.text(prescription, 10, 10);
      doc.save("ordonnance.pdf");
    }
  }
}
</script>
d = true;
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
      const prescription = document.getElementById('prescription').innerText;
      doc.text(prescription, 10, 10);
      doc.save("ordonnance.pdf");
    }
  }
}
</script>

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
      const prescription = document.getElementById('prescription').innerText;
      doc.text(prescription, 10, 10);
      doc.save("ordonnance.pdf");
    }
  }
}
</script>

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
      const prescription = document.getElementById('prescription').innerText;
      doc.text(prescription, 10, 10);
      doc.save("ordonnance.pdf");
    }
  }
}
</script>

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
      const prescription = document.getElementById('prescription').innerText;
      doc.text(prescription, 10, 10);
      doc.save("ordonnance.pdf");
    }
  }
}
</script>

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
      const prescription = document.getElementById('prescription').innerText;
      doc.text(prescription, 10, 10);
      doc.save("ordonnance.pdf");
    }
  }
}
</script>
