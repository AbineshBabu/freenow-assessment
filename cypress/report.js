const report = require('multiple-cucumber-html-reporter');
 
report.generate({
    jsonDir: './cucumber-json',
    pageTitle: 'freenow',
    reportName: 'Assessment',
    durationInMS: true,
    displayDuration: true,
    displayReportTime: true,
    hideMetadata: true,
    reportPath: './report/',
});