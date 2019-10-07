import { setConsoleOptions } from '@storybook/addon-console'
import { configure } from '@storybook/vue'

setConsoleOptions({ panelExclude: [] })

const req = require.context('../stories', true, /.stories.ts$/)
const loadStories = () => {
  req.keys().forEach(f => req(f))
}

configure(loadStories, module)
