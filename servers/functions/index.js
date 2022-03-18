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
app.get('/api/sessions', (req, res) => {
  (async () => {
      try {
          let query = db.collection('kgf22-session');
          let response = [];
          await query.get().then(querySnapshot => {
          let docs = querySnapshot.docs;
          for (let doc of docs) {
              const selectedItem = {
                  session: doc.data()
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

  // read all user
  app.get('/api/User', (req, res) => {
    (async () => {
        try {
            let query = db.collection('User');
            let response = [];
            await query.get().then(querySnapshot => {
            let docs = querySnapshot.docs;
            for (let doc of docs) {
                const selectedItem = {
                    "psid" : doc.id,
                    "answers" : doc.data()
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

    // read specific user
    app.get('/api/User/:psid', (req, res) => {
        (async () => {
            try {
                const document = db.collection('User').doc(req.params.psid);
                let item = await document.get();
                let response = item.data();
                return res.status(200).send(response);
            } catch (error) {
                console.log(error);
                return res.status(500).send(error);
            }
            })();
        });

    // Post to specific user
    app.post('/api/create', (req, res) => {
        (async () => {
            try {
            await db.collection('items').doc('/' + req.body.id + '/')
                .create({item: req.body.item});
            return res.status(200).send();
            } catch (error) {
            console.log(error);
            return res.status(500).send(error);
            }
        })();
    });

exports.app = functions.https.onRequest(app);
