import { mount } from '@vue/test-utils'
import HelloWorld from '../src/components/HelloWorld.vue'

test('Hello World Component render the correct text', () => {
  const wrapper = mount(HelloWorld, { props: { msg: 'abc' } })
  expect(wrapper.html()).toContain('Check out')
})
