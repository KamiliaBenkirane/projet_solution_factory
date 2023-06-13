import {createRouter, createWebHistory} from 'vue-router'
import Login from '../components/Login/Login.vue';
import ChooseRole from '../components/Register/ChooseRole';
import RegisterUser from '../components/Register/RegisterUser';
import RegisterMedecin from '../components/Register/RegisterMedecin';
import RegisterPharmacie from '../components/Register/RegisterPharmacie';
import HomeUser from '../components/UserPage/HomeUser';
import HomeMedecin from '../components/MedecinPage/HomeMedecin';
import HomePharmacie from '../components/PharmaciePage/HomePharmacie';
import Prescription from '../components/Prescription';

const routes = [
    {path: '/', component: Login},
    {path: '/chooseRole', component: ChooseRole},
    {path: '/registerUser', component: RegisterUser},
    {path: '/registerMedecin', component: RegisterMedecin},
    {path: '/registerPharmacie', component: RegisterPharmacie},
    {path: '/homeUser', component: HomeUser},
    {path: '/homeMedecin', component: HomeMedecin},
    {path: '/homePharmacie', component: HomePharmacie},
    {path: '/prescription', component: Prescription}
]


const router = new createRouter({
    history: createWebHistory(),
    routes

})

export default router