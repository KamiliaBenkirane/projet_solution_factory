<template>
  <SidebarUser />
  <div class="page">
    <img class="logo_ordotech" src="../../assets/logo/OrdoTech_logo.png">
    <div class="container">
      <div v-if="medecinTraitant.prenom !== ''" class="bloc_medecin">
        <h3>Mon médecin traitant</h3>
        <div class="medecin">
          <img src="../../assets/icones/avatar-homme.png" alt="icone_avatar">
          <div class="infos_medecin">
            <p><i class='bx bxs-user'></i> {{ medecinTraitant.prenom }} {{ medecinTraitant.nom }}<br><i
                class='bx bxs-envelope'></i> {{ medecinTraitant.mail }} <br><i class='bx bxs-phone'></i>
              {{ medecinTraitant.numero }}</p>
          </div>
        </div>

      </div>
      <div class="bloc_ordo">
        <div class="nouvelles_ordo">
          <div class="titre_nouvelles_ordo">
            <h3>Mes nouvelles ordonnances </h3><img src="../../assets/icones/ordonnance3.png" alt="icone_avatar">
          </div>
          <div v-if="ordos.length !== 0" class="liste-ordo">

            <div v-for="ordo in lastTwoValues(suppressDoublons(ordos))" key="id_ordo" class="ordo-item">
              <div class="red-dot"></div>
              <p>Dr. {{ ordo.medecin_last_name }}<br>{{ formatDate(ordo.date) }}</p>
              <img src="../../assets/icones/pdf.png">
              <div class="icones_pdf">
                <img src="../../assets/icones/download-regular-48.png" title="Télécharger l'ordonnance"
                  @click="generatePDF(ordo)">
                <img src="../../assets/icones/send-solid-48.png" title="Donner l'accès à la pharmacie"
                  @click="openModal(ordo)">
              </div>



            </div>

            <p class="historique"><router-link to="/historiquePatient">Voir toutes mes ordonnances &#8594;</router-link>
            </p>
          </div>
          <div v-else class="aucune-ordo">
            <img src="../../assets/icones/aucun-resultat-blanc.png" alt="icone_aucun_res">
            <h4>Aucune ordonnance pour le moment</h4>

          </div>


        </div>
        <div class="pharmacie_proximite">
          <h3>Les pharmacies à proximité</h3>
          <div class="map_pharmacie" ref="mapRef">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2626.847075833089!2d2.3559762759380263!3d48.82297917132739!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e671861d3f69dd%3A0xb0a7c98393ccbac0!2sPharmacie%20Italie%20Sud!5e0!3m2!1sfr!2sfr!4v1688309819291!5m2!1sfr!2sfr"
              width="100%" height="100%" style="border:0; border-radius : 5px;" allowfullscreen="" loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>

        </div>
      </div>

    </div>

    <!-- pop up window to send to pharmacie -->
    <div class="modal" v-if="showModal">
      <div class="modal-content">
        <span class="close" @click="closeModal()">&times;</span>
        <h2>Envoyez l'ordonnance à la pharmacie de votre choix !</h2>
        <br>
        <div class="liste_pharma">
          <div v-for="pharma in pharmacies" :key="pharma.id" class="pharma_item">
            <div class="titre_pharma">
              <img class="icone_pharma" src="../../assets/icones/pharmacie_icone.png" alt="icone_pharma">

              <h3>Nom: {{ pharma.name_pharma }}</h3>
            </div>
            <div class="bloc_info_pharma">
              <div>
                <p><i class='bx bxs-envelope'></i> E-mail: {{ pharma.email }}</p>
                <p><i class='bx bxs-phone'></i> Numéro : {{ pharma.num_phone }}</p>

                <p v-if="pharma.address">
                  <i class='bx bxs-map'></i> Address: {{ pharma.address.nb_street }} {{ pharma.address.street_name }}, {{
                    pharma.address.post_code }}{{ pharma.address.city }}
                </p>
              </div>
              <div>
                <p class="bouton_acces" @click="sendToPharma(pharma.id_pharma)">Autoriser l'accès à l'ordonnance <i
                    class='bx bxs-lock-open'></i></p>
              </div>
            </div>
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
import { useSessionStore } from "@/stores/session";
import axios from 'axios';
import { jsPDF } from "jspdf";
import logo from "@/assets/logo/OrdoTech_logo.png";


