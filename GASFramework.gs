// 34567890123456789012345678901234567890123456789012345678901234567890123456789

// JSHint - TODO
/* jshint asi: true */

"use strict"

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

  onInstall:               [function() {},  'onInstall()',              'Failed to install',                    onInstall_],
}

// function (arg)                     {return eventHandler_(EVENT_HANDLERS., arg)}

function onInstall(arg)               {return eventHandler_(EVENT_HANDLERS.onInstall, arg)}

/**
 * Event handler for the sheet being opened. This is a special case
 * as all it can do is create a menu whereas the usual eventHandler_()
 * does things we don't have permission for at this stage.
 */

function onOpen() {

  Log.functionEntryPoint()
  
  var ui = SpreadsheetApp.getUi()
  var menu = ui.createAddonMenu()

  menu
    .addItem('Custom menu item 1', 'onCustomFunction1')
    .addToUi()
    
} // onOpen()

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
  
    initialseEventHandler()  
    
    Assert.handleError(
      new Error('Only one call to this function can be made at a time'), 
        'Failed to handle event', 
        Log)
  }
  
  try {

    // Perform any initial functions
    config[0]()    
    
    initialseEventHandler()
    
    var userEmail = Session.getActiveUser().getEmail()
    Log.info('Handling ' + config[1] + ' from ' + userEmail)
    
    // Call the main function
    return config[3](arg)
    
  } catch (error) {
  
    Assert.handleError(error, config[2], Log)
    
  } finally {
  
    lock.releaseLock()
  }
  
  // Private Functions
  // -----------------

  /**
   * Initialise the event handling
   */
 
  function initialseEventHandler() {

    Log.init({
      level: LOG_LEVEL, 
      sheetId: LOG_SHEET_ID,
      displayFunctionNames: LOG_DISPLAY_FUNCTION_NAMES})
      
    Assert.init({
      handleError: HANDLE_ERROR, 
      sendErrorEmail: SEND_ERROR_EMAIL, 
      emailAddress: ADMIN_EMAIL_ADDRESS,
      scriptName: SCRIPT_NAME,
      scriptVersion: SCRIPT_VERSION, 
    })

  } // eventHandler_.initialseEventHandler() 

} // eventHandler_()

// Private event handlers
// ----------------------

/**
 * Private 'on install' event handler
 */

function onInstall_() {

  // TODO - Anything that needs doing on installation

} // onInstall_()

