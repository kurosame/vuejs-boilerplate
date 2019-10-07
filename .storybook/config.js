import { configure } from '@storybook/vue'

const req = require.context('../stories', true, /.stories.ts$/)
const loadStories = () => {
  req.keys().forEach(f => req(f))
}

configure(loadStories, module)
