export default function handleResponseFromAPI(promise) {
  return promise
    .then(() => {
      // When the promise resolves, return an object with status 200 and body 'success'
      return { status: 200, body: 'success' };
    })
    .catch(() => {
      // When the promise rejects, return an empty Error object
      return new Error();
    })
    .finally(() => {
      // Log this message for every resolution or rejection
      console.log('Got a response from the API');
    });
}
