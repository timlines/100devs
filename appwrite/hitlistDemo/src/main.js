import './style.css'
import { PROJECT_ID, DATABASE_ID, COLLECTION_ID } from './shhh.js';

import { Client, Databases, ID } from "appwrite";

const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject(PROJECT_ID);

const databases = new Databases(client);

const form = document.querySelector('form');

form.addEventListener('submit', addJob)

function addJob(e){
  e.preventDefault();
  const job = databases.createDocument(
    DATABASE_ID,
    COLLECTION_ID,
    ID.unique(),
    { "company-name": e.target.companyName.value,
      "date-added": e.target.dateAdded.value,
      "role": e.target.role.value,
      "location": e.target.location.value,
      "position-type": e.target.positionType.value,
      "source": e.target.source.value
    }
  );
  
  job.then(function (response) {
    addJobsToDom();
  }, function (error) {
    console.log(error);
  });
  form.reset()

}


async function addJobsToDom(){

  document.querySelector('ul').innerHTML = ""

  let response = await databases.listDocuments(
    DATABASE_ID,
    COLLECTION_ID,

);

// console.log(response.documents[0]);

response.documents.forEach((job)=> {

  const li = document.createElement('li');
  li.textContent = `${job['company-name']} ${job['date-added']} ${job['role']} ${job['location']} ${job['position-type']} ${job['source']} coffee chat? ${job['chat']} `
  document.querySelector('ul').appendChild(li);

  li.id = job.$id

  const deleteBtn = document.createElement('button')
  deleteBtn.textContent = '🧨'
  deleteBtn.onclick = () => removeJob(job.$id)
  
  const coffeeBtn = document.createElement('button')
  coffeeBtn.textContent = '☕'
  coffeeBtn.onclick = () => updateChat(job.$id)
  
  li.appendChild(coffeeBtn)
  li.appendChild(deleteBtn)

  document.querySelector('ul').appendChild(li)
 
})

async function removeJob(id){
  const result = await databases.deleteDocument(
    DATABASE_ID, // databaseId
    COLLECTION_ID, // collectionId
    id // documentId
  );

  document.getElementById(id).remove()

}

async function updateChat(id){
  const result = databases.updateDocument(
    DATABASE_ID, // databaseId
    COLLECTION_ID, // collectionId
    id, // documentId
    {'chat': true} // data (optional)
   // permissions (optional)
  );

  result.then(function(){ location.reload() })

  }


// response.then(function (response) {
//     console.log(response);
// }, function (error) {
//     console.log(error);
// });

}

addJobsToDom();



// const promise = databases.createDocument(
//     DATABASE_ID,
//     COLLECTION_ID,
//     ID.unique(),
//     { "company-name": "100Devs",
//       "date-added": new Date(),
//       "role": "software engineer",
//       "location": "Philly",
//       "position-type": "full time",
//       "source": "https://100devs.org"
//      }
// );


















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