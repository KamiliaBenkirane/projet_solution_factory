import {createRouter, createWebHistory} from 'vue-router'
import Login from '../components/Login/Login.vue';
import ChooseRole from '../components/Register/ChooseRole.vue';
import RegisterUser from '../components/Register/RegisterUser.vue';
import RegisterMedecin from '../components/Register/RegisterMedecin.vue';
import RegisterPharmacie from '../components/Register/RegisterPharmacie.vue';
import HomeUser from '../components/UserPage/HomeUser.vue';
import HomeMedecin from '../components/MedecinPage/HomeMedecin.vue';
import HomePharmacie from '../components/PharmaciePage/HomePharmacie.vue';
import Prescription from '../components/MedecinPage/Prescription.vue';
import HistoriqueMedecin from '../components/MedecinPage/HistoriqueOrdoMedecin.vue';
import HistoriquePatient from '../components/UserPage/HistoriqueOrdoPatient.vue';

const routes = [
    {path: '/', component: Login},
    {path: '/chooseRole', component: ChooseRole},
    {path: '/registerUser', component: RegisterUser},
    {path: '/registerMedecin', component: RegisterMedecin},
    {path: '/registerPharmacie', component: RegisterPharmacie},
    {path: '/homeUser', component: HomeUser},
    {path: '/homeMedecin', component: HomeMedecin},
    {path: '/homePharmacie', component: HomePharmacie},
    { path: '/prescription/:numSecu', name: 'prescription', component: Prescription },
    {path: '/historiqueMedecin', component: HistoriqueMedecin},
    {path: '/historiquePatient', component: HistoriquePatient},
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

























