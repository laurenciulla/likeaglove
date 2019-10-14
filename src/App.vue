<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#nav{
  display: none;
}
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
  min-width: 180px;
}
.cardContainer{
  display: flex;
  flex-direction: row;
  overflow-x: auto;
}
.cardContainer::-webkit-scrollbar {
  display: none;
}
.left{
  width:50%;
}
.right{
  width: 50%;
  margin-right: 2%;
}
.bodyGuide{
  width: 90%;
  margin-top:-15px;
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
h3{
  font-weight: 400;
  font-size:13px;
  position: relative;
}
.Height{
  top:0px;
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
  max-width: 100vw;
}
.app{
  overflow-x: hidden;
}
</style>
