/*
Vue.component('mycomponent', {
    template: '<P> This is my component {{ name }} + {{ temp }} <button v-on:click="changeTem()"> Click Hare </button> </p>',
    data: function() {
        return {
            name: 'Imran',
            temp: 100
        }
    },

    methods: {
        changeTem: function() {
            this.temp = this.temp + 10;
        }
    }


})*/


var app = new Vue({

    el: '#app',

    data: {

        years: 2,
        rate: 0.75,
        intr: ''
    },

    methods: {
        interest: function() {
            this.intr = this.$refs.principal.value * this.years * this.rate;
        }

    },
})