<template>
    <div id="app">
        <todo-list v-bind:todos="todos"></todo-list>
    </div>
</template>
<script>
    import TodoList from './components/TodoList'

    export default {
      components: {
        TodoList
      },
      mounted: function () {
        this.getTodos()
      },
      methods: {
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
