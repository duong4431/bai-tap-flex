<template>
  <div id="app">    
      <div id = "todolist">          
          <h2>TO DO LIST</h2>
          <div class="taskbar">
            <div>
              <div @click = "curr = 1" :class = "{selected : curr == 1}">Tất cả</div>
              <div @click = "curr = 2" :class = "{selected : curr == 2}">Chưa làm</div>
              <div @click = "curr = 3" :class = "{selected : curr == 3}">Đã làm</div> 
            </div>
            <div>
              <div @click = "showModal = !showModal" class="addTask"></div>             
            </div>                            
          </div>
          <div class = "tab-content" v-show="curr == 1">
            <div class = "task" v-for="(task,taskIndex) in tasks" :key="taskIndex">
                <span class = "check" @click = "task.finish = !task.finish" :class = "{selected : task.finish == true}"></span>
                <input type = "text" v-model="task.content" :disabled = "task.finish" placeholder="Nhập công việc muốn làm">
                <span class = "remove" @click = "tasks.splice(tasks.indexOf(task), 1)"></span>
            </div>
          </div>
          <div class="tab-content" v-show="curr == 2">
            <div class = "task" v-for="(task,taskIndex) in tasks.filter( x => x.finish == false)" :key="taskIndex">
                <span class = "check" @click = "task.finish = !task.finish" :class = "{selected : task.finish == true}"></span>
                <input type = "text" v-model="task.content" :disabled = "task.finish" placeholder="Nhập công việc muốn làm">
                <span class = "remove" @click = "tasks.splice(tasks.indexOf(task), 1)"></span>
            </div>
          </div>
          <div class="tab-content" v-show="curr == 3">
            <div class = "task" v-for="(task,taskIndex) in tasks.filter ( x => x.finish == true)" :key="taskIndex">
                <span class = "check" @click = "task.finish = !task.finish" :class = "{selected : task.finish == true}"></span>
                <input type = "text" v-model="task.content" :disabled = "task.finish" placeholder="Nhập công việc muốn làm">
                <span class = "remove" @click = "tasks.splice(tasks.indexOf(task), 1)"></span>
            </div>
          </div>
      </div>
      <div class="modal" v-show = "showModal">
          <div class="modal-body">
            <div class="modal-title">
              <div>
                  <h4>Thêm mới công việc</h4>
              </div>
              <div>
                  <span @click = "showModal = !showModal"></span>
              </div>                      
            </div>
            <div class="modal-content">
                <input type="text" v-model="task.content" v-on:keyup.enter = "tasks.unshift({content: task.content, finish: false}); showModal = !showModal; task.content = ''" placeholder="Nhập công việc muốn thêm vào tasklist">
            </div>
            <div class="modal-button">
                <button class="stand" @click = "tasks.unshift({content: task.content, finish: false}); showModal = !showModal; task.content = ''">Ok</button>
                <button class="stand cancel" @click = "showModal = !showModal">Cancel</button>
            </div>
          </div>
      </div>
  </div>
</template>

<script>

export default {
  data(){
    return{
        showModal: false,
        curr: 1,
        task: {content: "", finish: false},
        tasks: [
          {content: "Làm bài tập todolist", finish: false}
        ]
    }
  }
}
</script>

<style>
*{
  margin:0px;
  padding:0px;
  outline: none; 
  box-sizing: border-box; 
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;  
  color: #2c3e50;      
}
#todolist{
  width:500px;  
  margin:30px auto;
}
#todolist > h2 {
  margin-bottom:15px;
  text-align:center;
}
.taskbar{
  display:flex;
  width:100%;
  background-color:rgb(133, 190, 255);
  justify-content: space-between;
}
.taskbar > div{
  display:flex;        
}
.taskbar > div > div {      
  min-width:100px;
  text-align: center;
  padding:6px 0px;  
  cursor: pointer;
}
.taskbar > div > div.selected{
  background-color:rgb(51, 143, 248);
  color:white;
}
.tab-content{
  padding:20px 30px;
  border:1px solid #d8d8d8;
  border-top:none;
  max-height: 400px;
  overflow-y:scroll;
}
.tab-content > div > input{
  border:1px solid #cacaca;
  border-radius:3px;
  padding:5px 10px;
  width:100%;
}
.task{
  margin-bottom:10px;
}
.check{
  position:relative;
  cursor: pointer;  
}
.check::before,
.check.selected::after{
  content:' ';
  position:absolute;
  border: 2px solid #8b8b8b;
}
.check::before{  
  width: 12px;
  height: 12px;
  left:-22px;
  top:0px;
}
.check.selected::after{ 
  width: 5px;
  height: 8px;
  left: -18px;
  top: 1px;
  transform: rotate(45deg);
  border-top: none;
  border-left: 0;
}
.check.selected + input{
  text-decoration: line-through;  
}
.remove {
  position:relative; 
  display:inline; 
  cursor: pointer;  
}
.remove::after{
  content:'\0000D7';
  position:absolute;
  right:-25px;
  top:-5px;
  width:20px;
  height:20px;
  font-size:22px;
  color:#8b8b8b;
}
.addTask{
  position:relative;  
  cursor: pointer;
}
.addTask::before{
  content:'\00002B';  
  position:absolute;
  width:20px;
  height:20px;
  line-height:20px;
  font-size:24px;
  background-color:rgb(14, 134, 30);
  border-radius:50%;
  color:white;
  right:5px;
  top:calc(50% - 10px);
}
.addTask:hover::before
{
  background-color:rgb(6, 114, 6);
}
.modal{
  position:fixed;
  width:100%;
  height:100%;
  background-color:rgba(0,0,0,0.6);
  left:0px;
  top:0px;
}
.modal-body{
  z-index:9999;
  width:400px;
  margin:100px auto;
  background-color:white;
  border-radius:3px;
}
.modal-title{
  display:flex;
  justify-content:space-between;
  height:35px;
  align-items: center;
  border-bottom:1px solid #ebebeb;
}
.modal-title > div > span {
  width:20px;
  height:20px;  
  position:relative; 
  display:inline-block; 
  cursor: pointer;  
}
.modal-title > div > span::after{
  content:'\0000D7';
  position:absolute;
  right:0px;
  top:0px;
  width:20px;
  height:20px;
  font-size:22px;
}
.modal-title > div > h4{
  padding:0px 15px;
  font-weight:600;
}
.modal-content {
  padding:20px;
}
.modal-content > input[type=text]
{
  width:100%;
  line-height:28px;
  border:1px solid #cacaca;
  border-radius:3px;
  padding-left:10px;
}
.modal-button{
  padding:20px;
  padding-top:0px;
  text-align: right;
}
.modal-button > button {
  border:none;
  padding: 7px 15px;
  margin-left:15px;
  display:inline-block;
  color:white;
  cursor: pointer;
  border-radius:3px;
}
.stand{
  background-color:rgb(1, 106, 204);
}
.cancel{
  background-color:rgb(236, 90, 90);
}
/* Let's get this party started */
::-webkit-scrollbar {
    width: 6px;
}
 
/* Track */
::-webkit-scrollbar-track {
}
 
/* Handle */
::-webkit-scrollbar-thumb {
    background: rgba(172, 172, 172, 0.8); 
}
::-webkit-scrollbar-thumb:window-inactive {
	background:  rgba(172, 172, 172, 0.8); 
}
</style>
