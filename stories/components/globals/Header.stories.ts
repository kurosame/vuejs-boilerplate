import { storiesOf } from '@storybook/vue'
import HeaderView from '@/components/globals/Header.vue'

storiesOf('Header', module).add('default', () => ({
  components: { HeaderView },
  template: '<header-view></header-view>'
}))
