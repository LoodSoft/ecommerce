const log =
  () =>
  (req, res, next) => {
    // Write log here
    return next();
  };

const logger = { log };
module.exports = logger;
