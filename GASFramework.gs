// 34567890123456789012345678901234567890123456789012345678901234567890123456789

// JSHint - TODO
/* jshint asi: true */

// GasTemplate.gs
// ==============
//
// External interface to this script - all of the event handlers.
//
// This files contains all of the event handlers, plus miscellaneous functions 
// not worthy of their own files yet

// Public event handlers
// ---------------------
//
// All external event handlers need to be top-level function calls; they can't 
// be part of an object, and to ensure they are all processed similarily 
// for things like logging and error handling, they all go through 
// errorHandler_(). These can be called from custom menus, web apps, 
// triggers, etc
// 
// The main functionality of a call is in a function with the same name but 
// post-fixed with an underscore (to indicate it is private to the script)
//
// For debug, rather than production builds, lower level functions are exposed
// in the menu

//   :      [function() {},  '()',      'Failed to ', ],

var EVENT_HANDLERS = {

//                         Initial actions  Name                         onError Message                        Main Functionality
//                         ---------------  ----                         ---------------                        ------------------

  onOpen:                  [function() {},  'onOpen()',                 'Failed to open sheet',                onOpen_],
}

// function (arg)                     {return eventHandler_(EVENT_HANDLERS., arg)}

function onOpen(arg)               {return eventHandler_(EVENT_HANDLERS.onOpen, arg)}

// Private Functions
// =================

// General
// -------

/**
 * All external function calls should call this to ensure standard 
 * processing - logging, errors, etc - is always done.
 *
 * @param {array} config:
 *   [0] {function} prefunction
 *   [1] {string} eventName
 *   [2] {string} onErrorMessage
 *   [3] {function} mainFunction
 * @parma {object} arg The argument passed to the top-level event handler
 */

function eventHandler_(config, arg) {

  // By default, only one instance of this script can run at a time
  var lock = LockService.getScriptLock()
  
  if (!lock.tryLock(1000)) {
  
    Log.warning('Failed to get script lock')
    return
  }
  
  try {

    config[0]()

    Log.init({
      level: LOG_LEVEL, 
      sheetId: LOG_SHEET_ID,
      displayFunctionNames: LOG_DISPLAY_FUNCTION_NAMES})
    
    Log.info('Handling ' + config[1])
    
    Assert.init({
      handleError: HANDLE_ERROR, 
      sendErrorEmail: SEND_ERROR_EMAIL, 
      emailAddress: ADMIN_EMAIL_ADDRESS,
      scriptName: SCRIPT_NAME,
      scriptVersion: SCRIPT_VERSION, 
    })
    
    return config[3](arg)
    
  } catch (error) {
  
    Assert.handleError(error, config[2], Log)
    
  } finally {
  
    lock.releaseLock()
  }
  
} // eventHandler_()

// Private event handlers
// ----------------------

/**
 * Private 'on open' event handler
 */

function onOpen_() {

  SpreadsheetApp.getUi()
    .createMenu('GAS Template')
    .addItem('Option 1...', '')
  .addToUi()

} // onOpen_()

