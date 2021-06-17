'use strict';

module.exports.foo = async (event) => {

  return {
    statusCode: 200,
    body: { message: "bar" }
  };
};
