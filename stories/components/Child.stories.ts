import { storiesOf } from '@storybook/vue'
import Child from '@/components/Child.vue'
import store from '@/vuex/store'

storiesOf('Child', module).add('default', () => ({
  components: { Child },
  template: '<child></child>',
  store
}))
