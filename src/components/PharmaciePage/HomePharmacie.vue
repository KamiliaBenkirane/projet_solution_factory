<template>
  <SidebarPharmacie/>
  <div class="page">
    <img class="logo_ordotech" src="../../assets/logo/OrdoTech_logo.png" alt="logo_ordotech">
    <div class="container">
      <label for="recherche_ordo">Rechercher prescription avec numéro de Sécurité Sociale :</label><br>
      <div><input type="search" id="recherche_ordo" name="recherche_ordo" placeholder="Entrez un N° Sécurité Sociale" v-model="searchQuery">
        <button><img class="icone_chercher" src="../../assets/icones/chercher.png" alt="logo_chercher"></button>
      </div>

      <!-- <div class="liste_ordo">
          <div v-for="ordo in ordonnances" :key="ordo.id" class="ordo_item">
            <div class="titre_ordo">
              <img class="icone_ordo" src="../../assets/icones/ordo_icone.png" alt="icone_ordo">
              <h3>ID Ordo: {{ ordo.id_ordo }}</h3>
            </div>
            <div class="bloc_info_ordo">
              <div>
                <p><i class='bx bxs-envelope'></i> E-mail: {{ ordo.email }}</p>
                <p><i class='bx bxs-phone'></i> Numéro : {{ ordo.num_phone }}</p>

                <p v-if="ordo.address">
                  <i class='bx bxs-map'></i> Address: {{ ordo.address.nb_street }} {{ ordo.address.street_name }}, {{
                    ordo.address.post_code }}{{ ordo.address.city }}
                </p>
              </div>
              <div>
                <p class="bouton_acces" @click="sendToPharma(ordo.id_ordo)">Autoriser l'accès à l'ordonnance <i
                    class='bx bxs-lock-open'></i></p>
              </div>
            </div>
          </div>
        </div> -->


    </div>
  </div>

</template>

<script>
import SidebarPharmacie from "@/components/PharmaciePage/SidebarPharmacie.vue";
import { response } from "express";
import { useSessionStore } from "@/stores/session";
import axios from 'axios';

export default {
  name: "HomePharmacie",
  components: {
    SidebarPharmacie
  },
  data(){
    return{
      searchQuery:'',
      ordonnances: [],
    }
  },

  created(){
    //this.getOrdonnances()
  },

  methods:{
    //the table of ordonnance_pharma
    // getOrdonnances(){
    //   axios.post('http://localhost:5001/getOrdonnancePharma',{
    //     role: "id_pharma",
    //     id: this.store.getId()
    //   }).then(response => {
    //     this.ordonnances = response.data;
    //   }).catch(err => {
    //     console.log(err)
    //   })
    // },

    // getDetailedOrdonnances(){
    //   axios.post
    // }


  }

}
</script>

<style scoped src="../../style/historique-recherche.css">



</style>