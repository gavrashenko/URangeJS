class URangeJS {
  constructor (from = 0, to = 10) {
    this.from = from
    this.to = to
    this.diap = [[from, to]]
  }

  get () {
    if (this.diap.length === 0) {
      throw new Error('Range riched to the end')
    }

    // debugger
    const index = parseInt(Math.random() * this.diap.length)
    const range = this.diap.splice(index, 1)
    const [from, to] = range[0]
    const randNum = parseInt(Math.random() * (to - from + 1) + from)

    if (from !== randNum) {
      this.diap.push([from, randNum - 1])
    }

    if (to !== randNum) {
      this.diap.push([randNum + 1, to])
    }

    return randNum
  }

  [Symbol.iterator] () {
    const self = this

    return {
      next () {
        try {
          return {
            value: self.get(),
            done: false
          }
        } catch (e) {
          return {
            value: undefined,
            done: true
          }
        }
      }
    }
  }
}

export default URangeJS
