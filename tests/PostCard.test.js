/* eslint-disable no-undef */
// declared globally with "globals: true" in "vite.config.ts"
// import { describe, test, vi, expect } from 'vitest'
import { mount } from '@vue/test-utils'

import PostCard from '@/components/PostCard.vue'
import { expect } from 'vitest'

describe('Post Card Component', () => {
  test('created posts render correctly', () => {
    const title = 'Test Post'
    const body = 'test post body...'
    const wrapper = mount(PostCard, {
      props: { title, body }
    })

    expect(wrapper.html()).toMatchSnapshot()
  })
})