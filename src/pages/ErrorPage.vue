<template>
  <div class="main">
    <div class="fof">
      <h1>Error 404</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ErrorPage'
}
</script>

<style scoped>
*{
  transition: all 0.6s;
}

body{
  font-family: 'Lato', sans-serif;
  color: #888;
  margin: 0;
}

.main{
  display: table;
  text-align: center;
}

.fof{
  display: table-cell;
  vertical-align: middle;
}

.fof h1{
  font-size: 50px;
  display: inline-block;
  padding-right: 12px;
  animation: type .5s alternate infinite;
}

@keyframes type{
  from{box-shadow: inset -3px 0 0 #888;}
  to{box-shadow: inset -3px 0 0 transparent;}
}
</style>
