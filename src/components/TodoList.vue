<template>
    <ul id="todoList" v-show="todos.length > 0">
      <TodoItem
        v-for="t in todos"
        :key="t.id"
        :todos="t"
      />
    </ul>
</template>

<script>
  import TodoItem from './TodoItem';
  export default {
    name: "TodoList",
    components: {TodoItem},
    props: ['todos']
  }
</script>

<style scoped>
  #todoList{
    width: 520px;
    margin: 10px;
    padding: 0px;
    min-height: 57px;
    border: 1px solid #ccc;
    border-radius: 10px;
    overflow: hidden;
  }
  #todoList :nth-child(1) {
    border: none;
  }
</style>