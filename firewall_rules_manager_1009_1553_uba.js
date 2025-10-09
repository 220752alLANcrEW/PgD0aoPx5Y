// 代码生成时间: 2025-10-09 15:53:57
// Firewall Rules Manager using JavaScript and jQuery

/**
 * This module provides functionality to manage firewall rules.
 * @module FirewallRulesManager
 */

(function($, window) {

  "use strict";

  // Private properties
  const FIREWALL_API_URL = "/api/firewall/rules";

  // Public properties
  let rules = [];

  /**
   * Initializes the firewall rules manager with existing rules.
   * @function initialize
   * @param {Array} existingRules - An array of existing firewall rules.
   */
  function initialize(existingRules) {
    rules = existingRules;
  }

  /**
   * Fetches firewall rules from the server.
   * @function fetchRules
   * @returns {Promise<Array>} - A promise that resolves with an array of firewall rules.
   */
  function fetchRules() {
    return $.ajax({
      url: FIREWALL_API_URL,
      method: "GET"
    }).then((data) => {
      rules = data;
      return data;
    }).fail((error) => {
      console.error("Failed to fetch firewall rules: ", error);
      throw error;
    });
  }

  /**
   * Adds a new firewall rule to the server.
   * @function addRule
   * @param {Object} rule - The new firewall rule to add.
   * @returns {Promise<Object>} - A promise that resolves with the added rule.
   */
  function addRule(rule) {
    return $.ajax({
      url: FIREWALL_API_URL,
      method: "POST",
      data: rule
    }).then((data) => {
      rules.push(data);
      return data;
    }).fail((error) => {
      console.error("Failed to add firewall rule: ", error);
      throw error;
    });
  }

  /**
   * Updates an existing firewall rule on the server.
   * @function updateRule
   * @param {Object} rule - The updated firewall rule.
   * @returns {Promise<Object>} - A promise that resolves with the updated rule.
   */
  function updateRule(rule) {
    return $.ajax({
      url: FIREWALL_API_URL + "/" + rule.id,
      method: "PUT",
      data: rule
    }).then((data) => {
      const index = rules.findIndex(r => r.id === rule.id);
      if (index !== -1) {
        rules[index] = data;
      }
      return data;
    }).fail((error) => {
      console.error("Failed to update firewall rule: ", error);
      throw error;
    });
  }

  /**
   * Deletes a firewall rule from the server.
   * @function deleteRule
   * @param {number} ruleId - The ID of the rule to delete.
   * @returns {Promise<void>} - A promise that resolves when the rule is deleted.
   */
  function deleteRule(ruleId) {
    return $.ajax({
      url: FIREWALL_API_URL + "/" + ruleId,
      method: "DELETE"
    }).then(() => {
      rules = rules.filter(rule => rule.id !== ruleId);
    }).fail((error) => {
      console.error("Failed to delete firewall rule: ", error);
      throw error;
    });
  }

  // Expose the public API
  window.FirewallRulesManager = {
    initialize,
    fetchRules,
    addRule,
    updateRule,
    deleteRule
  };

}(window.jQuery, window));
