<template>
    <li class="task" v-bind:data-id="todo.id">
        <span class="check checked" v-show="todo.done" v-on:click="completeTodo(todo)"><img src="../../static/img/tick.svg" alt="Check tick" class="tick"></span>
        <span class="check" v-show="!todo.done" v-on:click="completeTodo(todo)"></span>
        {{todo.task}}
        <span class="bin" v-on:click="deleteTodo(todo)"><img src="../../static/img/bin.svg" alt="Bin image"></span>
    </li>
</template>

<script type="text/javascript">
    export default {
      props: ['todo'],
      data () {
        return {
          isEditing: false
        }
      },
      mounted: function () {
        this.$nextTick(function () {
          this.changeStatus()
        })
      },
      methods: {
        changeStatus () {
          document.querySelectorAll('.checked').forEach(function (item) {
            if (item.style.display === 'none') {
              item.parentNode.classList.remove('done')
            } else {
              item.parentNode.classList.add('done')
            }
          })
        },
        deleteTodo (todo) {
          this.$emit('delete-todo', todo)
          fetch('http://localhost:3000/tasks/' + todo.id, {
            method: 'delete',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            }
          }).then(response => {
            response.json().then(data => {
              console.log('removed')
            })
          })
        },
        completeTodo (todo) {
          this.$emit('complete-todo', todo)
          fetch('http://localhost:3000/tasks/' + todo.id, {
            method: 'put',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(todo)
          }).then(response => {
            response.json().then(data => {
              this.changeStatus()
              console.log('done status changed')
            })
          })
        }
      }
    }
</script>

<style scoped>

</style>