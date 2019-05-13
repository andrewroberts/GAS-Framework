# GAS-Framework
A framework for creating Google Apps Scripts. It provides a consistent way of dealing with error-handling and logging. Especially useful for add-ons and the are required to manage all errors in a user-friendly way.

To run it you'll need the following libraries:

* **[BBLog](https://github.com/andrewroberts/BBLog)** - persistent multi-level logging to a spreadsheet. It wraps BetterLog and mainly automatically adds the function name to each line of trace (configurable). ID: 1kzzYZhgODZluRmjsjh7t3O-ftmFAF9h1jaRHU0rOdf9irF0VUiJW33Kt.

* **[Assert](https://github.com/andrewroberts/Assert)** - Assertion and error-handling, it provides the standard assertion which throw an error on failure. It also handles errors caught in a top-level try/catch which can be configured to send an email notification and always logs a "severe" error. ID: MN2v6JNucOc0S385I-FMvAB8_L47d2MW6
