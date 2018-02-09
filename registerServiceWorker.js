export default () => {
  if (process.env.NODE_ENV === 'production'
    && typeof navigator !== 'undefined'
    && 'serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js');
  }
}
