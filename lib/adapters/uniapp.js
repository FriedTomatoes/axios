var settle = require('../core/settle');
var createError =  require('../core/createError');
var buildFullPath = require('../core/buildFullPath');
var buildURL = require('../helpers/buildURL');


module.exports = function uniAppAdapter(config) {
  return new Promise((resolve, reject) => {
    var fullPath = buildFullPath(config.baseURL, config.url);
    var request = {
      url: buildURL(fullPath, config.params, config.paramsSerializer),
      data: config.data,
      header: config.header,
      method: config.method.toUpperCase(),
      timeout: config.timeout,
      responseType: config.responseType
    };
    uni.request({
      ...request,
      success(response) {
        settle(resolve, reject, response);
      },
      fail(error) {
        reject(createError('uni request error', config, 0, request, error));
      }
    });
  });
};
