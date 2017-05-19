export default function createPlugin(logrocket, sanitizer = (action => action)) {
  return store => {
    store.subscribe(mutation => {
      const sanitized = sanitizer(mutation);

      if (sanitized) {
        logrocket.log('mutation', sanitized);
      }
    });
  };
}
