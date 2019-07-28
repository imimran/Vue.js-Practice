var app = new Vue({

    el: '#app',

    data: {

        value: 500,
        price: 10,
    },

    methods: {


    },
})

var demo = new Vue({

    el: '#demo',

    data: {
        value: 100,

    },

    methods: {
        cost: function() {
            return app.price;
        }

    },
})