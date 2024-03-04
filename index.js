// index.js

const dataGatherer = require('./src/data-gatherer');
const dataAnalyzer = require('./src/data-analyzer');
const riskAssessment = require('./src/risk-assessment');
const notificationSystem = require('./src/notification-system');
const userInterface = require('./src/user-interface');

// Gather data
const cryptoData = dataGatherer.getData();

// Analyze data
const potentialGems = dataAnalyzer.analyzeData(cryptoData);

// Assess risks
const riskyGems = riskAssessment.assessRisk(potentialGems);

// Notify user
notificationSystem.notifyUsers(riskyGems);

// Display results
userInterface.displayResults(riskyGems);

