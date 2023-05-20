<template>
  <div id="todoBody">
    <TodoHeader :addTodo="addTodo"/>
    <TodoList :todos="todos" :checkTodo="checkTodo" :deleteTodo="deleteTodo"/>
    <TodoFooter :deleteDoneTodo="deleteDoneTodo" :todos="todos" :selectAllTodo="selectAllTodo"/>
  </div>
</template>

<script>
import TodoHeader from "./components/TodoHeader";
import TodoList from "./components/TodoList";
import TodoFooter from "./components/TodoFooter";

export default {
  name: "App",
  components: {
    TodoHeader,
    TodoList,
    TodoFooter,
  },
  methods: {
    // 添加一個todo
    addTodo(todoObj){
      this.todos.unshift(todoObj)
    },
    // 勾選or取消勾選一個todo
    checkTodo (id) {
      this.todos.forEach((item) => {
        if (item.id === id) {
          item.isDone = !item.isDone;
        }
      });
    },
    // 刪除一個todo
    deleteTodo (id) {
      this.todos = this.todos.filter((todo) => todo.id !== id);
    },
    // 刪除已完成的todo
    deleteDoneTodo () {
      this.todos = this.todos.filter((todo) => !todo.isDone);
    },
    // 銓選/取消銓選所有todo
    selectAllTodo (value) {
      this.todos.forEach((todo) => {
        todo.isDone = value
      });
    },
  },
  data() {
    return {
      todos:JSON.parse(localStorage.getItem('todos')) || []
    };
  },
  watch: {
    todos:{
      handler(){
        localStorage.setItem('todos', JSON.stringify(this.todos))
      },
      deep: true
    }
  },
};
</script>
<style>
#todoBody {
  width: 555px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 10px;
  margin: 20px auto;
}
button{
  border: 1px solid #ccc;
  background-color: #de3e3ee6;
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
}
</style>
