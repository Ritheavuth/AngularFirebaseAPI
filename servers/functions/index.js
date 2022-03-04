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

  // User's answers

  app.get('/api/users', (req, res) => {
    (async () => {
        try {
            let query = db.collection('users');
            let response = [];
            await query.get().then(querySnapshot => {
            let docs = querySnapshot.docs;
            for (let doc of docs) {
                const selectedItem = {
                    answer: doc.data()
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

  // Filter for category = [education, business, issue, technology]
  
  app.get('/api/sessions/category=education', (req, res) => {
    (async () => {
        try {
            let query = db.collection('kgf22-session');
            let response = [];
            await query.get().then(querySnapshot => {
            let docs = querySnapshot.docs;
            for (let doc of docs) {
                if (doc.data().category == "education") {
                    const selectedItem = {
                        session: doc.data()
                    };
                    response.push(selectedItem);
                } 
            }
            });
            return res.status(200).send(response);
        } catch (error) {
            console.log(error);
            return res.status(500).send(error);
        }
        })();
    });

  app.get('/api/sessions/category=business', (req, res) => {
    (async () => {
        try {
            let query = db.collection('kgf22-session');
            let response = [];
            await query.get().then(querySnapshot => {
            let docs = querySnapshot.docs;
            for (let doc of docs) {
                if (doc.data().category == "business") {
                    const selectedItem = {
                        session: doc.data()
                    };
                    response.push(selectedItem);
                } 
            }
            });
            return res.status(200).send(response);
        } catch (error) {
            console.log(error);
            return res.status(500).send(error);
        }
        })();
    });

  app.get('/api/sessions/category=issue', (req, res) => {
    (async () => {
        try {
            let query = db.collection('kgf22-session');
            let response = [];
            await query.get().then(querySnapshot => {
            let docs = querySnapshot.docs;
            for (let doc of docs) {
                if (doc.data().category == "issue") {
                    const selectedItem = {
                        session: doc.data()
                    };
                    response.push(selectedItem);
                } 
            }
            });
            return res.status(200).send(response);
        } catch (error) {
            console.log(error);
            return res.status(500).send(error);
        }
        })();
    });

  app.get('/api/sessions/category=technology', (req, res) => {
    (async () => {
        try {
            let query = db.collection('kgf22-session');
            let response = [];
            await query.get().then(querySnapshot => {
            let docs = querySnapshot.docs;
            for (let doc of docs) {
                if (doc.data().category == "technology") {
                    const selectedItem = {
                        session: doc.data()
                    };
                    response.push(selectedItem);
                } 
            }
            });
            return res.status(200).send(response);
        } catch (error) {
            console.log(error);
            return res.status(500).send(error);
        }
        })();
    });

    // Filter for location = [Japan, America, Africa, Asia, Europe]
  app.get('/api/sessions/location=Japan', (req, res) => {
    (async () => {
        try {
            let query = db.collection('kgf22-session');
            let response = [];
            await query.get().then(querySnapshot => {
            let docs = querySnapshot.docs;
            for (let doc of docs) {
                if (doc.data().location == "Japan") {
                    const selectedItem = {
                        session: doc.data()
                    };
                    response.push(selectedItem);
                } 
            }
            });
            return res.status(200).send(response);
        } catch (error) {
            console.log(error);
            return res.status(500).send(error);
        }
        })();
    });

  app.get('/api/sessions/location=America', (req, res) => {
    (async () => {
        try {
            let query = db.collection('kgf22-session');
            let response = [];
            await query.get().then(querySnapshot => {
            let docs = querySnapshot.docs;
            for (let doc of docs) {
                if (doc.data().location == "America") {
                    const selectedItem = {
                        session: doc.data()
                    };
                    response.push(selectedItem);
                } 
            }
            });
            return res.status(200).send(response);
        } catch (error) {
            console.log(error);
            return res.status(500).send(error);
        }
        })();
    });

  app.get('/api/sessions/location=Asia', (req, res) => {
    (async () => {
        try {
            let query = db.collection('kgf22-session');
            let response = [];
            await query.get().then(querySnapshot => {
            let docs = querySnapshot.docs;
            for (let doc of docs) {
                if (doc.data().location == "Asia") {
                    const selectedItem = {
                        session: doc.data()
                    };
                    response.push(selectedItem);
                } 
            }
            });
            return res.status(200).send(response);
        } catch (error) {
            console.log(error);
            return res.status(500).send(error);
        }
        })();
    });

  app.get('/api/sessions/location=Africa', (req, res) => {
    (async () => {
        try {
            let query = db.collection('kgf22-session');
            let response = [];
            await query.get().then(querySnapshot => {
            let docs = querySnapshot.docs;
            for (let doc of docs) {
                if (doc.data().location == "Africa") {
                    const selectedItem = {
                        session: doc.data()
                    };
                    response.push(selectedItem);
                } 
            }
            });
            return res.status(200).send(response);
        } catch (error) {
            console.log(error);
            return res.status(500).send(error);
        }
        })();
    });

  app.get('/api/sessions/location=Europe', (req, res) => {
    (async () => {
        try {
            let query = db.collection('kgf22-session');
            let response = [];
            await query.get().then(querySnapshot => {
            let docs = querySnapshot.docs;
            for (let doc of docs) {
                if (doc.data().location == "Europe") {
                    const selectedItem = {
                        session: doc.data()
                    };
                    response.push(selectedItem);
                } 
            }
            });
            return res.status(200).send(response);
        } catch (error) {
            console.log(error);
            return res.status(500).send(error);
        }
        })();
    });

  app.get('/api/sessions/business-area=', (req, res) => {
    (async () => {
        try {
            let query = db.collection('kgf22-session');
            let name = "business-area";
            let response = [];
            await query.get().then(querySnapshot => {
            let docs = querySnapshot.docs;
            for (let doc of docs) {
                if (doc.data().name == "Europe") {
                    const selectedItem = {
                        session: doc.data()
                    };
                    response.push(selectedItem);
                } 
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