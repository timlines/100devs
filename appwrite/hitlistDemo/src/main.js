import './style.css'

import { Client, Databases, ID } from "appwrite";

const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('67afce6c003b33821b8a');

const databases = new Databases(client);

const promise = databases.createDocument(
    '67afcf140006ef072b62',
    '67afcf240038ceaf621a',
    ID.unique(),
    { "company-name": "100Devs",
      "date-added": new Date(),
      "role": "software engineer",
      "location": "Philly",
      "position-type": "full time",
      "source": "https://100devs.org"
     }
);

promise.then(function (response) {
    console.log(response);
}, function (error) {
    console.log(error);
});
















// const client = new Client();

// const client = new sdk.Client();
// client.setProject('67afce6c003b33821b8a');


// const sdk = require('node-appwrite');

// // Init SDK

// const databases = new sdk.Databases(client);

// client
//     .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
//     .setProject('<PROJECT_ID>') // Your project ID
//     .setKey('919c2d18fb5d4...a2ae413da83346ad2') // Your secret API key
// ;

// deleteBtn.
// deletBrn.onclickl = () => removeJob() // how does it know what job to remove
// li.appendChild(li);





// li.id = removeJob.$id



// const coffeeBtn = document.createElement('button')
// coffeeBtn.textContent = '☕'
// coffeeBtn.onclick =() => updateChat(job.$id);



// async function removeJob(id){
//   // check the documentation
//   const result = await databases.deleteDocument(
//     DATABASE_ID, // databaseId
//     COLLECTION_ID, // collectionId
//     id // documentId
// );

// document.getElementById(id).remove() // going to want to make them async

// async function updateChat(id){
//   {'chat'}
//   result.then(() => location.reload())  
// }


// }

// const promise = databases.
// createDocument(
//     '67afcf140006ef072b62',
//     '67afcf240038ceaf621a'

//   );

// promise.then(function (response) {
//     console.log(response);
// }, function (error) {
//     console.log(error);
// });