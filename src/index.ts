import './index.css'
import HMR from '@roxi/routify/hmr'
import App from './App.svelte'

const app = HMR(App, { target: document.body }, 'routify-app') as App

export default app
