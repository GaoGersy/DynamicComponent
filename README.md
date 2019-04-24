# DynamicComponent
千言万语敌不过一张动图
![动态组件.gif](https://upload-images.jianshu.io/upload_images/2673171-160899c98b73aaeb.gif?imageMogr2/auto-orient/strip)
都是有身份的程序猿，以码会友：
```
const DynamicComponent = {
  props: {
    componentName: {
      type: String,
      required: true
    },
    componentProps: {
      type: Object,
      default: () => {
      }
    },
    styles: {
      type: Object,
      default: () => {
      }
    }
  },
  render(createElem) {
    return createElem(this.componentName, {
      props: this.componentProps
    })
  }
}
export default DynamicComponent;

```
使用的示例：
```
<DynamicComponent v-for="(item, index) in componentsArray"
                        :key="index"
                        :componentName="item.component"
                        :componentProps="item.props"></DynamicComponent>
```
就酱子。动态的往数据里面放数据即可