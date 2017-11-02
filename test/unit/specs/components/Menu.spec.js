import Vue from 'vue'
import Vuex from 'vuex'
import Menu from '../../../../src/components/Menu/Menu'

describe('Menu.vue', () => {
  it('v-show to action buttons is true', () => {
    const Ctor = Vue.extend(Menu)
    const vm = new Ctor({
      props: {
        changeAllSelect: {
          default: () => {}
        },
        allSelect: {
          default: true
        },
        selectedCreativeCount: {
          default: 1
        }
      }
    }).$mount()

    expect(vm.$el.querySelector('.menu .action-buttons').getAttribute('style'))
      .to.be.null
  })

  it('v-show to action buttons is false', () => {
    const Ctor = Vue.extend(Menu)
    const vm = new Ctor({
      props: {
        changeAllSelect: {
          default: () => {}
        },
        allSelect: {
          default: false
        }
      }
    }).$mount()

    expect(vm.$el.querySelector('.menu .action-buttons').getAttribute('style'))
      .to.equal('display: none;')
  })
})
