import { createApp } from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

const app = createApp({})

// Use Vuetify with your app instance
app.use(Vuetify)

export default new Vuetify({})
