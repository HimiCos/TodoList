<template>
    <li id="todoItem">
      <label>
        <input 
          type="checkbox"
          :checked="todos.isDone"
          @change="handleCheck(todos.id)"
        >
        <!-- 如下代碼也能實現功能，但是不推薦 -->
        <!-- <input type="checkbox" v-model="todos.isDone"> -->
        <span>{{ todos.title }}</span>
      </label>
      <button class="hover-button" @click="delTodo(todos.id)">刪除當前任務</button>
    </li>
</template>

<script>
  export default {
    name: "TodoItem",
    props: ['todos', 'checkTodo', 'deleteTodo'],
    methods: {
      handleCheck(id) {
        // 通知App組件將當前任務的狀態改變
        this.checkTodo (id)
      },
      delTodo(id){
        // 通知App組件刪除當前任務
        if(confirm('確定刪除當前任務嗎？')){
          this.deleteTodo (id)
        }
      }
    }
  }
</script>

<style scoped>
  #todoItem{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 47px;
    border-block-start: 1px solid #ccc;
    padding: 5px 10px
  }
  #todoItem:hover {
    background-color: #eee;
  }
  label {
    display: flex;
    align-items: center; 
  }
  #todoItem .hover-button {
    display: none;
  }
  #todoItem:hover .hover-button{
    display: inline-block;
  }
</style>