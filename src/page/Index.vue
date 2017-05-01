<template>
  <div class="home">
    <header>
      <h1>{{title}}</h1>
      <ul>
        <li v-for='l in lists'>
          <router-link :to='l'>{{l}}</router-link>
        </li>
      </ul>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      title: 'learn Canvas api',
      lists: ['LEVEL1', 'LEVEL2', 'LEVEL3', 'LEVEL4', 'LEVEL5', 'LEVEL6', 'LEVEL7', 'LEVEL8']
    }
  }
}
</script>

<style scoped>
.home {
  height: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
}
header {
  height: 100px;
}
h1{
  margin: 0;
  padding: 0;
}
ul {
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
}
ul li {
  margin: 10px;
  padding: 5px 10px;
  font-size: 20px;
  list-style: none;
  background-color: #ccc;
}
a {
  text-decoration: none;
  color: #000;
  font-weight: bold;
}
</style>
