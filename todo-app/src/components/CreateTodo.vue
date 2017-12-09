<template>
    <div class="add_task">
        <h2>To Do List</h2>
        <p><span class="add_task_content">Add a Task +</span></p>
        <div class="add_task_form">
            <form class="todo_form">
                <input type="text" v-model="titleText" ref="title" defaultValue="" placeholder="Todo item" class="input">
                <button type="submit" class="submit" v-on:click="sendForm()">Add</button>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
      methods: {
        sendForm () {
          if (this.titleText.length > 0) {
            const title = this.titleText
            const todo = {
              task: title,
              done: false
            }
            this.$emit('create-todo', todo)
            this.newTodoText = ''

            fetch('http://localhost:3000/tasks', {
              method: 'post',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(todo)
            }).then(response => {
              response.json().then(data => {
                todo.id = data.insertId
                console.log('added')
              })
            })
          }
          this.isCreating = false
        }
      },
      data () {
        return {
          titleText: '',
          projectText: '',
          isCreating: false
        }
      }
    }
</script>

<style scoped>

</style>