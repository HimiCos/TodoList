<template>
  <div id="todoHeader">
    <input
      type="text"
      placeholder="請輸入你的任務名稱，按回車鍵確認"
      v-model.lazy="title"
      @keyup.enter="add"
    />
  </div>
</template>

<script>
import { nanoid } from "nanoid";
export default {
  name: "TodoHeader",
  data() {
    return {
      title: "",
    };
  },
  methods: {
    add() {
      // 校驗數據的合法性
      if (!this.title.trim()) return;
      // 將用戶的輸入包裝成一個todo對象
      const todoObj = {id: nanoid(), title: this.title, isDone: false,};
      // 通知App將todoObj這個對象追加到todos中
      this.$emit("addTodo", todoObj);
      // 清空輸入
      this.title = ''
    },
  },
};
</script>

<style scoped>
#todoHeader input {
  width: 500px;
  height: 40px;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 0px 10px;
  font-size: 16px;
}
</style>
