const httpStatus = {
  400: ({ request, response, error }) =>
    response
      .status(400)
      .send({ error: `Bad request on ${request.path}`, message: error }),
  500: ({ request, response, error }) =>
    response
      .status(500)
      .send({ error: `Internal error ${request.path}`, message: error }),
};

module.exports = ({ code, request, response, error }) => {
  if (httpStatus[code]) return httpStatus[code]({ request, response, error });
  console.log(error);
  return httpStatus[500]({ request, response, error });
};
