import { sayHello } from './sayHello'

test('.sayHello', () => {
  expect(sayHello('luke')).toEqual('Hello Luke!')
})
