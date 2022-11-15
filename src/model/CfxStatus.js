const CfxAPI = require('../modules/CfxAPI');
const validator = require('./_validator');

/**
 *
 * Class representing all data from the Cfx.re status page
 * @class
 * @constructor
 * @public
 */
class CfxStatus {
  /**
   *
   * Constructor for class
   * @param {Object} summary summary of the Cfx.re current status
   */
  constructor(summary) {
    validator('CfxStatus', 'summary', summary, ['status']);
    validator('CfxStatus.summary', 'status', summary.status, ['description', 'indicator']);

    /**
     *
     * description of the Cfx.re current status
     * @type {string}
     * @public
     */
    this.description = summary.status['description'];

    /**
     *
     * indicator of the Cfx.re current status
     * @type {string}
     * @public
     */
    this.level = summary.status['indicator'];
  }

  /**
   *
   * check if all components are operational
   * @type {boolean}
   */
  get everythingOk() {
    return this.level === 'none';
  }

  /**
   *
   * Get all Cfx.re components status
   * @return {Promise<Array<StatusComponent>>}
   */
  async fetchComponents() {
    const response = await CfxAPI.get(CfxAPI.EndPoints.CFX_STATUS_COMPONENTS);
    if (response.status !== 200) {
      throw new Error('Cannot retrieve Cfx.re components status');
    }
    return response.data['components'];
  }
}

module.exports = CfxStatus;
