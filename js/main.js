
var app = new Vue({ // oggetto, la VAR la inseriamo nel div relativo
  el: '#app', // ELEMENTO id da inserire del DIV per richiamare data e method
  data: {
    newTodo : {
      text: '',
      completato: false
    },
    todos : [
      {
        text: 'pane',
        completato: true
      },
      {
        text: 'pasta',
        completato: false
      },
      {
        text: 'formaggio',
        completato: false
      },
      {
        text: 'latte',
        completato: false
      },
      {
        text: 'uova',
        completato: false
      }
    ]
  },
  methods: { // inseriamo nel ns funzioni
    addTodo() { // aggiungo un elemento
      this.todos.push(this.newTodo); // aggiungo nell'Array todos, la var newTodos che genero con l'INPUT

      this.newTodo = ""; // dopo il PUSH cancello il contenuto dell'INPUT (simile a EMPTY in JQUERY)
    },
    remuveTodo(index, todo) { // rimuovo un elemento, inserisco attributi in ingresso che in indicano quale elemento cancellare
      this.todos.splice(index, 1); // cancella UNO elementi dall'INDICE in ingresso
    },
    toggleCompletato(index) { // rimuovo un elemento, inserisco attributi in ingresso che in indicano quale elemento cancellare
      this.todos[index].completato = !this.todos[index].completato; // cancella UNO elementi dall'INDICE in ingresso
    }
  }
})
