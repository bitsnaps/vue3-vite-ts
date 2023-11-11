import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import About from '@/components/About.vue'

describe('About', () => {
  it('renders properly', () => {
    const wrapper = mount(About, /*{ props: { msg: 'About' } }*/)
    expect(wrapper.text()).toContain('About')
  })
})