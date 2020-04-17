var settle = require('../core/settle');
var createError = require('../core/createError');
var buildFullPath = require('../core/buildFullPath');
var buildURL = require('../helpers/buildURL');


module.exports = function uniAppAdapter(config) {
  return new Promise(function uniAppAdapterDispatch(resolve, reject) {
    var fullPath = buildFullPath(config.baseURL, config.url);
    var request = {
      url: buildURL(fullPath, config.params, config.paramsSerializer),
      data: config.data,
      header: config.headers,
      method: config.method.toUpperCase(),
      timeout: config.timeout,
      responseType: config.responseType
    };
    request.success = function success(res) {
      var response = {
        status: res.statusCode,
        statusText: res.statusMessage || "",
        headers: request.headers,
        config: config,
        request: request,
        data: res.data
      };
      settle(resolve, reject, response);
    };
    request.fail = function fail(error) {
      reject(createError('uni request error', config, 0, request, error));
    };
    uni.request(request);
  });
};
