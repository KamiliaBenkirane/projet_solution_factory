<template>
<SidebarMedecin/>
  <div class="page">
    <img class="logo_ordotech" src="../../assets/logo/OrdoTech_logo.png" alt="logo_ordotech">
    <div class="container">
      <div><input type="search" id="recherche_ordo" name="recherche_ordo" placeholder="Recherchez avec un N° Sécurité Sociale" v-model="searchQuery">
        <button><img class="icone_chercher" src="../../assets/icones/chercher.png" alt="logo_chercher"></button>
      </div>
      <div class="histo-ordo">

        <div v-for="ordo in filteredOrdos" key="id_ordo" class="ordo-item">
          <img class="icone_ordo" src="../../assets/icones/ordonnance2.png" alt="logo_ordo">
          <div>
            <p><span><i class='bx bxs-user'></i> Etudiant(e) : {{ordo.first_name}}  {{ordo.last_name}}<br></span><span><i class='bx bx-health'></i> N° Sécurité Sociale : {{ordo.id_patient}}<br></span> <span><i class='bx bxs-calendar-alt'></i> Faite le : {{formatDateWord(ordo.date)}}</span></p>
          </div>
          <div class="buttons">
            <p @click="generatePDF(ordo)" title="Télécharger l'ordonnance"><i class='bx bxs-download'></i></p>
            <p title="Envoyer comme e-mail à l'école"><i class='bx bx-mail-send'></i></p>
          </div>



        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SidebarMedecin from "@/components/MedecinPage/SidebarMedecin";
import axios from 'axios';
import {useSessionStore} from "@/stores/session";
import {jsPDF} from "jspdf";
import logo from "@/assets/logo/OrdoTech_logo.png";

export default {
  name: "HistoriqueOrdoMedecin",
  components : {
    SidebarMedecin,
  },
  setup () {
    const store = useSessionStore()
    return{store}
  },
  data(){
    return{
      ordos : [],
      searchQuery : '',
    }
  },
  created(){
    this.getOrdonnances()
  },
  computed: {
    filteredOrdos() {
      const searchQuery = this.searchQuery.toLowerCase().trim();
      if (searchQuery === '') {
        return this.suppressDoublons(this.ordos).reverse();
      } else {
        return this.suppressDoublons(this.ordos).filter(ordo => {
          return ordo.id_patient.toString().includes(searchQuery);
        }).reverse();
      }
    }
  },
  methods : {
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
    formatDate(dateString) {
      const date = new Date(dateString);
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();

      return `${day < 10 ? '0' + day : day}-${month < 10 ? '0' + month : month}-${year}`;
    },
    formatDateWord(date) {
      const options = { day: 'numeric', month: 'long', year: 'numeric' };
      const formattedDate = new Date(date).toLocaleDateString('fr-FR', options);
      return formattedDate;
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

<style scoped src="../../style/historique-recherche.css">



</style>