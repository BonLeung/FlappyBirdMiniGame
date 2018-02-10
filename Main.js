// 初始化整个游戏的精灵，作为游戏开始的入口
import ResourceLoader from './js/base/ResourceLoader.js'
import Director from './js/Director.js';
import Background from './js/runtime/Background.js';
import DataStore from './js/base/DataStore.js';
import Land from './js/runtime/Land.js';
import Birds from './js/player/Birds.js';
import StartButton from './js/player/StartButton.js';
import Score from './js/player/Score.js';

export default class Main {
  constructor() {
    this.canvas = wx.createCanvas()
    this.ctx = this.canvas.getContext('2d')
    this.dataStore = DataStore.getInstance()
    this.director = Director.getInstance()
    const loader = ResourceLoader.create()
    loader.onLoaded(map => this.onResourceFirstLoaded(map))
  }

  onResourceFirstLoaded(map) {
    this.dataStore.ctx = this.ctx
    this.dataStore.res = map
    this.dataStore.canvas = this.canvas
    this.init()
  }

  init() {
    // 首先重置游戏结束的标志
    this.director.isGameOver = false

    this.dataStore.put('background', Background)
                  .put('land', Land)
                  .put('birds', Birds)
                  .put('startButton', StartButton)
                  .put('score', Score)
                  .put('pencils', [])

    this.registerEvent()

    // 创建铅笔要在游戏逻辑运行之
    this.director.createPencil()
    this.director.run()
  }

  registerEvent() {
    // this.canvas.addEventListener('touchstart', e => {
    //   e.preventDefault()
    //   if (this.director.isGameOver) {
    //     console.log('游戏开始')
    //     this.init()
    //   } else {
    //     this.director.birdsEvent()
    //   }
    // })

    wx.onTouchStart(() => {
      if (this.director.isGameOver) {
        console.log('游戏开始')
        this.init()
      } else {
        this.director.birdsEvent()
      }
    })
  }
}
