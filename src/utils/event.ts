import EventEmitter from 'event-emitter'

// 创建一个事件发射器实例
const emitter = EventEmitter()

// 监听事件
emitter.on('eventName', (message: string) => {
  console.log('Event received:', message)
})

// 触发事件
emitter.emit('eventName', 'Hello, world!')
export default emitter
