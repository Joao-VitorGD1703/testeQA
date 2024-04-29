import './assets/base.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from '@/routes/index'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
// import './middlewares/interceptor'
// import 'video.js/dist/video-js.css'

const app = createApp(App)

app.use(router)

/**
 * --------------- GLOBAL FILTERS --------------- 
 */
// app.config.globalProperties.$filters = {
//   formatDate(value, locale = 'pt-BR', options = { day: '2-digit', month: '2-digit', year: 'numeric', timeZone: 'UTC' }) {
//     const date = new Date(value)
//     if (date == 'Invalid Date') return ''
//     // console.log(date)
//     const formattedDate = new Intl.DateTimeFormat(locale, options).format(date)
//     // console.log("🚀 ~ file: main.js:23 ~ formatDate ~ formattedDate:", formattedDate)
//     return formattedDate
//   },
//   formatMonthAndYear(value, locale = 'pt-BR', options = { month: '2-digit', year: 'numeric', timeZone: 'UTC' }) {
//     const date = new Date(value)
//     if (date == 'Invalid Date') return ''
//     // console.log(date)
//     const formattedDate = new Intl.DateTimeFormat(locale, options).format(date)
//     // console.log("🚀 ~ file: main.js:23 ~ formatDate ~ formattedDate:", formattedDate)
//     return formattedDate
//   },
//   formatDateAndTime(value, locale = 'pt-BR', options = { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false}) {
//     const date = new Date(value)
//     if (date == 'Invalid Date') return ''
//     const formattedDate = new Intl.DateTimeFormat(locale, options).format(date)
//     return formattedDate
//   },
//   formatPhone(value) {
//     if (!value) return ''
//     if (value.length !== 10 && value.length !== 11) return value
//     const text = new String(value)
//     const firstPart = text.slice(0, 2)
//     const secondPart = text.length === 10 ? text.slice(2, 6) : text.slice(2, 7)
//     const thirdPart = text.length === 10 ? text.slice(6, 10) : text.slice(7, 11)

//     return `(${firstPart}) ${secondPart}-${thirdPart}`
//   },
// }

app.mount('#app')