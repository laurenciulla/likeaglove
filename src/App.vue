<template>
  <div id="app">
    <nav>
      <img class="logo" alt="Like a Glove logo" src="./assets/likeaglovelogo.png">
    </nav>
    <div id="measurements">
      <div class="left">
        <profileCard class="comp"></profileCard>
        <h1 class="comp">Measurements</h1>
        <ul>
          <li v-for="value, name in object">
            {{ name }}: {{ value }} 
            <span v-if="inches"> in</span>
            <span v-else> cm</span>
          </li>
        </ul>
      </div>
      <div class="right">
        <!-- <img src="./assets/body-guide.png"> -->
      </div>
      
    </div>

    <div id="idealPieces">
      <h1 class="comp">Ideal Pieces</h1>
      <div class="cardContainer">
        <idealCard class="card"></idealCard>
        <idealCard class="card"></idealCard>
      </div>
    </div>

    <div id="favItems">
      <h1>Your Favorite Items</h1>
    </div>
    
      
  
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import profileCard from './components/profileCard.vue'
import idealCard from './components/idealCard.vue'

export default {
  name: 'app',
  components: {
    // HelloWorld
    profileCard,
    idealCard
  },
  data(){
    return{
        object: {
          Height: 67,
          Chest: 32,
          Waist: 28,
          Hip: 34,
          LegLength: 28
      },
      inches: true
    }
  }

}
</script>

<style>
#measurements{
  margin-top:10%;
  display: flex;
  flex-direction: row;
}
.left, #idealPieces, #favItems{
  margin-left: 10%;
}
.card{
  margin-top:15px;
  margin-right:25px;
}
.cardContainer{
  display: flex;
  flex-direction: row;
}
.right{
  width: 50%;
}
h1{
  font-size:20px;
  margin:20px 0px 0px 0px;
}
nav{
  background-color:#CDE9FD;
  width:100%;
  display: flex;
  justify-content: center;
}
ul{
  list-style-type: none;
  line-height: 30px;
  margin:5px 0px 0px 0px;
  padding:0;

}
#app {
  font-family: 'Almarai', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  text-align: left;
  font-size:18px;
}
.logo{
  width:40%;
}
body{
  margin:0;
}
</style>
