import { mount } from '@vue/test-utils'
import NotificationToast from '@/components/NotificationToast.vue'
import { describe, expect, test } from 'vitest'

describe('Notification component', () => {
  test('renders the correct style for error', () => {
    const status = 'error'
    const wrapper = mount(NotificationToast, {
      props: { status }
    })
    
    // expect(wrapper.classes()).toEqual(expect.arrayContaining(['notification--error']))
    
    // Snapshot Testing
    // expect(wrapper.html()).toMatchSnapshot()

    // Inline Snapshot (A snippet snapshot code will be generated here into your testing file.)
    expect(wrapper.html()).toMatchInlineSnapshot(`
      "<div role=\\"alert\\" class=\\"notification notification--error\\">
        <p class=\\"notification__text\\"></p><button data-testid=\\"close-notification\\" title=\\"close\\" class=\\"notification__button\\"> ✕ </button>
      </div>"
    `)
  })

  test('renders correct style for success', () => {
    const status = 'success'
    const wrapper = mount(NotificationToast, {
      props: { status }
    })
    expect(wrapper.classes()).toEqual(expect.arrayContaining(['notification--success']))
  })

  test('renders correct style for info', () => {
    const status = 'info'
    const wrapper = mount(NotificationToast, {
      props: { status }
    })
    expect(wrapper.classes()).toEqual(expect.arrayContaining(['notification--info']))
  })

  test('slides up when message is empty', () => {
    const message = ''
    const wrapper = mount(NotificationToast, {
      props: { message }
    })
    expect(wrapper.classes('notification--slide')).toBe(false)
  })

  test('emits event when close button is clicked', async () => {
    const wrapper = mount(NotificationToast, {
      data() {
        return {
          clicked: false
        }
      }
    })
    // find() is a query selector by #ID or .className
    const closeButton = wrapper.find('button')
    // trigger() will execute an event and returns a Promise
    await closeButton.trigger('click')
    // check if the component returns a list of events
    expect(wrapper.emitted())
    // check for a specific event
    expect(wrapper.emitted()).toHaveProperty('clear-notification')
  })

  test('renders correct message to viewer', () => {
    const message = 'Something happened, try again'
    const wrapper = mount(NotificationToast, {
      props: { message }
    })
    // Here we used find() on 'p' tag, it's better to find by #ID or .className 
    expect(wrapper.find('p').text()).toBe(message)
  })
})