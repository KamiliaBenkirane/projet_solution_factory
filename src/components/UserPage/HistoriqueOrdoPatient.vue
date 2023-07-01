<template>
  <SidebarUser/>
  <div class="page">
    <img class="logo_ordotech" src="../../assets/logo/OrdoTech_logo.png" alt="logo_ordotech">
    <div class="container">
      <div><input type="search" id="recherche_ordo" name="recherche_ordo" placeholder="Recherchez avec une date : '1 janvier 2023' ">
        <button><img class="icone_chercher" src="../../assets/icones/chercher.png" alt="logo_chercher"></button>
      </div>
      <div class="histo-ordo">

        <div v-for="ordo in suppressDoublons(ordos).reverse()" key="id_ordo" class="ordo-item">
          <img class="icone_ordo" src="../../assets/icones/ordonnance2.png" alt="logo_ordo">
          <div>
            <p><span><i class='bx bxs-user'></i> Medecin : {{ordo.medecin_first_name}}  {{ordo.medecin_last_name}}<br></span><span><i class='bx bx-health'></i> Num : {{ordo.medecin_num_phone}}<br></span> <span><i class='bx bxs-calendar-alt'></i> Faite le : {{formatDateWord(ordo.date)}}</span></p>
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
import SidebarUser from "@/components/UserPage/SidebarUser";
import axios from 'axios';
import {useSessionStore} from "@/stores/session";
import {jsPDF} from "jspdf";
import logo from "@/assets/logo/OrdoTech_logo.png";

export default {
  name: "HistoriqueOrdoPatient",
  components : {
    SidebarUser,
  },
  setup () {
    const store = useSessionStore()
    return{store}
  },
  data(){
    return{
      ordos : [],
    }
  },
  created(){
    this.getOrdonnances()
  },
  methods : {
    getOrdonnances(){
      axios.post("http://localhost:5001/getOrdonnances", {
        role : "id_patient",
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
      doc.text(`${ordo.medecin_first_name} ${ordo.medecin_last_name}\nMédecin généraliste`, 20, 50);
      doc.text(`Adresse : ${ordo.nb_street} rue ${ordo.street_name}, ${ordo.city} ${ordo.post_code}  \nTel cabinet : ${ordo.medecin_num_phone}`, 110, 50);



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
          const {id_ordo, id_patient, first_name, last_name, date, num_phone, medecin_first_name, medecin_last_name, medecin_num_phone, nb_street, street_name, city, post_code} = obj;
          const key = `${id_ordo}-${id_patient}-${first_name}-${last_name}-${date}-${num_phone}-${medecin_last_name}-${medecin_num_phone}-${medecin_first_name}-${city}-${nb_street}-${street_name}-${post_code}`;

          result[key] = {
            id_ordo,
            id_patient,
            first_name,
            last_name,
            date,
            num_phone,
            medecin_num_phone,
            medecin_last_name,
            medecin_first_name,
            nb_street,
            street_name,
            city,
            post_code

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