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
        <span v-show="!todos.isEdit">{{  todos.title  }}</span>
        <input
          type="text"
          v-show="todos.isEdit"
          :value="todos.title"
          @blur="blurTodo(todos,$event)"
          ref="inputTitle"
        >
      </label>
      <div>
        <button v-show="!todos.isEdit" class="hover-button edit" @click="editTodo(todos)">編輯</button>
        <button class="hover-button" @click="delTodo(todos.id)">刪除</button>
      </div>
    </li>
</template>

<script>
  import PubSub from 'pubsub-js'
  export default {
    name: "TodoItem",
    props: ['todos'],
    methods: {
      handleCheck(id) {
        // 通知App組件將當前任務的狀態改變
        PubSub.publish('checkTodo',id)
      },
      delTodo(id){
        // 通知App組件刪除當前任務
        if(confirm('確定刪除當前任務嗎？')){
          PubSub.publish('deleteTodo',id)
        }
      },
      // 編輯當前任務
      editTodo(todos){
        if(todos.hasOwnProperty('isEdit')){
          todos.isEdit = true
        }else{
          this.$set(todos,'isEdit',true)
        }
        this.$nextTick(() => {
          this.$refs.inputTitle.focus()
        })
      },
      // 失去焦點回調（真正執行修改邏輯）
      blurTodo(todos,e){
        todos.isEdit = false
        if(!e.target.value.trim()) return alert('輸入不能為空')
        this.$bus.$emit('editTodoName',todos.id, e.target.value)
      }
    },
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
  .edit{
    background-color: rgb(59, 107, 220);
    margin-right: 10px;
  }
  #todoItem .hover-button {
    display: none;
  }
  #todoItem:hover .hover-button{
    display: inline-block;
  }
</style>