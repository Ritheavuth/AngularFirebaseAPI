var serviceAccount = require("./kirirom-forum-chatbot-firebase-adminsdk-da4cj-d809cdfa50.json");
const admin = require("firebase-admin");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://kirirom-forum-chatbot.firebaseio.com"
});
const db = admin.firestore();

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors({origin: true}));

// read all
app.get('/api/readimgURL', (req, res) => {
  (async () => {
      try {
          let query = db.collection('session');
          let response = [];
          await query.get().then(querySnapshot => {
          let docs = querySnapshot.docs;
          for (let doc of docs) {
              const selectedItem = {
                  item: doc.data()
              };
              response.push(selectedItem);
          }
          });
          return res.status(200).send(response);
      } catch (error) {
          console.log(error);
          return res.status(500).send(error);
      }
      })();
  });


exports.app = functions.https.onRequest(app);
