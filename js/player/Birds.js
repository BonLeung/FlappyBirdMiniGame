import Sprite from "../base/Sprite.js";
import DataStore from "../base/DataStore.js";

/**
 * 小鸟类
*/
export default class Birds extends Sprite {
  constructor() {
    const image = Sprite.getImage('birds')
    super(
      image,
      0,
      0,
      image.width,
      image.height,
      0,
      0,
      image.width,
      image.height
    )

    // 小鸟的三种状态需要一个数组去存储
    // 小鸟的宽是34，高是24，上下边距是10，左右边距是9
    this.clippingX = [
      9,
      9 + 34 + 18,
      9 + 34 + 18 + 34 + 18
    ]
    this.clippingY = [10, 10, 10]
    this.clippingWidth = [34, 34, 34]
    this.clippingHeight = [24, 24, 24]
    const birdX = DataStore.getInstance().canvas.width / 4
    this.birdsX = [birdX, birdX, birdX]
    const birdY = DataStore.getInstance().canvas.height / 2
    this.birdsY = [birdY, birdY, birdY]
    const birdWidth = 34
    this.birdsWidth = [birdWidth, birdWidth, birdWidth]
    const birdHeight = 24
    this.birdsHeight = [birdHeight, birdHeight, birdHeight]
    this.y = [birdY, birdY, birdY]
    this.index = 0
    this.count = 0
    this.time = 0
  }

  draw() {
    const speed = 0.2
    this.count += speed
    if (this.index >= 2) {
      this.count = 0
    }
    // 减速器的作用
    this.index = Math.floor(this.count)

    // 模拟重力加速度
    const g = 0.98 / 2.5
    // 向上移动一点偏移
    const offsetUp = 30
    // 小鸟得位移
    const offsetY = (g * this.time * (this.time - offsetUp)) / 2

    for (let i = 0; i <= 2; i++) {
      this.birdsY[i] = this.y[i] + offsetY
    }
    this.time++

    super.draw(
      this.img,
      this.clippingX[this.index],
      this.clippingY[this.index],
      this.birdsWidth[this.index],
      this.birdsHeight[this.index],
      this.birdsX[this.index],
      this.birdsY[this.index],
      this.birdsWidth[this.index],
      this.birdsHeight[this.index]
    )
  }
}
