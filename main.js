var app = new Vue({

    el: '#root',

    data: {

        // Array di cose da fare
        arrayTodo: [],

        // Stringa dove scriverò la todo da stampare
        todoText: ''
    },

    methods: {

        //Cancello il singolo todo
        deleteTodo: function (index) {
            this.arrayTodo.splice(index, 1);
        },

        //Stampo la todo
        printTodo: function (todoText) {

            if (todoText == '') {
                alert("Non puoi inserire una todo vuota")

            } else if (this.checkNewTodo(todoText)) {
                alert("Hai già inserito questa todo")

            } else {
                let newTodo = {
                    textTodo: todoText,
                    done: false
                }
                // Creo un nuovo oggetto todo
                this.arrayTodo.push(newTodo);
            }

            this.todoText = ''

        },
        // Controllo se ho già inserito quasta todo
        checkNewTodo(todoText) {

            if (this.arrayTodo.some(e => e.textTodo == todoText)) {
                return true;
            } else {
                return false;
            }

        },
        // Sottolineo la todo al click e la tolgo ad un secondo click
        doneTodo(index) {

            if (this.arrayTodo[index].done == false) {
                this.arrayTodo[index].done = true
            } else {
                this.arrayTodo[index].done = false;
            }

        },


    }
})