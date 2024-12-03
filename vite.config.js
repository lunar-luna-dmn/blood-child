export default {
  server: {
    open: true
  },
  build: {
    rollupOptions: {
      // external: ['three'],
      input: {
        main: './index.html',
        unborn: './unborn/index.html'
      }
    }
  },
  optimizeDeps: {
    include: ['three']
  }
}