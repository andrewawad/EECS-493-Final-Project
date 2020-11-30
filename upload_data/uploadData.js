const firestoreService = require('firestore-export-import')
var serviceAccount = require('./serviceAccount.json')


const databaseURL = 'https://journally-11039.firebaseio.com'

firestoreService.initializeApp(serviceAccount,databaseURL)
firestoreService.restore('dummyData.json')