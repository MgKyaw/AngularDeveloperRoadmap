// async function getAllOrNone() {
//   const outcome = await Promise.allSettled([promiseA, promiseB]);
//   outcome.forEach((result) => {
//     if (result.status === 'fulfilled') {
//       console.log('Fulfilled:', result.value);
//     } else {
//       console.log('Rejected:', result.reason);
//     }
//   });
// }