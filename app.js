// Initialize Firebase and Firestore
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

document.getElementById('log-form').addEventListener('submit', (e) => {
  e.preventDefault();

  const steps = document.getElementById('steps').value;
  const water = document.getElementById('water').value;

  db.collection('healthData').add({
    steps: steps,
    water: water,
    timestamp: new Date()
  }).then(() => {
    alert('Data logged successfully!');
  }).catch((error) => {
    console.error("Error adding document: ", error);
  });
});
