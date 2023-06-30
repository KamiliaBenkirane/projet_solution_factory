<template>
  <SidebarUser/>
  <div class="page">
    <img class="logo_ordotech" src="../../assets/logo/OrdoTech_logo.png">
    <div class="container">
      <div class="bloc_medecin">
        <h3>Mon médecin traitant</h3>
        <div class="medecin">
          <img src="../../assets/icones/avatar-homme.png" alt="icone_avatar">
          <div class="infos_medecin">
            <p>{{medecinTraitant.prenom}} {{medecinTraitant.nom}}<br>{{medecinTraitant.mail}} <br> num : {{medecinTraitant.numero}}</p>
          </div>
        </div>

      </div>
      <div class="bloc_ordo">
        <div class="nouvelles_ordo">
          <div class="titre_nouvelles_ordo"><h3>Mes nouvelles ordonnances </h3><img src="../../assets/icones/ordonnance3.png" alt="icone_avatar"></div>
          <div class="liste-ordo">

            <div v-for="ordo in nouvellesOrdos" key="id_ordo" class="ordo-item">
              <div class="red-dot"></div>
              <p>{{ordo.date}}</p>
              <img src="../../assets/icones/pdf.png">
              <div class="icones_pdf">
                <img src="../../assets/icones/download-regular-48.png"><img src="../../assets/icones/send-solid-48.png">
              </div>



            </div>


          </div>
          <p class="historique">Voir toutes mes ordonnances &#8594;</p>


        </div>
        <div class="pharmacie_proximite">
          <h3>Les pharmacies à proximité</h3>
          <div class="map_pharmacie" ref="mapRef">
            <!-- Map pharmacie à proximité à ajouter -->
          </div>

        </div>
      </div>

    </div>


  </div>
</template>

<script>
import SidebarUser from "@/components/UserPage/SidebarUser.vue";
import { onMounted, ref } from "vue";
import { Loader } from '@googlemaps/js-api-loader';
import { useSessionStore} from "@/stores/session";


export default {
  name: "HomeUser",
  components : {
    SidebarUser
  },

  setup () {
    const store = useSessionStore()
    return{store}
  },
  data(){
    return{
      medecinTraitant : {
        nom : this.store.getNomMedecinT(),
        prenom : this.store.getPrenomMedecinT(),
        mail : this.store.getMailMedecinT(),
        numero : this.store.getNumeroMedecinT()
      },
      nouvellesOrdos : [{
        id_ordo : 1,
        patient : "Nom Prénom",
        date : "01/01/2023"
      },
        {
          id_ordo : 2,
          patient : "Nom Prénom",
          date : "01/01/2023"
        },
        {
          map : null,
          markers : [],
          lat : null,
          lng : null,
          mapRef : ref(null)
        },
      ]
    }
  },
  mounted(){
    onMounted(() => {
      this.loadGoogleMaps();
    });
  },
    methods: {
    async loadGoogleMaps() {
      const loader = new Loader({
        apiKey: 'AIzaSyD1trfJjj18USm4-CT-L4Omv1topSQpHNU',
        version: 'weekly',
        libraries: ['places']
      });

      try {
        await loader.load();
        this.initializeMap();
      } catch (error) {
        console.error('Failed to load Google Maps API', error);
      }
    },
    initializeMap() {
      console.log("initializeMap a été appelée");
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition( (position) =>
        {
          console.log("Position obtenue avec succès");
          this.lat = position.coords.latitude;
          this.lng = position.coords.longitude;

            this.map = new window.google.maps.Map(this.$refs.mapRef, {
              center: {lat: this.lat, lng: this.lng},
              zoom: 14
            });

          // Once the map is initialized, search for nearby pharmacies
          this.searchNearbyPharmacies();

        }, (error) => {
          console.log("Position obtenue avec succès");
          console.error('Erreur lors de la récupération de la localisation', error);
        });
    } else {
      
        console.log("Geolocation is not supported by this browser.");
      }
    },
    searchNearbyPharmacies() {
      const service = new window.google.maps.places.PlacesService(this.map);

      const request = {
        location: new window.google.maps.LatLng(this.lat, this.lng),
        radius: 500, // Distance en mètres pour la recherche des pharmacies à proximité
        types: ['pharmacy']
      };

      service.nearbySearch(request, (results, status) => {
        if (status === window.google.maps.places.PlacesServiceStatus.OK) {
          this.addMarkers(results);
        }
      });
    },
    addMarkers(places) {
      for (let i = 0; i < places.length; i++) {
        const place = places[i];

        const marker = new window.google.maps.Marker({
          position: place.geometry.location,
          map: this.map,
          title: place.name
        });

        this.markers.push(marker);
      }
    }
  },
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
  padding-left : 30px;
  width: auto;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  margin: auto;
}

