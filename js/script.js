const { createApp } = Vue;

createApp({
    data(){
        return{
            message: 'Ciao Vue!',
            image: 'img/vue.png'
        }
    }
}).mount('#app')