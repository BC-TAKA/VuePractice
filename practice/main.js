var app = new Vue({
    el: '#app',
    data: {
        name: 'TestPlayer',
        list: [
            { id: 1, name: 'test1' },
            { id: 2, name: 'test2' },
            { id: 3, name: 'test3' }
        ]
    },
    methods: {
        doAdd: function() {
            var max = this.list.reduce(function(a, b) {
                return a > b.id ? a : b.id
            }, 0)
            this.list.push({
                id: max + 1,
                name: this.name,
            })
        }
    }
})