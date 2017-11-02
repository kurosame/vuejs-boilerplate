import Vue from 'vue'
import Vuex from 'vuex'
import Creative from '../../../../src/components/Creative/Creative'

Vue.use(Vuex)

const Ctor = Vue.extend(Creative)
const vm = new Ctor({
  props: {
    changeCreativeSelected: {
      default: () => { return () => {} }
    },
    creative: {
      default: () => {
        return {
          creative_name: 'テストクリエイティブ名'
        }
      }
    },
    selectedIds: {
      default: () => { return {} }
    }
  }
}).$mount()

describe('Creative.vue', () => {
  it('creative_name is binding text', () => {
    expect(vm.$el.querySelector('.creative .creative-name').textContent)
      .to.equal('テストクリエイティブ名')
  })
})
