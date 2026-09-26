// @defer (on <trigger>; when <condition>; prefetch on <trigger>; prefetch when <condition>) {
//   <!-- deferred template fragment -->
//   <calendar-cmp />
// } @placeholder (minimum? <duration>) {
//   <!-- placeholder template fragment -->
//   <p>Placeholder</p>
// } @loading (minimum? <duration>; after? <duration>) {
//   <!-- loading template fragment -->
//   <img alt="loading image" src="loading.gif" />
// } @error {
//   <!-- error template fragment -->
//   <p>An loading error occurred</p>
// }