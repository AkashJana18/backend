const asyncHandler = (requestHandler) => {
  return (req, res, next) => {
    Promise
    .resolve(requestHandler(req, res, next))
    .catch((err) => next(err));
  };
};

export { asyncHandler };

// const asyncHandler = () => {}; Basic arrow function
// const asyncHandler = (fn) => {() => {}}; Higher order function accepting a function as paramter
// const asyncHandler = (fn) => async () => { // the outer curly braces are not required
//     try {
//         await fn(req, res, next)
//     } catch (error) {
//         res.status(err.code || 500).json({
//             success: false,
//             message: err.message
//         })

//     }
// };
