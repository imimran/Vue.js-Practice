var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello World',
        name: 'Imran',
        price: 1000,
        path: '/home/imran/Pictures/1.jpg',
        link: 'http://www.google.com',
    },

    methods: {
        discount: function(d) {
            cost = this.price - d;
            return cost;
        }
    }

})