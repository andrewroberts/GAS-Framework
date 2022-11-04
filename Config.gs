// 34567890123456789012345678901234567890123456789012345678901234567890123456789

// JSHint - TODO
/* jshint asi: true */
/* jshint esversion: 6 */

(function(){"use strict"})()

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
const SCRIPT_VERSION = "v0.dev"

const PRODUCTION_VERSION_ = false

// Log Library
// -----------

const DEBUG_LOG_LEVEL_ = PRODUCTION_VERSION_ ? BBLog.Level.INFO : BBLog.Level.FINER
const DEBUG_LOG_DISPLAY_FUNCTION_NAMES_ = PRODUCTION_VERSION_ ? BBLog.DisplayFunctionNames.NO : BBLog.DisplayFunctionNames.NO

// Assert library
// --------------

const SEND_ERROR_EMAIL_ = PRODUCTION_VERSION_ ? true : false
const HANDLE_ERROR_ = PRODUCTION_VERSION_ ? Assert.HandleError.DISPLAY_FULL : Assert.HandleError.THROW
const ADMIN_EMAIL_ADDRESS_ = ''

// Tests
// -----

const TEST_FLAG_ = true

const TEST_SHEET_ID_ = ''

if (PRODUCTION_VERSION_) {
  if (!TEST_FLAG_) {
    throw new Error('Test Flag set in production')
  }
}

// Constants/Enums
// ===============


