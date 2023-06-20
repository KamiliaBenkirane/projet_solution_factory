<template>
  <Sidebar/>
  <div class="page">
    <img class="logo_ordotech" src="../../assets/logo/OrdoTech_logo.png" alt="logo_ordotech">
    <div class="container">
      <label for="recherche_ordo">Rechercher prescription avec numéro de Sécurité Sociale :</label><br>
      <div><input type="search" id="recherche_ordo" name="recherche_ordo">
        <button><i class='bx bx-search' ></i></button>
      </div>
    </div>
  </div>

</template>

<script>
import Sidebar from "@/components/SideBar/Sidebar";

export default {
  name: "HomePharmacie",
  components: {
    Sidebar
  }
}
</script>

<style scoped>
.page{
  height : 100vh;
  width : 100vw;
  margin : 0;
  display : flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.logo_ordotech{
  height: 9vh;
  width: auto;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  margin: auto;
}

.container {
  width : 50vw;
  height : 550px;
  margin-left : 78px;
  margin-top : 100px;
  padding : 30px;
  background-color: whitesmoke;
  border-radius : 10px;
  box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
  display : flex;
  flex-direction: column;
  align-items: center;
}

input{
  padding : 8px;
  width : 400px;
  border-radius : 5px;
  border : grey 1px solid;
}

input:focus{
  outline: none;
  border : grey 2px solid;
}

.container button{
  padding : 10px;
  border-radius: 2px;
  border : none;
  margin : 5px;
  background-color: #96acc5;
}

.container button:hover{
  cursor: pointer;
  background-color: #78899d;
}



@media screen and (max-width: 1300px) {
  .container{
    width : 800px;
  }
}

</style>