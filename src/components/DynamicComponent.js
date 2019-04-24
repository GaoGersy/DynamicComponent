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
