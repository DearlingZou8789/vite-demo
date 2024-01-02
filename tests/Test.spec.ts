import { shallowMount } from '@vue/test-utils'
import TestVue from '../src/views/Test.vue'

describe('Test.vue', () => {
  test('mounted Test.vue', async () => {
    const wrapper = shallowMount(TestVue)
    expect(wrapper.html()).toContain('Unit Test Page')
    expect(wrapper.html()).toContain('count is: 0')
    await wrapper.find('button').trigger('click')
    expect(wrapper.html()).toContain('count is: 1')
  })
})
