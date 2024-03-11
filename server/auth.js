// Import the functions you need from the SDKs you need
const { initializeApp } = require("firebase/app");
const { collection, addDoc, getDocs, getFirestore } = require("firebase/firestore"); 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const expressApp = express();

expressApp.use(bodyParser.json());
expressApp.use(cors());

expressApp.post ("/api/signup", async (req, res) => {
  const sentUser = { name: req.body.name, mail: req.body.mail, password: req.body.password }

  const docRef = await addDoc(collection(db, "users"), {sentUser});

  res.status(200).send("success")
})

expressApp.post ("/api/Login", async (req, res) => {
  const sentUser = { name: req.body.name, mail: req.body.mail, password: req.body.password }

  const querySnapshot = await getDocs(collection(db, "users")); 
  querySnapshot.forEach((doc) => {
    const userData = doc.data().sentUser;

    if (sentUser.mail === userData.mail && sentUser.password === userData.password && sentUser.name === userData.name) {
      res.status(200).send("success")
    }
    else {
      res.status(400).send("problem")
    }
  });    
})

expressApp.post("/api/forgotpass", async (req, res) => {
  const sentMail = req.body.mail

  const querySnapshot = await getDocs(collection(db, "users")); 
  querySnapshot.forEach((doc) => {
    const userData = doc.data().sentUser;

    if (sentMail === userData.mail) {
      res.status(200).send("success")
    }
    else {
      res.status(400).send("no mail like this")
    }
  })
})

expressApp.listen(3000, () => {
  console.log("listening")
})
