// 34567890123456789012345678901234567890123456789012345678901234567890123456789

// JSHint - TODO
/* jshint asi: true */

(function() {"use strict"})()

// GasTemplate.gs
// ==============
//
// Dev: AndrewRoberts.net
//
// External interface to this script - all of the event handlers.
//
// This files contains all of the event handlers, plus miscellaneous functions 
// not worthy of their own files yet
//
// The filename is prepended with _API as the Github chrome extension won't 
// push a file with the same name as the project.

var Log_

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

function onInstall (arg1, arg2, properties, lock) {return eventHandler_(EVENT_HANDLERS.onInstall, arg1, arg2, properties, lock)}

/**
 * Event handler for the sheet being opened. This is a special case
 * as all it can do is create a menu whereas the usual eventHandler_()
 * does things we don't have permission for at this stage.
 */

function onOpen() {

  var ui = SpreadsheetApp.getUi()
  var menu = ui.createMenu('Custom menu')

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
 * @param {Array} config:
 *   [0] {Function} prefunction
 *   [1] {String} eventName
 *   [2] {String} onErrorMessage
 *   [3] {Function} mainFunction
 
 * @param {Object}   arg1       The argument passed to the top-level event handler
 * @param {Object}   arg2       The argument passed to the top-level event handler
 * @param {Property} properties A PropertiesService
 * @param {Lock}     lock       A LockService
 */

function eventHandler_(config, arg1, arg2, properties, lock) {

  // Check the parameters

  if (typeof arg1 === 'undefined') {
    throw new Error('The first argument has to be defined or set to null')
  } 

  if (typeof arg2 === 'undefined') {
    throw new Error('The second argument has to be defined or set to null')
  } 

  try {

    properties.getProperties()
    
  } catch (error) {
  
    if (error.message.indexOf('Cannot call method "getProperties" of undefined') !== -1) {
    
      throw new Error('The third argument has to be one of the PropertiesServices')
      
    } else {
    
      throw error
    }
  }
  
  try {

    lock.hasLock()
    
  } catch (error) {
  
    if (error.message.indexOf('Cannot call method "hasLock" of undefined') !== -1) {
    
      throw new Error('The fourth argument has to be one of the LockService')
      
    } else {
    
      throw error
    }
  }

  // Perform the main functionality

  try {

    var originallyHasLock = lock.hasLock()

    // Perform any initial functions
    config[0]()    
    
    initialseEventHandler()
    
    var userEmail = Session.getEffectiveUser().getEmail()
    Log_.info('Handling ' + config[1] + ' from ' + (userEmail || 'unknown email') + ' (' + SCRIPT_NAME + ' ' + SCRIPT_VERSION + ')')
    
    // Call the main function
    return config[3](arg1, arg2)
    
  } catch (error) {
  
    Assert.handleError(error, config[2], Log_)
    
  } finally {
  
    if (!originallyHasLock) {
      lock.releaseLock()
    }
  }
  
  return
  
  // Private Functions
  // -----------------

  /**
   * Initialise the event handling
   */
 
  function initialseEventHandler() {
      
    var userEmail = Session.getEffectiveUser().getEmail()

    Assert.init({
      handleError:    HANDLE_ERROR_, 
      sendErrorEmail: SEND_ERROR_EMAIL_, 
      emailAddress:   ADMIN_EMAIL_ADDRESS_ + ',' + userEmail,
      scriptName:     SCRIPT_NAME,
      scriptVersion:  SCRIPT_VERSION, 
    })

    if (PRODUCTION_VERSION_) {
    
      var firebaseUrl = properties.getProperty(PROPERTY_FIREBASE_URL)
      var firebaseSecret = properties.getProperty(PROPERTY_FIREBASE_SECRET)

      Log_ = BBLog.getLog({
        displayUserId:        BBLog.DisplayUserId.USER_KEY_FULL,
        lock:                 lock,
        firebaseUrl:          firebaseUrl,
        firebaseSecret:       firebaseSecret,
      });
    
    } else {

      Log_ = BBLog.getLog({
        level:                DEBUG_LOG_LEVEL_, 
        displayFunctionNames: DEBUG_LOG_DISPLAY_FUNCTION_NAMES_,
        lock:                 lock,
      })
    }

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

