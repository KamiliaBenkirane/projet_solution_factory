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
        },
    }),
    actions : {

        setId(i){
            this.user.id = i
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
        getCodePostal(){
            return this.user.code_postal
        },
    },
    persist : true
    // state
    // getters
    // actions
})