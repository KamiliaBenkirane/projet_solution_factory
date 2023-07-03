
<template>
  <div class="sidebar">
    <div class="logo_content">
      <div class="logo">
        <div class="logo_name">
          <p>OrdoTech</p>
        </div>
      </div>
      <i class="bx bx-menu" id="btn" @click="moveSidebar"/>
      <ul class="nav_list">


        <li>
          <a href="/" @click="logout">
            <i class="bx bx-log-out" id="log_out"></i>
            <span class="links_name">Se déconnecter</span>
          </a>
          <span class="tooltip">Quitter</span>
        </li>
      </ul>
      <div class="profile_content">
        <div class="profile">
          <div class="profile_details">
            <div>
              <img src="../../assets/icones/avatar.png" alt="user_image" class="user_image justify-self-start">
            </div>
            <div class="name_type">
              <div class="name" id="full_name"> {{ nom }}</div>
              <div class="type"> {{ role }} </div>
            </div>
          </div>
          <i class="bx bxs-user-account bx-sm icon_user"></i>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useSessionStore} from "@/stores/session";
export default {
  name: "Sidebar",

  setup () {
    const store = useSessionStore()
    return{store}
  },
  data(){
    return {
      role : "Pharmacie",
      nom : this.store.getNomPharma(),
      mail : this.store.getMailPharma(),
      numero : this.store.getNumPharma()
    }
  },

  mounted() {
    let sidebar = document.querySelector(".sidebar");
    let btn = document.querySelector("#btn");

    if (sidebar.classList.contains("active") && btn.classList.contains("bx bxs-arrow-from-right")) {
      sidebar.classList.remove("active");
    } else if (!sidebar.classList.contains("active") && btn.classList.contains("bx bx-menu")) {
      sidebar.classList.add("active");

    }
  },

  methods: {
    moveSidebar() {
      let btn = document.querySelector("#btn");
      let sidebar = document.querySelector(".sidebar");

      if (sidebar.classList.contains("active")) {
        sidebar.classList.remove("active");
        btn.classList = "bx bx-menu";

      } else {
        sidebar.classList.add("active");
        btn.classList = "bx bxs-arrow-from-right";

      }
    },
    logout(){
      this.store.$reset()
    }
  }
}
</script>

<style scoped>

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  position: relative;
  min-height: 100vh;
  width: 100%;
  overflow: hidden;
}

.sidebar {
  position: fixed;
  height: 100%;
  width: 78px;
  top: 0;
  left: 0;
  background: #011c33;
  padding: 6px 14px;
  transition: all 0.5s ease;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  z-index : 999;
}
.sidebar.active{
  width: 240px;
}

.sidebar .logo_content .logo{
  color: white;
  display: flex;
  height: 50px;
  width: 100%;
  align-items: center;
  opacity: 0;
  pointer-events: none;
  transition: all 0.5s ease;
}
.sidebar.active .logo_content .logo{
  opacity: 1;
  pointer-events: none;
}

.logo_content .logo i{
  font-size: 28px;
  margin-right: 5px;
}

.logo_content .logo .logo_name {
  font-size: 20px;
  font-weight: 400;
}

.sidebar #btn{
  position: absolute;
  color: white;
  left: 50%;
  top: 6px;
  font-size: 20px;
  height: 50px;
  width: 50px;
  text-align: center;
  line-height: 50px;
  transform: translateX(-50%);
  transition: all 0.4s ease;
  border-radius: 12px;
}

.sidebar #btn:hover{
  background-color: white;
  color: #11101d;
  cursor : pointer;
}

.sidebar.active #btn{
  left: 87%;
}

.sidebar ul{
  margin-top: 20px;
}
.sidebar ul li{
  position: relative;
  height: 50px;
  width: 100%;
  margin: 0;
  list-style: none;
  line-height: 50px;
}
.sidebar ul li .tooltip{
  position: absolute;
  left: 122px;
  top: 0;
  transform: translate(-50%, -50%);
  border-radius: 6px;
  height: 35px;
  width: 122px;
  background: white;
  line-height: 35px;
  text-align: center;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  transition: 0s;
  opacity: 0;
  pointer-events: none;
  display: block;
}
.sidebar.active ul li .tooltip{
  display: none;
}
.sidebar ul li:hover .tooltip{
  transition: all 0.5s ease;
  top: 50%;
  opacity: 1;
  background: #01223d;
  color: white;
  margin-left: 5px;
  cursor : pointer;
}
.sidebar ul li a{
  color: white;
  display: flex;
  align-items: center;
  border-radius: 12px;
  text-decoration: none;
  transition: all 0.4s ease;
  white-space: nowrap;
}
.sidebar ul li a:hover{
  background-color: white;
  color: #11101d;
  cursor : pointer;
}
.sidebar ul li a i{
  height: 50px;
  min-width: 50px;
  line-height: 50px;
  text-align: center;
}
.sidebar .links_name{
  opacity: 0;
  pointer-events: none;
}
.sidebar.active .links_name{
  opacity: 1;
  pointer-events: auto;
}
.sidebar .profile_content {
  position: absolute;
  color: white;
  bottom: 0;
  left: 0;
  width: 100%;
}
.sidebar .profile_content .profile{
  position: relative;
  padding: 10px 12px;
  height: 60px;
  background: none;
  transition: all 0.4s ease;
}
.sidebar.active .profile_content .profile{
  background: #1d1b31;
}

.sidebar .profile_content .profile .profile_details{
  display: flex;
  align-items: center;
  opacity: 0;
  pointer-events: none;
}
.sidebar.active .profile .profile_details{
  opacity: 1;
  pointer-events: auto;
}

.sidebar .profile_details .name_job{
  margin-left: 10px;
}
.sidebar .profile_details .name_type{
  margin-left: 24px;
}
.sidebar .profile_details .name{
  font-size: 15px;
  font-weight: 400;
}
.sidebar .profile_details .job{
  font-size: 12px;
}
.sidebar .icon_user{
  position: absolute;
  left: 50%;
  bottom: 5px;
  transform: translateX(-50%);
  min-width: 50px;
  line-height: 50px;
  font-size: 20px;
  border-radius: 12px;
  text-align: center;
  background: #1d1b31;
  transition: all 0.4s ease;
}

.sidebar.active .icon_user{
  left: 90%;
  background: none;
}


.home_content{
  position: absolute;
  height: 100%;
  width: calc(100% - 78px);
  left: 78px;
  transition: all 0.5s ease;
  margin: 20px;
}

.sidebar.active ~ .home_content{
  width: calc(100% - 240px);
  left: 240px;
}

.user_image {
  height: 25px;
  width: 25px;
  border-radius: 50%;
  background-color: white;
}

</style>