const logMiddleware = (store) => (next) => (action) => {
  console.log('Je recois laction : ', action);
  next(action);
};

export default logMiddleware;
