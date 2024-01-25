// 34567890123456789012345678901234567890123456789012345678901234567890123456789

// Tests.gs
// ========
//
// Dev: AndrewRoberts.net
//
// Code for internal/unit testing

function test_init() {
  Log_ = BBLog.getLog({
    sheetId:              TEST_SHEET_ID_,
    level:                BBLog.Level.ALL, 
    displayFunctionNames: BBLog.DisplayFunctionNames.NO,
  })  
}

function test_misc() {
  // ...
}

function test_() {
  test_init()
  // ...
}