import { defineStore } from 'pinia'
import axios from 'axios'

export const useSessionStore = defineStore('session', {
    state: () => ({
        token : '',
        user : {
            id : null,
            mail : '',
            prenom : '',
            nom : '',
            rue : '',
            num_rue : null,
            code_postal : null,
            ville : '',
            numero : null,
            id_medecinT : null,
            prenom_medecinT : '',
            nom_medecinT : '',
            mail_medecinT : '',
            numero_medecinT : null,
            nom_pharma : '',
            mail_pharma : '',
            num_pharma : null,
            id_pharma : null,

        },
    }),
    actions : {

        setId(i){
            this.user.id = i
        },
        setIdPharma(i){
            this.user.id_pharma = i
        },
        setNom(n){
            this.user.nom = n
        },
        setPrenom(a){
            this.user.prenom = a
        },
        setMail(a){
            this.user.adresse = a
        },
        setNumRue(a){
            this.user.num_rue = a
        },
        setRue(a){
            this.user.rue = a
        },
        setVille(a){
            this.user.ville = a
        },
        setCodePostal(a){
            this.user.code_postal = a
        },
        setNumero(n){
            this.user.numero = n
        },
        setIdMedecinT(i){
            this.user.id_medecinT = i
        },
        setPrenomMedecinT(i){
            this.user.prenom_medecinT = i
        },
        setNomMedecinT(i){
            this.user.nom_medecinT = i
        },
        setNumeroMedecinT(i){
            this.user.numero_medecinT = i
        },
        setMailMedecinT(i){
            this.user.mail_medecinT = i
        },
        setNomPharma(i){
            this.user.nom_pharma = i
        },
        setMailPharma(i){
            this.user.mail_pharma = i
        },
        setNumPharma(i){
            this.user.num_pharma = i
        },



        getCodePostal(){
            return this.user.code_postal
        },

        getMail(){
            return this.user.mail
        },
        getNom(){
            return this.user.nom
        },
        getNumero(){
            return this.user.numero
        },
        getId(){
            return this.user.id
        },
        getIdPharma(){
            return this.user.id_pharma
        },
        getPrenom(){
            return this.user.prenom
        },
        getRue(){
            return this.user.rue
        },
        getNumRue(){
            return this.user.num_rue
        },
        getVille(){
            return this.user.ville
        },
        getIdMedecinT(){
            return this.user.id_medecinT
        },
        getNomMedecinT(){
            return this.user.nom_medecinT
        },
        getPrenomMedecinT(){
            return this.user.prenom_medecinT
        },
        getMailMedecinT(){
            return this.user.mail_medecinT
        },
        getNumeroMedecinT(){
            return this.user.numero_medecinT
        },
        getNomPharma(){
            return this.user.nom_pharma
        },
        getMailPharma(){
            return this.user.mail_pharma
        },
        getNumPharma(){
            return this.user.num_pharma
        },
    },
    persist : true
    // state
    // getters
    // actions
})