const CfxAPI = require('./CfxAPI');
const CfxStatus = require('../model/CfxStatus');

class CfxStatusModule {
  static self = null;

  static get() {
    if (this.self === null) {
      this.self = new CfxStatusModule();
    }
    return this.self;
  }

  async retrieve() {
    try {
      const response = await CfxAPI.get(CfxAPI.CFX_STATUS_SUMMARY);
      if (response.status !== 200) {
        throw new Error('Error while retrieving Cfx.re status');
      }
      return new CfxStatus(response.data);
    } catch (error) {
      console.log('Error: ' + error);
    }
  }
}

module.exports = CfxStatusModule;
