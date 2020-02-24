import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/vue'
import Child from '@/components/Child.vue'

storiesOf('Child', module).add('default', () => ({
  components: { Child },
  template: '<child :count="11" @add-count="action"></child>',
  methods: { action: action('add-count clicked') }
}))
