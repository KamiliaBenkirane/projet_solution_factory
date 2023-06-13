<template>
  <Sidebar/>
  <div class="page">
    <router-link to="/prescription">
    <div class="box">
      <h3>Créer une ordonnance</h3>
      <img src="../../assets/icones/prescription.png" alt="icone_ordonnance">
    </div>
    </router-link>
  </div>

</template>

<script>
import Sidebar from '@/components/SideBar/Sidebar.vue'

export default {
  name: "HomeMedecin",
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
  background-color: #F5F5F5;
  display : flex;
  justify-content: center;
  align-items: center;
}

.box{
  width : 200px;
  height : 200px;
  border-radius : 20px;
  display : flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ccd7e0;
  padding : 20px;
  padding-bottom : 40px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
}

.box:hover{
  background-color: #b3c3d1;
  cursor : pointer;
}

.box img{
  width : 150px;
  height : auto;
}

.box h3{
  font-size : 18px;
}

a{
  text-decoration: none;
  color : #1d1b31;
}

</style>