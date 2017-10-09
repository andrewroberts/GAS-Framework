// 34567890123456789012345678901234567890123456789012345678901234567890123456789

// JSHint - TODO
/* jshint asi: true */

(function() {"use strict"})()

// Code review all files - TODO
// JSHint review (see files) - TODO
// Unit Tests - TODO
// System Test (Dev) - TODO
// System Test (Prod) - TODO

// Config.gs
// =========
//
// Dev: AndrewRoberts.net
//
// All the constants and configuration settings

// Configuration
// =============

var SCRIPT_NAME = "GAS Framework"
var SCRIPT_VERSION = "v1.0 (Dev)"

var PRODUCTION_VERSION = false

// Log Library
// -----------

var DEBUG_LOG_LEVEL = PRODUCTION_VERSION ? BBLog.Level.INFO : BBLog.Level.FINER
var DEBUG_LOG_DISPLAY_FUNCTION_NAMES = PRODUCTION_VERSION ? BBLog.DisplayFunctionNames.NO : BBLog.DisplayFunctionNames.YES

// Assert library
// --------------

var SEND_ERROR_EMAIL = false
var HANDLE_ERROR = Assert.HandleError.THROW
var ADMIN_EMAIL_ADDRESS = 'andrewr1969@gmail.com'

// Constants/Enums
// ===============



// Function Template
// -----------------

/**
 *
 *
 * @param {Object} 
 *
 * @return {Object}
 */
 
function functionTemplate() {

  Log_.functionEntryPoint()
  
  

} // functionTemplate() 
