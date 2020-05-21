<template>
  <div id="app">
      <div id="trac-nghiem">
          <div id="cau-hoi">
              <div v-for = "(question,quesIndex) in questions" :key = "quesIndex" v-show = "curr == quesIndex">
                  <div>{{question.content}}</div>
                  <div v-for = "(ans,ansIndex) in question.answers" :key = "ansIndex" @click = "question.selected = ans.id" :class = "{selected: question.selected == ans.id}">
                      {{ans.content}}
                  </div>
                  <div>
                      <button :disabled = "curr < 1" @click = "curr--">Prev</button>
                      <button :disabled = "curr == questions.length - 1" @click = "curr++">Next</button>
                  </div>
              </div>
          </div>
          <button @click = "curr = questions.length + 1">Nộp bài</button>
          <button @click = "curr = 0; questions.map( ques => ques.selected = null)">Làm lại</button>
          <div id="ket-qua" v-show = "curr == questions.length + 1">
              Ket qua: {{ questions.filter( ques => ques.correct == ques.selected).length }}
          </div>
      </div>
  </div>
</template>

<script>
export default { 
    data()
    {
        return{
            curr:0,
            questions:[
                {
                    content: "Bạn có thích lập trình không?",
                    answers:[
                        {id:1, content:"Có"},
                        {id:2, content:"Không"}
                    ],
                    correct:1,
                    selected:null
                },
                {
                    content: "Học lập trình cần những gì?",
                    answers:[
                        {id:1, content: "Cuốc xẻng"},
                        {id:2, content: "Máy tính"},
                        {id:3, content: "Búa của Thor"},
                        {id:4, content: "Chổi quét nhà"}
                    ],
                    correct:2,
                    selected:null
                },
                {
                    content: "Để làm được lập trình cần những yếu tố gì?",
                    answers:[
                        {id:1, content: "Kiên nhẫn"},
                        {id:2, content: "Nản chí"},
                        {id:3, content: "Thực hành nhiều"},
                        {id:4, content: "Đáp án A và C"}
                    ],
                    correct:4,
                    selected:null
                }
            ]
        }
    } 
}
</script>

<style>
*{
  margin:0px;
  padding:0px;
  box-sizing:border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;  
}
#trac-nghiem{
  width:500px;
  margin:20px auto;
  border:1px solid #414141;
  padding:20px;
}
#cau-hoi > div > div:nth-child(1){
  font-size:18px;
  margin-bottom:15px;
}
.selected{
  background-color:rgb(49, 167, 214);
}
</style>