export default {
  name: "HomeUser",
  components: {
    SidebarUser
  },

  setup() {
    const store = useSessionStore()
    return { store }
  },
  data() {
    return {
      medecinTraitant: {
        nom: this.store.getNomMedecinT(),
        prenom: this.store.getPrenomMedecinT(),
        mail: this.store.getMailMedecinT(),
        numero: this.store.getNumeroMedecinT(),
      },
      ordos: [],
      showModal: false,
      pharmacies: [],
      selectedOrdo: null
    }
  },
  mounted() {
    onMounted(() => {
      this.loadGoogleMaps();
    });
  },
  created() {
    this.getOrdonnances(),
    this.getPharmacies()
  },

  methods: {
    openModal(ordo) {
      this.showModal = true;
      this.selectedOrdo = ordo;
    },
    closeModal() {
      this.showModal = false;
      this.selectedOrdo = null;
    },

    getPharmacies() {
      axios.get('http://localhost:5001/getPharmacies')
        .then(response => {
          //console.log(response.data)
          const pharmas = response.data;
          // Now fetch address for each pharmacy
          for (let pharma of pharmas) {
            axios.get(`http://localhost:5001/getAddress`, {
              params: {
                id_adress: pharma.id_adress
              }
            }).then(response => {
              //console.log(response.data)
              pharma.address = response.data[0];
            }).catch(err => {
              console.log(err)
            })
          }

          this.pharmacies = pharmas;

        }).catch(err => {
          console.log(err)
        })
    },

    getOrdonnances() {
      axios.post("http://localhost:5001/getOrdonnances", {
        role: "id_patient",
        id: this.store.getId(),
      }).then(response => {
        //console.log(response.data)
        this.ordos = response.data
        //console.log(this.ordos)
      }).catch(err => {
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
    suppressDoublons(list) {
      const result = {};
      if (list.length === 0) {
        return []
      }
      else {
        list.forEach((obj) => {
          const { id_ordo, id_patient, first_name, last_name, date, num_phone, medecin_first_name, medecin_last_name, medecin_num_phone, nb_street, street_name, city, post_code } = obj;
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
    lastTwoValues(ordo) {
      const length = ordo.length;
      if (length === 1) {
        return [ordo[0]];
      } else if (length > 1) {
        return ordo.slice(length - 2).reverse();
      } else {
        return [];
      }
    },

    //Send ordonnance
    sendToPharma(id_selectedpharma) {
      const dataSend = {
        id_pharma: id_selectedpharma,
        id_ordo: this.selectedOrdo.id_ordo
      }

      axios.post("http://localhost:5001/sendOrdonnanceToPharma", dataSend)
        .then(response => {
          //console.log(response.data)
          alert("Votre ordonnance a bien été envoyé !")
          this.closeModal()
        }).catch(err => {
          console.log(err)
        })
    },

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
        navigator.geolocation.getCurrentPosition((position) => {
          console.log("Position obtenue avec succès");
          this.lat = position.coords.latitude;
          this.lng = position.coords.longitude;

          this.map = new window.google.maps.Map(this.$refs.mapRef, {
            center: { lat: this.lat, lng: this.lng },
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
.page {
  height: 100vh;
  width: 100vw;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

}

.logo_ordotech {
  height: 9vh;
  padding-left: 30px;
  width: auto;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  margin: auto;
}

.container {
  width: 75vw;
  height: 550px;
  margin-left: 78px;
  margin-top: 100px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  justify-content: center;
  align-items: center;

}

.bloc_medecin {
  width: 30%;
  height: 30%;
  background-color: #79CEE7;
  border-radius: 10px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 0.25s ease;
}

.bloc_medecin:hover {
  transform: scale(1.03);
}

.bloc_medecin img {
  width: 50px;
  height: auto;
}

.bloc_medecin h3 {
  text-decoration: underline;
}

.medecin {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}

.bloc_ordo {
  width: 100%;
  height: 70%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;
}

.nouvelles_ordo {
  width: 50%;
  height: 100%;
  background-color: #203f6b;
  color: white;
  border-radius: 10px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 10px;
  transition: all 0.25s ease;
}

.nouvelles_ordo:hover {
  transform: scale(1.03);
}

.nouvelles_ordo h3 {
  font-size: 20px;
}

.nouvelles_ordo img {
  height: 40px;
  width: auto;
  padding: 0 10px;
}

.titre_nouvelles_ordo {
  display: flex;
  justify-content: center;
  align-items: center;
}

.liste-ordo {
  display: flex;
  height: 70%;
  gap: 20px;
  justify-content: center;
  align-items: center;
}

.ordo-item {
  padding: 5px 25px 10px 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #011c33;
  gap: 5px;
  border-radius: 10px;
  position: relative;
}

.ordo-item img {
  height: 80px;
  width: auto;
}

.icones_pdf {
  display: flex;
  flex-direction: row;
  gap: 15px;
}

.icones_pdf img {
  height: 23px;
  width: auto;
  margin-top: 5px;
  padding: 10px;
  border-radius: 5px;
}

.icones_pdf img:hover {
  cursor: pointer;
  background-color: black;
}

.historique {
  line-height: 0;
  font-size: 15px;
  padding-left: 10px;
  color: lightgray;
  align-self: flex-end;
  position: absolute;
  /* Add this */
  bottom: 10px;
  /* Add this */
  right: 15px;
}

.historique:hover {
  cursor: pointer;
  text-decoration: underline;
}



.pharmacie_proximite {
  width: 50%;
  height: 100%;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  background-color: #ABBCD0;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  transition: all 0.25s ease;

}


.pharmacie_proximite:hover {
  transform: scale(1.03);
}


.map_pharmacie {
  height: 80%;
  width: 90%;
}

.red-dot {
  height: 20px;
  width: 20px;
  background-color: #CC0000;
  border-radius: 50%;
  position: absolute;
  top: -5px;
  right: -5px;
}

a {
  color: lightgray;
  text-decoration: none;
}

.aucune-ordo {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 70%;
}

.aucune-ordo img {
  height: 90px;
  width: auto;
}

.aucune-ordo h4 {
  text-align: center;
}

.modal {
  z-index: 2;
  position: fixed;
  width: 50%;
  height: 70%;
  border-radius: 20px;
  border: 1px solid #888;
  background-color: #fefefe;
}

.modal-content {
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  width: 80%;
  height: 80%;
}

.liste_pharma {
  overflow-y: scroll;
  height: 90%;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.icone_pharma {
  height: 40px;
  width: auto;
}

.pharma_item {
  background-color: #E7E7E7;
  padding: 20px;
  border-radius: 10px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;

}

.titre_pharma {
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
}


.bloc_info_pharma {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.bouton_acces {
  padding: 20px 10px;
  background-color: #86C093;
  font-size: 14px;
  color: white;
  border-radius: 7px;
}

.bouton_acces:hover {
  cursor: pointer;
  background-color: #77AB83;
}

::-webkit-scrollbar {
  width: 12px;
}

/* Track */
::-webkit-scrollbar-track {

  background: #E1E1E1;

  border-radius: 5px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #9f9f9f;
  border-radius: 5px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #888;
}

.close {
  color: #aaaaaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}


@media screen and (max-width: 1300px) {
  .container {
    width: 1035px;
  }
}</style>