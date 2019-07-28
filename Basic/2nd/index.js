var app = new Vue({

    el: '#app',

    data: {
        tem: 0,

    },

    methods: {
//Event 
        inc: function() {
            this.tem++;
        },

        dec: function() {
            this.tem--;
        },
//Keybord Event 
        keypress: function() {
            console.log("key pressed");
        }
    },


})