.container {
  width : 75vw;
  height : 550px;
  margin-left : 78px;
  margin-top : 100px;
  padding : 20px;
  display : flex;
  flex-direction : column;
  gap : 30px;
  justify-content: center;
  align-items: center;

}

.bloc_medecin{
  width : 30%;
  height : 30%;
  background-color: #79CEE7;
  border-radius: 10px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  display : flex;
  flex-direction : column;
  justify-content: center;
  align-items: center;
  transition : all 0.25s ease;
}

.bloc_medecin:hover{
  transform : scale(1.03);
}

.bloc_medecin img {
  width : 50px;
  height : auto;
}

.bloc_medecin h3{
  text-decoration: underline;
}

.medecin{
  display: flex;
  justify-content: center;
  align-items: center;
  gap : 20px;
}

.bloc_ordo{
  width : 100%;
  height : 70%;
  display : flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap : 20px;
}

.nouvelles_ordo{
  width: 50%;
  height : 100%;
  background-color: #203f6b;
  color : white;
  border-radius: 10px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position : relative;
  padding : 10px;
  transition: all 0.25s ease;
}

.nouvelles_ordo:hover{
  transform : scale(1.03);
}
.nouvelles_ordo h3{
  font-size : 20px;
}

.nouvelles_ordo img{
  height :40px;
  width : auto;
  padding : 0 10px;
}

.titre_nouvelles_ordo{
  display: flex;
  justify-content: center;
  align-items: center;
}

.liste-ordo{
  display : flex;
  height : 70%;
  gap : 20px;
  justify-content: center;
  align-items: center;
}

.ordo-item{
  padding : 5px 25px 10px 25px;
  display : flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #011c33;
  gap : 5px;
  border-radius: 10px;
  position : relative;
}

.ordo-item img{
  height : 80px;
  width : auto;
}

.icones_pdf{
  display: flex;
  flex-direction: row;
  gap : 15px;
}

.icones_pdf img{
  height : 23px;
  width : auto;
  margin-top : 5px;
  padding : 10px;
  border-radius: 5px;
}

.icones_pdf img:hover{
  cursor: pointer;
  background-color: black;
}

.historique{
  line-height: 0;
  font-size : 15px;
  padding-left: 10px;
  color : lightgray;
  align-self: flex-end;
  position: absolute; /* Add this */
  bottom: 10px; /* Add this */
  right: 15px;
}

.historique:hover{
  cursor : pointer;
  text-decoration: underline;
}



.pharmacie_proximite{
  width: 50%;
  height : 100%;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  background-color: #96acc5;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding : 10px;
  transition: all 0.25s ease;

}


.pharmacie_proximite:hover{
  transform : scale(1.03);
}


.map_pharmacie{
  height : 80%;
  width : 90%;
  background-color: #4c6588;
}

.red-dot{
  height : 20px;
  width : 20px;
  background-color: #CC0000;
  border-radius: 50%;
  position : absolute;
  top : -5px;
  right : -5px;
}



@media screen and (max-width: 1300px) {
  .container{
    width : 1035px;
  }
}

</style>