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

const SCRIPT_NAME = "GAS Framework"
const SCRIPT_VERSION = "v1.0.dev"

const PRODUCTION_VERSION_ = false

// Log Library
// -----------

const DEBUG_LOG_LEVEL_ = PRODUCTION_VERSION_ ? BBLog.Level.INFO : BBLog.Level.FINER
const DEBUG_LOG_DISPLAY_FUNCTION_NAMES_ = PRODUCTION_VERSION_ ? BBLog.DisplayFunctionNames.NO : BBLog.DisplayFunctionNames.YES

// Assert library
// --------------

const SEND_ERROR_EMAIL_ = PRODUCTION_VERSION_ ? true : false
const HANDLE_ERROR_ = Assert.HandleError.THROW
const ADMIN_EMAIL_ADDRESS_ = 'andrewr1969@gmail.com'

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
