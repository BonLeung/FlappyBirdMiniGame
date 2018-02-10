import Sprite from "../base/Sprite.js";
import DataStore from "../base/DataStore.js";

export default class Background extends Sprite {
  constructor() {
    const image = Background.getImage('background')
    super(image, 0, 0, image.width, image.height, 0, 0, DataStore.getInstance().canvas.width, DataStore.getInstance().canvas.height)
  }
}
