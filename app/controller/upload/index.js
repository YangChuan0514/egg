'use strict';
const Controller = require('egg').Controller;
// 文件存储
const qiniu = require('qiniu');
class upLoadController extends Controller {
  async upload() {
    const { ctx } = this;
    const accessKey = 'YPm6eKSIsRrvDwxNAIR8Wt9jrG2IdTKILhlX2ju0';
    const secretKey = 'btdn9EwLJoDWoVYYUi5bAyNM810cOkMIXATJncME';
    const mac = new qiniu.auth.digest.Mac(accessKey, secretKey);
    const options = {
      scope: 'vuebs',
      expires: 7200,
      returnBody: '{"key":"$(key)","hash":"$(etag)","fsize":$(fsize),"bucket":"$(bucket)","name":"$(x:name)"}',
    };
    const putPolicy = new qiniu.rs.PutPolicy(options);
    const uploadToken = putPolicy.uploadToken(mac);
    ctx.body = uploadToken;
  }
}

module.exports = upLoadController;
