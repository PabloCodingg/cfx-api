/**
 *
 * Class representing a CitizenFX server
 * @class
 * @constructor
 * @public
 */
const ElementClub = require('../types/ElementClub');
const validator = require('./_validator');

class CitizenServer {
  /**
   *
   * Constructor for class
   * @param {Object} data data from API
   */
  constructor(data) {
    validator('CitizenServer', 'data', data, ['EndPoint', 'Data']);

    const { EndPoint, Data } = data;
    /**
     *
     * id represents the server's cfx id
     * @type {string}
     * @public
     */
    this.id = EndPoint;

    /**
     *
     * data represents the server data from the response body of the API
     * @type {Object}
     * @public
     */
    this.data = Data;
  }

  /**
   *
   * Get the number of connected players
   * @type {number} Number of players
   * @readonly
   */
  get playersCount() {
    return this.data['clients'];
  }

  /**
   *
   * Get the players list
   * @type {Array<CitizenPlayer>} List of players
   * @readonly
   */
  get players() {
    return this.data['players'];
  }

  /**
   *
   * Get game type
   * @type {string} Game type
   * @readonly
   */
  get gameType() {
    return this.data['gametype'];
  }

  /**
   *
   * Get the server's hostname
   * @type {string} server's hostname
   * @readonly
   */
  get hostname() {
    return this.data['hostname'];
  }

  /**
   *
   * Get the server's current map
   * @type {string} server's current map
   * @readonly
   */
  get mapName() {
    return this.data['mapname'];
  }

  /**
   *
   * Get the server's max players
   * @type {number} server's max players
   * @readonly
   */
  get maxPlayers() {
    return this.data['sv_maxclients'];
  }

  /**
   *
   * Is the server enhanced host support
   * @type {boolean} True if server has enhanced host support
   * @readonly
   */
  get enhancedHostSupport() {
    return this.data['enhancedHostSupport'];
  }

  /**
   *
   * Get the server's list of active resources
   * @type {Array<String>} List of active resources
   * @readonly
   */
  get resources() {
    return this.data['resources'];
  }

  /**
   *
   * Get the server's FXServer version
   * @type {String} FXServer version
   * @readonly
   */
  get serverVersion() {
    return this.data['server'];
  }

  /**
   *
   * Get the server's public variables
   * @type {Object} Public variables
   * @readonly
   */
  get publicVariables() {
    return this.data['vars'];
  }

  /**
   *
   * Get the server's players count from the last server report
   * @type {number} server's players count
   * @readonly
   */
  get playersCountFromServerReport() {
    return this.data['selfReportedClients'];
  }

  /**
   *
   * Get the server's owner id
   * @type {number} server's owner id
   * @readonly
   */
  get ownerId() {
    return this.data['ownerID'];
  }

  /**
   *
   * Get is the server is password protected
   * @type {boolean} True if server is password protected
   * @readonly
   */
  get private() {
    return this.data['private'];
  }

  /**
   *
   * Get is the server fallbabk
   * @type {boolean} True if server is fallback
   * @readonly
   */
  get fallback() {
    return this.data['fallback'];
  }

  /**
   *
   * Get the server's connect endpoints
   * @type {Array<String>} server's connect endpoints
   * @readonly
   */
  get connectedEndpoints() {
    return this.data['connectEndPoints'];
  }

  /**
   *
   * Get the server's upvote power
   * @type {number} server's upvote power
   * @readonly
   */
  get upvotePower() {
    return this.data['upvotePower'];
  }

  /**
   *
   * Get the server's burst power
   * @type {number} server's burst power
   * @readonly
   */
  get burstPower() {
    return this.data['burstPower'];
  }

  /**
   *
   * Get is the server supported
   * @type {string} 'supported' if server is supported
   * @readonly
   */
  get supported() {
    return this.data['support_status'];
  }

  /**
   *
   * Get the server's owner name
   * @type {string} server's owner name
   * @readonly
   */
  get ownerName() {
    return this.data['ownerName'];
  }

  /**
   *
   * Get the server's owner cfx profile url
   * @type {string} server's owner cfx profile url
   * @readonly
   */
  get ownerProfileUrl() {
    return this.data['ownerProfile'];
  }

  /**
   *
   * Get the server's owner avatar url
   * @type {string} server's owner avatar url
   * @readonly
   */
  get ownerAvatarUrl() {
    return this.data['ownerAvatar'];
  }

  /**
   *
   * Get the server's last seen date
   * @type {string} server's last seen date
   * @readonly
   */
  get lastSeenDate() {
    return this.data['lastSeen'];
  }

  /**
   *
   * Get the server's icon version
   * @type {number} server's icon version
   * @readonly
   */
  get iconVersion() {
    return this.data['iconVersion'];
  }

  /**
   *
   * Get the server's one sync status
   * @type {boolean} true if the server is using one sync
   * @readonly
   */
  get isOneSyncEnabled() {
    return (this.publicVariables['onesync_enabled'] === 'true') ? true : false;
  }

  /**
   *
   * Get the server's element club level
   * @type {string} server's element club level
   * @readonly
   */
  get elementClub() {
    return this.publicVariables['element_club'] ?? ElementClub.NONE;
  }

  /**
   *
   * Get the server's tags
   * @type {Array<string>} server's tags
   * @readonly
   */
  get tags() {
    if (!this.publicVariables['tags']) {
      return [];
    }
    return this.publicVariables['tags'];
  }

  /**
   *
   * server's project name
   * @type {string} server's project name
   * @readonly
   */
  get projectName() {
    return this.publicVariables['sv_projectName'] ?? undefined;
  }

  /**
   *
   * server's project description
   * @type {string} server's project description
   * @readonly
   */
  get projectDesc() {
    return this.publicVariables['sv_projectDesc'] ?? undefined;
  }

  /**
   *
   * Get is the server full
   * @type {boolean} trye if server is full
   * @readonly
   */
  get isFull() {
    return this.playersCount >= this.maxPlayers;
  }

  /**
   *
   * Get if the server has the specified resource
   * @param {string} resource Resource to check
   * @return {boolean} True if server has the specified resource
   * @readonly
   */
  hasResource(resource) {
    return this.resources.includes(resource);
  }

  /**
   *
   * Get if the server has any resource starting with the specified string
   * @param {string} resource Resource to check
   * @return {boolean} True if server has any resource starting with the specified string
   * @readonly
   */
  hasAnyResourceStartingWith(resource) {
    return this.resources.some((r) => r.startsWith(resource));
  }

  /**
   *
   * Get if the server has the specified tag
   * @param {string} tag tag to check
   * @return {boolean} true if the server has the specified tag
   */
  hasTag(tag) {
    return this.tags.includes(tag);
  }

  /**
   *
   * Get if the server has any player connected with the given name
   * @param {string} name Player name to check
   * @return {boolean} true if the server has any player connected with the given name
   */
  isPlayerOnline(name) {
    return this.players.some((player) => player.name === name);
  }
}

module.exports = CitizenServer;
