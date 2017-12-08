<template>
    <div id="app">
        <todo-list v-bind:todos="todos"></todo-list>
        <create-todo v-on:create-todo="createTodo"></create-todo>
    </div>
</template>
<script>
    import TodoList from './components/TodoList'
    import CreateTodo from './components/CreateTodo'

    export default {
      components: {
        TodoList,
        CreateTodo
      },
      mounted: function () {
        this.getTodos()
      },
      methods: {
        createTodo (todo) {
          this.todos.push(todo)
        },
        getTodos () {
          fetch('http://localhost:3000/tasks')
            .then(response => {
              response.json().then(data => {
                this.todos = data
              })
            })
        }
      },
      data () {
        var responseData = {
          todos: []
        }
        return responseData
      }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
