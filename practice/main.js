var app = new Vue({
    el: '#app',
    data: {
        name: '',
        todo: '',
        list: [
            { id: 1, name: 'test1', todo: 'todo1' },
            { id: 2, name: 'test2', todo: 'todo2' },
            { id: 3, name: 'test3', todo: 'todo3' }
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
                todo: this.todo,
            })
        },
        doRemove: function(index) {
            this.list.splice(index, 1)
        },
        doUpdate: function(index) {
            this.$set(this.list, index, { 
                id: index + 1,
                name: this.name,
                todo: this.todo,
            })
        }
    }
})