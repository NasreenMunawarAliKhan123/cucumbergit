$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("classpath:reporting/Scenariooutline.feature");
formatter.feature({
  "name": "Arithmetic opertaions",
  "description": "This is done to check the arithmetic operations",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Operations",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I enter \u003c1\u003e in the calculator",
  "keyword": "Given "
});
formatter.step({
  "name": "I press \"\u003cSymbol\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I have entered \u003c2\u003e in the calculator",
  "keyword": "And "
});
formatter.step({
  "name": "I press equal symbol",
  "keyword": "When "
});
formatter.step({
  "name": "The result is \u003c3\u003e is displayed",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "1",
        "Symbol",
        "2",
        "3"
      ]
    },
    {
      "cells": [
        "5",
        "Add",
        "10",
        "15"
      ]
    },
    {
      "cells": [
        "10",
        "Sub",
        "5",
        "5"
      ]
    },
    {
      "cells": [
        "20",
        "Mul",
        "30",
        "600"
      ]
    },
    {
      "cells": [
        "20",
        "Div",
        "5",
        "4"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Operations",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I enter 5 in the calculator",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdef.step1(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I press \"Add\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdef.step2(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I have entered 10 in the calculator",
  "keyword": "And "
});
formatter.match({
  "location": "stepdef.step3(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I press equal symbol",
  "keyword": "When "
});
formatter.match({
  "location": "stepdef.step4()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The result is 15 is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdef.step5(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Operations",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I enter 10 in the calculator",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdef.step1(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I press \"Sub\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdef.step2(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I have entered 5 in the calculator",
  "keyword": "And "
});
formatter.match({
  "location": "stepdef.step3(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I press equal symbol",
  "keyword": "When "
});
formatter.match({
  "location": "stepdef.step4()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The result is 5 is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdef.step5(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Operations",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I enter 20 in the calculator",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdef.step1(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I press \"Mul\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdef.step2(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I have entered 30 in the calculator",
  "keyword": "And "
});
formatter.match({
  "location": "stepdef.step3(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I press equal symbol",
  "keyword": "When "
});
formatter.match({
  "location": "stepdef.step4()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The result is 600 is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdef.step5(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Operations",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I enter 20 in the calculator",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdef.step1(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I press \"Div\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdef.step2(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I have entered 5 in the calculator",
  "keyword": "And "
});
formatter.match({
  "location": "stepdef.step3(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I press equal symbol",
  "keyword": "When "
});
formatter.match({
  "location": "stepdef.step4()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The result is 4 is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdef.step5(int)"
});
formatter.result({
  "status": "passed"
});
});