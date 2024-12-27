import { createSelector } from "@ngrx/store";

export const selectCounter = (state: {
    counter: {
        currentCount: number;
    };
}) => state.counter.currentCount;

export const selectCountDouble = createSelector(
    selectCounter,
    (count) => count * 2
)

// also you can create selector taking part of the state, example:
// export const selectUserWithPermissions = createSelector(
//   selectUser,
//   selectPermissions,
//   (user, permissions) => ({
//     ...user,
//     permissions
//   })
// );


// basic sintax
// export const selectCounter = createSelector(
//   (state: {
//       counter: {
//           currentCount: number;
//       };
//   }) => state.counter.currentCount,
//   (count) => count
// )
