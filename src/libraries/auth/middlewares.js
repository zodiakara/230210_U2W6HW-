import createHttpError from "http-errors";

export const hostOnlyMiddleware = (req, res, next) => {
  if (req.user.role === "Host") {
    next();
  } else {
    next(
      createHttpError(
        403,
        "Forbidden Access! Only hosts can access this information"
      )
    );
  }
};
export const adminOnlyMiddleware = (req, res, next) => {
  if (req.user.role === "Admin") {
    next();
  } else {
    next(
      createHttpError(
        403,
        "Forbidden Access! Only admin can access this information"
      )
    );
  }
};
export const adminOrHostMiddleware = (req, res, next) => {
  if (req.user.role === "Admin" || "Host") {
    next();
  } else {
    next(
      createHttpError(
        403,
        "Forbidden Access! Only admin can access this information"
      )
    );
  }
};
