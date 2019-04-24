<template>
  <div class="container">
    <h4>TestA</h4>
    <img src="http://pic1.win4000.com/wallpaper/9/5450ae2fdef8a.jpg" style="width: 200px;height: 200px">
    <div>{{content}}</div>

  </div>
</template>

<script>
  export default {
    props: {
      content:String
    }
  }
</script>
