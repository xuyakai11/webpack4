export function square(x=2) {
  return x * x;
}

export function cube(x=10) {
  return x * x * x;
}
class MathTool {
  constructor(x){
    this.x = x;
  }

  add(x) {
    return x + x;
  }
}
export default new MathTool()