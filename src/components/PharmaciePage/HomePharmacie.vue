<template>
  <SidebarPharmacie/>
  <div class="page">
    <img class="logo_ordotech" src="../../assets/logo/OrdoTech_logo.png" alt="logo_ordotech">
    <div class="container">
      <label for="recherche_ordo">Rechercher prescription avec numéro de Sécurité Sociale :</label><br>
      <div><input type="search" id="recherche_ordo" name="recherche_ordo" placeholder="Entrez un N° Sécurité Sociale" v-model="searchQuery">
        <button><img class="icone_chercher" src="../../assets/icones/chercher.png" alt="logo_chercher"></button>
      </div>
    </div>
  </div>

</template>

<script>
import SidebarPharmacie from "@/components/PharmaciePage/SidebarPharmacie.vue";

export default {
  name: "HomePharmacie",
  components: {
    SidebarPharmacie
  },
  data(){
    return{
      searchQuery:'',
    }
  },

}
</script>

<style scoped src="../../style/historique-recherche.css">



</style>