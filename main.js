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

            if (todoText != '') {
                let newTodo = {
                    textTodo: todoText,
                    done: false
                }
                // Creo un nuovo oggetto todo
                this.arrayTodo.push(newTodo);
            }

        },

        // Sottolineo la todo al click e la tolgo ad un secondo click
        doneTodo(index){

            if( this.arrayTodo[index].done == false ){
                this.arrayTodo[index].done = true
            }else{
                this.arrayTodo[index].done = false;
            }

        }
    }
})