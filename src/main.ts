import { createApp } from 'vue'
import './style.css'
import { createPinia } from 'pinia'
import App from './App.vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import About from './components/About.vue'
import Home from './components/Home.vue'
// import { createMetaManager } from 'vue-meta'

// Pinia setup
const pinia = createPinia()


// Router 
// 1. Define route components.
// These can be imported from other files
// const Home = { template: '<div>Home</div>' }
// const About = { template: '<div>About</div>' }
// 2. Define some routes
const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
  ]
// 3. Create the router instance and pass the `routes` option
const router = createRouter({
// 4. Provide the history implementation to use. We are using the hash history for simplicity here.
history: createWebHashHistory(),
routes, // short for `routes: routes`
})

const app = createApp(App)
app.use(pinia)
// Make sure to _use_ the router instance to make the
// whole app router-aware.
app.use(router)

// VueMeta (net yet ready)
// const metaManager = createMetaManager({})
// app.use(metaManager)

app.mount('#app')
