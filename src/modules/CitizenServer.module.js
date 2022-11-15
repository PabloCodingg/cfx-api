const CfxAPI = require('./CfxAPI');
const CitizenServer = require('../model/CitizenServer');

class CitizenServerModule {
  static self = null;

  static get() {
    if (this.self === null) {
      this.self = new CitizenServerModule();
    }
    return this.self;
  }

  async retrieve(id) {
    try {
      const response = await CfxAPI.get(CfxAPI.CFX_MASTERLIST + id);
      if (response.status !== 200) {
        throw new Error('Server not found or internal error occurred');
      }
      return new CitizenServer(response.data);
    } catch (error) {
      console.log('Error: ' + error);
    }
  }
}

module.exports = CitizenServerModule;
