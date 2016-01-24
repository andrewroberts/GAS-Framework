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
var SCRIPT_VERSION = "v0.1.0"

var PRODUCTION_VERSION = false
// var PRODUCTION_VERSION = true

// Log Library
// -----------

var LOG_LEVEL = PRODUCTION_VERSION ? Log.Level.INFO : Log.Level.FINER
var LOG_SHEET_ID = ''
var LOG_DISPLAY_FUNCTION_NAMES = Log.DisplayFunctionNames.NO

// Assert library
// --------------

var SEND_ERROR_EMAIL = false
// var SEND_ERROR_EMAIL = true

var HANDLE_ERROR = Assert.HandleError.THROW

// Any errors will be sent to this address
var ADMIN_EMAIL_ADDRESS = ''

// Constants/Enums
// ===============



/**
 *
 */
 
function functionTemplate() {

  Log.functionEntryPoint()
  
  

} // functionTemplate() 
