<template>
    <div class="todo_app">
        <create-todo v-on:create-todo="createTodo"></create-todo>
        <div class="content_area">
            <todo v-on:delete-todo="deleteTodo" v-for="todo in todos" v-bind:todo="todo" :key="todo.id" v-on:complete-todo="completeTodo" :todo.sync="todo"></todo>
        </div>
    </div>
</template>

<script type="text/javascript">
    import Todo from './Todo'
    import CreateTodo from './CreateTodo'

    export default {
      props: ['todos'],
      components: {
        Todo,
        CreateTodo
      },
      methods: {
        createTodo (todo) {
          this.todos.unshift(todo)
        },
        deleteTodo (todo) {
          const todoIndex = this.todos.indexOf(todo)
          this.todos.splice(todoIndex, 1)
        },
        completeTodo (todo) {
          const todoIndex = this.todos.indexOf(todo)
          if (this.todos[todoIndex].done) {
            this.todos[todoIndex].done = false
          } else {
            this.todos[todoIndex].done = true
          }
        }
      }
    }
</script>

<style scoped>

</style>