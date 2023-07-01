<template>
  <div class="page">
    <img class="logo_ordotech" src="../../assets/logo/OrdoTech_logo.png" alt="logo_ordotech">
    <div class="container">
      <label for="recherche_ordo">Rechercher prescription avec numéro de Sécurité Sociale :</label><br>
      <div><input type="search" id="recherche_ordo" name="recherche_ordo" placeholder="Entrez un N° Sécurité Sociale">
        <button><img class="icone_chercher" src="../../assets/icones/chercher.png" alt="logo_chercher"></button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HistoriqueOrdoPatient"
}
</script>

<style scoped>

</style>