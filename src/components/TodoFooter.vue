<template>
  <div id="todoFooter" v-show="total">
    <div class="total">
      <input type="checkbox" v-model="isAll">
      <span>已完成: {{ doneTodo }}  / 全部: {{ total }}</span>
    </div>
    <button @click="delDoneTodo">清除已完成的任務</button>
  </div>
</template>

<script>
  export default {
    name: "TodoFooter",
    props: ['deleteDoneTodo', 'todos', 'selectAllTodo'],
    methods: {
      delDoneTodo(){
        // 通知App組件刪除所有任務
        if(confirm('確定刪除已完成的任務嗎？')){
          this.deleteDoneTodo ()
        }
      },
      // selAllTodo(){
      //   // 通知App組件全選/全不選
      //   this.selectAllTodo()
      // }
    },
    computed: {
      total(){
        return this.todos.length
      },
      // 已完成的任務數量
      doneTodo(){
        // return this.todos.filter((todo) => todo.isDone).length

        // pre:0 即初始值 current 即 todos 的每個對象
        // return this.todos.reduce((pre,current)=>{
        //   return pre + (current.isDone ? 1 : 0)
        // },0)
        return this.todos.reduce((pre,todos)=> pre + (todos.isDone ? 1 : 0),0)
      },
      isAll:{
        get(){
          return this.doneTodo === this.total && this.total > 0
        },
        set(value){
          // 通知App組件全選/全不選
          this.selectAllTodo(value)
        }
      }
    }
  }
</script>

<style scoped>
  #todoFooter{
    width: 520px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 5px;
  }
  .total
  {
    display: flex;
    align-items: center;
  }
</style>