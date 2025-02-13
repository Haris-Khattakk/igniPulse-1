import { defineConfig } from 'vite'

export default defineConfig({
  root: './',  // Root directory ko set kar rahe hain
  build: {
    outDir: 'dist',  // Output directory jahan build files generate honge
    rollupOptions: {
      input: './src/index.html'  // Agar index.html src folder mein hai
    }
  },
})
