import { mount, flushPromises } from '@vue/test-utils'
import End from '@/views/examples/api-example/end.vue'
import { describe, it, expect, vi } from 'vitest'

describe('API Example', () => {
  it('renders loading state then posts', async () => {
    global.fetch = vi.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve([{ id: 1, title: 'Test Post 1', body: 'Body of test post 1' }]),
      }),
    )

    const wrapper = mount(End)

    // Should show loading first
    // expect(wrapper.text()).toContain('Loading posts...')

    // Wait for fetch to resolve
    await flushPromises()

    // Should now show post content
    expect(wrapper.text()).toContain('Test Post 1')
  })

  it('handles API errors gracefully', async () => {
    global.fetch = vi.fn(() =>
      Promise.resolve({
        ok: false,
      }),
    )

    const wrapper = mount(End)

    await flushPromises()

    expect(wrapper.text()).toContain('Failed to fetch posts')
  })
})
