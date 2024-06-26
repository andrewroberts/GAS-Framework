// JSHint - TODO
/* jshint asi: true */
/* jshint esversion: 6 */

(function(){"use strict"})()

// Utils_.gs
// =========
//
// Object template

var Utils_ = (function(ns) {

  /*

  Create a two-deep object from a 2D array. The first column is used as the 
  key and the value of each key is another object using the remaining headers

        city    pop    height
        ----    ---    ------
    1  | city1   111    1111
    2  | city2   222    2222
    3  | city3   333    3333
    
    {
      city1: {
        pop: 111, 
        height: 1111
      }, 
      city2: {
        pop: 222, 
        height: 2222
      }, 
      city3: {
        pop: 333, 
        height: 3333
      }, 
    }
    
  */

  ns.createObjectFrom2DArray = function(sheet) {
    const data = sheet.getDataRange().getValues()
    const header = data.shift()
    let object = {}
    data.forEach(row =>  {
      header.reduce((accumulator, currentValue, currentIndex) => {
        var key = row[0];
        if (currentIndex === 0) {
          object[key] = {}
        } else {
          object[key][currentValue] = row[currentIndex]
        }
        return accumulator
      }, {}) 
      })
    return object
  }

  /**
   * Takes a sheet param and creates an array of json objects
   * Keys to each json is based on the titles in the header row
   *
   * @param {Spreadsheet object} sheet Spreadsheet object (or 2D array)
   */

  ns.getArrayOfObjects = function(sheet) {
    const data = sheet.getDataRange().getValues()
    const headers = data.shift()
    return data.map(row => row.reduce((prev, curr,index) => {
      prev[headers[index]] = curr
      return prev
    },{}))
  }

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
