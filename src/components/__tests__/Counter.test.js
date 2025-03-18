import { mount } from '@vue/test-utils'
import Counter from '@/components/Counter.vue'
import { describe, it, expect } from 'vitest'

describe('Counter.vue', () => {
  it('renders the counter and buttons', () => {
    const wrapper = mount(Counter)

    expect(wrapper.text()).toContain('You clicked 0 times')
    expect(wrapper.find('button').exists()).toBe(true)
  })

  it('resets the counter when "Reset" button is clicked', async () => {
    const wrapper = mount(Counter)

    const incrementButton = wrapper.find('button:nth-child(1)')
    const resetButton = wrapper.find('button:nth-child(2)')

    await incrementButton.trigger('click')
    expect(wrapper.text()).toContain('You clicked 1 times')

    await resetButton.trigger('click')
    expect(wrapper.text()).toContain('You clicked 0 times')
  })

  it('increments the counter when "Increment" button is clicked', async () => {
    const wrapper = mount(Counter)

    const incrementButton = wrapper.find('button:nth-child(1)')
    await incrementButton.trigger('click')

    expect(wrapper.text()).toContain('You clicked 1 times')
  })

  it('increments the counter when button is clicked', async () => {
    const wrapper = mount(Counter)

    const incrementButton = wrapper.find('button:nth-child(1)')
    await incrementButton.trigger('click')

    expect(wrapper.text()).toContain('You clicked 1 times')
  })
})
