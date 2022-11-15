const validator = require('./_validator');

/**
 *
 * Class representing an Atlassian StatusPage component
 * @class
 * @constructor
 * @public
 */
class StatusComponent {
  /**
   *
   * Constructor for class
   * @param {Object} data data from API
   */
  constructor(data) {
    validator('StatusComponent', 'data', data, [
      'id',
      'name',
      'status',
      'createdAt',
      'updatedAt',
      'position',
      'description',
      'showcase',
      'startDate',
      'groupId',
      'pageId',
      'group',
      'onlyShowIfDegraded',
    ]);
    /**
     *
     * component id
     * @type {string}
     * @public
     * @readonly
    */
    this.id = data.id;

    /**
     *
     * component name
     * @type {string}
     * @public
     * @readonly
     */
    this.name = data.name;

    /**
     *
     * component status
     * @type {string}
     * @public
     * @readonly
     */
    this.status = data.status;

    /**
     *
     * component date of creation
     * @type {string}
     * @public
     * @readonly
     */
    this.createdAt = data.created_at;

    /**
     *
     * component date of last update
     * @type {string}
     * @public
     * @readonly
     */
    this.updatedAt = data.updated_at;

    /**
     *
     * component position
     * @type {number}
     * @public
     * @readonly
     */
    this.position = data.position;

    /**
     *
     * component description
     * @type {string}
     * @public
     * @readonly
     */
    this.description = data.description;

    /**
     *
     * component showcase
     * @type {boolean}
     * @public
     * @readonly
     */
    this.showcase = data.showcase;

    /**
     *
     * component start date
     * @type {string}
     * @public
     * @readonly
     */
    this.startDate = data.start_date;

    /**
     *
     * component group id
     * @type {string}
     * @public
     * @readonly
     */
    this.groupId = data.group_id;

    /**
     *
     * component page id
     * @type {string}
     * @public
     * @readonly
     */
    this.pageId = data.page_id;

    /**
     *
     * component group
     * @type {string}
     * @public
     * @readonly
     */
    this.group = data.group;

    /**
     *
     * component only show if degraded
     * @type {boolean}
     * @public
     * @readonly
     */
    this.onlyShowIfDegraded = data.only_show_if_degraded;
  }
}

module.exports = StatusComponent;
