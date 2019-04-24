<template>
  <div id="app">
    <!--<router-view/>-->
    <h1>动态组件</h1>
    <el-input v-model="input" placeholder="输入的内容将会显示到新添加的组件上" style="width: 300px"></el-input>
    <p></p>
    <el-button @click="addTest('TestA')">增加组件A</el-button>
    <el-button @click="addTest('TestB')">增加组件B</el-button>
    <el-button @click="addTest('TestC')">增加组件C</el-button>
    <el-button @click="removeLast">移除最后一个</el-button>
    <el-button @click="removeFirst">移除最顶上一个</el-button>
    <div style="overflow-y: auto;height: 80%">
      <DynamicComponent v-for="(item, index) in componentsArray"
                        :key="index"
                        :componentName="item.component"
                        :componentProps="item.props"></DynamicComponent>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'app',
    data() {
      return {
        input:'',
        componentsArray: [
          {
            component: 'TestA',
            props: {
              content: '这是一条自定义的内容'
            }
          }
        ]
      }
    },
    mounted() {
    },
    methods: {
      addTest(name) {
        let comp = {
          component: name,
          props: {
            content: this.input
          }
        }
        this.componentsArray.push(comp)
      },
      removeLast() {
        this.componentsArray.splice(this.componentsArray.length - 1, 1)
      },
      removeFirst() {
        this.componentsArray.splice(0, 1)
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    height: 100%;
    width: 100%;
  }

  .container{
    border-radius: 5px;
    background: #b0f3f9;
    width: 30%;
    color: #42bcff;
    margin:0 auto
  }

  body {
    overflow-y: hidden;
  }
</style>
