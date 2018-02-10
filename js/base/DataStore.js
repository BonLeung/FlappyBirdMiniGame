// 变量缓缓存器，方便我们在不同的类中访问和修改变量
export default class DataStore {
  constructor() {
    this.map = new Map()
  }

  static getInstance() {
    if (!DataStore.instance) {
      DataStore.instance = new DataStore()
    }
    return DataStore.instance
  }

  put(key, val) {
    if (typeof val === 'function') {
      val = new val()
    }
    this.map.set(key, val)
    return this
  }

  get(key) {
    return this.map.get(key)
  }

  destroy() {
    this.map.clear()
  }
}
