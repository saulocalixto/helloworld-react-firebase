import firebase from 'firebase';

const prodConfig = {
  apiKey: "AIzaSyBlsWDF7MB6jL2pL7EKQOJBC7zeSqYfoCc",
  authDomain: "helloworld-3959a.firebaseapp.com",
  databaseURL: "https://helloworld-3959a.firebaseio.com",
  projectId: "helloworld-3959a",
  storageBucket: "helloworld-3959a.appspot.com",
  messagingSenderId: "203372035837"
};

const devConfig = {
  apiKey: "AIzaSyBlsWDF7MB6jL2pL7EKQOJBC7zeSqYfoCc",
  authDomain: "helloworld-3959a.firebaseapp.com",
  databaseURL: "https://helloworld-3959a.firebaseio.com",
  projectId: "helloworld-3959a",
  storageBucket: "helloworld-3959a.appspot.com",
  messagingSenderId: "203372035837"
};

const config = process.env.NODE_ENV === 'production'
  ? prodConfig
  : devConfig;

export const firebaseImpl = firebase.initializeApp(config);
export const firebaseDatabase = firebase.database();