import { boot } from 'quasar/wrappers'
import VuePlugin from 'quasar-ui-quasar-hello-world'

export default boot(({ app }) => {
  app.use(VuePlugin)
})
