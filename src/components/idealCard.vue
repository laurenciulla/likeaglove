<template>
  <div class="idealCard">
    <img :src="image">
    <h2>{{ item }}</h2>
  </div>
  
</template>

<script>
export default {
  name: 'idealCard',
  props: {
    msg: String
  },
  data(){
    return {
      item: 'Top',
      image:'./assets/likeaglovelogo.png'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{
  box-sizing: border-box;
}
.idealCard{
  border:#CDE9FD 3px solid;
  border-radius: 5px;
  width:90%;
  height:130px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width:300px;
}
img{
  width:100%;
  height:100px;
}
h2{
  font-size:18px;
  font-weight: 400;
  background-color:#CDE9FD;
  padding:10px 15px 8px 15px;
  margin:0;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
