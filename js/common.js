var commonText = (function () {/*
*** Settings ***
Documentation     Common functionalit for all tests.
...
...               
Library           Selenium2Library
Suite Setup       Create Browser and Open With Settings

*** Variables ***

${TEST_BROWSER}        Chrome
*** Keywords ***
Create Test Browser
    Log    Using browser (case sensitive): ${TEST_BROWSER}
    Run Keyword    ${TEST_BROWSER}

PhantomJS
    ${service args}=    Create List    --ignore-ssl-errors=true   --ssl-protocol=tlsv1
    Create Webdriver    PhantomJS    service_args=${service args}

Firefox
    Create Webdriver    Firefox
Chrome
    Create Webdriver    Chrome
    

Create Browser and Open With Settings
    Create Test Browser
    Set Window Size    800    600
    Maximize Browser Window

*** Test Cases ***
*/}).toString().match(/[^]*\/\*([^]*)\*\/\}$/)[1];
