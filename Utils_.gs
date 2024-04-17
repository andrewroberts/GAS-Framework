// 34567890123456789012345678901234567890123456789012345678901234567890123456789

// JSHint - TODO
/* jshint asi: true */
/* jshint esversion: 6 */

(function(){"use strict"})()

// Utils_.gs
// =========
//
// Object template

var Utils_ = (function(ns) {

  /**
   * Create an object where the keys are the header names and the value the header (zero) index
   * 
   * @param {Sheet} sheet
   * @param {number} headerRowNumber [OPTIONAL, DEFAULT = 1]
   * @return {object} 
   */

  ns.getHeaderIndexes = function(sheet, headerRowNumber) {
    if (headerRowNumber === undefined) headerRowNumber = 1
    let headerColumnIndexes = {}
    sheet
      .getRange(headerRowNumber, 1, 1, sheet.getLastColumn())
      .getValues()[0]
      .forEach((headerName, index) => {headerColumnIndexes[headerName.trim()] = index})
    return headerColumnIndexes
  }
  
  /**
   * Search a 2D array
   * 
   * @param Array valueArray - 2D array to seach
   * @param object valueToFind
   * @param columnIndex - column to search [DEFAULT: 0]
   * @return rowIndex
   */

  ns.findIn2DArray = function(valueArray, valueToFind, columnIndex) {
    const rowIndex = valueArray.findIndex(row => row[columnIndex] === valueToFind)
    if (rowIndex === -1) throw new Error(`Could not find ${valueToFind}`)
    return rowIndex
  }

  /**
   * Get the active spreadsheet, failing that the test one.
   *
   * @return {Spreadsheet} spreadsheet
   */
 
  ns.getSpreadsheet = function() {
  
    var spreadsheet = SpreadsheetApp.getActive()
    
    if (spreadsheet === null) {
      if (!PRODUCTION_VERSION_) {
        spreadsheet = SpreadsheetApp.openById(TEST_SHEET_ID_)
      } else {
        throw new Error('No active spreadsheet')
      }
    }
    
    return spreadsheet
  }
        
  ns.alert = function(message) {
    var spreadsheet = SpreadsheetApp.getActive()
    if (spreadsheet === null) return
    SpreadsheetApp.getUi().alert(message)
  }

  return ns

})({})
