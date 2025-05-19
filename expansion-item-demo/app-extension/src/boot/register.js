import { boot } from 'quasar/wrappers'
import VuePlugin from 'quasar-ui-expansion-item-demo'

export default boot(({ app }) => {
  app.use(VuePlugin)
})
