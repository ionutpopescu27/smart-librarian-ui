import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// IMPORTANT: if you publish to https://<user>.github.io/<repo>/, set base to '/<repo>/'
// If you use a user site (https://<user>.github.io), keep base: '/'
export default defineConfig({
    plugins: [react()],
    base: '/smart-librarian-ui/', // <-- change to your repo name or '/' for a user site
})
