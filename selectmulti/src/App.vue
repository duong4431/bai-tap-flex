<template>
  <div id="app">
    <div id="multichoice">
        <h2>Chọn môn học</h2>
        <div>
            <div>
              <div class = "item" :class = "{selected: choice.selected == true}" v-for = "(choice,choiceIndex) in choices.filter( x => x.parent == 1)" :key = "choiceIndex" @click = "choice.selected = !choice.selected">
                  {{choice.content}}
              </div>
            </div>
            <div>
              <button
               @click = "choices.filter( choice => choice.selected == true).map( x => {x.parent = 2; x.selected = false})">&gt;&gt;</button>
              <button @click = "choices.filter( choice => choice.selected == true).map( x => {x.parent = 1; x.selected = false})">&lt;&lt;</button>
            </div>
            <div>
              <div class = "item" :class = "{selected: choice.selected == true}" v-for = "(choice,choiceIndex) in choices.filter( x => x.parent == 2)" :key = "choiceIndex" @click = "choice.selected = !choice.selected">
                  {{choice.content}}
              </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>


export default {
  data(){
    return {
        choices:[
            {content: 'html', selected: null, parent : 1},
            {content: 'css', selected: null, parent : 1},
            {content: 'js', selected: null, parent : 1},
            {content: 'vuejs', selected: null, parent : 1},
            {content: 'php', selected: null, parent : 1},
            {content: 'laravel', selected: null, parent : 1},
            {content: 'wordpress', selected: null, parent : 1},
            {content: 'java', selected: null, parent : 1},
        ]
    }
  }
}
</script>

<style>
*{
  margin:0px;
  padding:0px;
  box-sizing: border-box;
  outline: none;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#multichoice{
  width:500px;
  margin:100px auto;
  border:1px solid #cacaca;
  padding:10px;
  background-color:rgb(112, 186, 255);  
}
#multichoice > h2 {
  margin-bottom:15px;
  text-align: center;
}
#multichoice > div {
  display:flex;
  width:100%;
  justify-content:space-between;
  height:300px;
}
#multichoice > div > div:nth-child(1),
#multichoice > div > div:nth-child(3)
{
  width:45%;
  border: 1px solid #cacaca;
  padding:10px 15px;  
  background-color:white;
}
#multichoice > div > div:nth-child(2)
{
  width:10%;
  display:flex;
  align-items: center;
  justify-content: center; 
  flex-direction: column; 
}
#multichoice > div > div:nth-child(2) > button{
  display:block; 
  width:60%; 
  margin-bottom:10px;
  background-color:rgb(8, 116, 35);
  border:none;
  padding:5px 5px;
  cursor: pointer;
  color:white;
}
.item{
  line-height:28px;
  margin-bottom:2px;
  padding-left:5px;
  cursor: pointer;
}
.item.selected{
  background-color:rgb(174, 223, 255);
}
</style>
