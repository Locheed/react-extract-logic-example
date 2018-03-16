## React Tip | Extract logic out of component to external module

[![Build Status](https://travis-ci.org/Locheed/react-extract-logic-example.svg?branch=master)](https://travis-ci.org/Locheed/react-extract-logic-example)

To make logic reusable in many other components it can be extracted from component to separate module. This makes it easier to unit test as function and keeps your component nice and clean.

* **App.js** is the component after extract
* **notExtractedComponent.js** is the component without extract
* **changeLettering.js** is the extracted logic
* **changeLettering.test.js** test file for logic
