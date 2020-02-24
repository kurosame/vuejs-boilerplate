import { storiesOf } from '@storybook/vue'
import Parent from '@/containers/Parent.vue'
import store from '@/vuex/store'

storiesOf('Parent', module).add('default', () => ({
  components: { Parent },
  template: '<parent></parent>',
  store
}))
