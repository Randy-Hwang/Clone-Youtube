export const localsMiddleware = (req, res, next) => {
  // local로 어떤 값을 준다면 pug 파일도 읽을 수 있음.
  res.locals.loggedIn = Boolean(req.locals.loggedIn);
  res.locals.siteName = "Wetube";
  res.locals.loggedInUser = req.session.user;
};
