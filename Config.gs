// 34567890123456789012345678901234567890123456789012345678901234567890123456789

// JSHint - TODO
/* jshint asi: true */

// Code review all files - TODO
// JSHint review (see files) - TODO
// Unit Tests - TODO
// System Test (Dev) - TODO
// System Test (Prod) - TODO

// Config.gs
// =========
//
// All the constans and configuration settings

// Configuration
// =============

var SCRIPT_NAME = "GAS Template"
var SCRIPT_VERSION = "v1.0 (Dev)"

var PRODUCTION_VERSION = false

// Log Library
// -----------

var LOG_LEVEL = PRODUCTION_VERSION ? Log.Level.INFO : Log.Level.FINER
var LOG_SHEET_ID = ''
var LOG_DISPLAY_FUNCTION_NAMES = PRODUCTION_VERSION ? Log.DisplayFunctionNames.NO : Log.DisplayFunctionNames.YES

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

  Log.functionEntryPoint()
  
  

} // functionTemplate() 
