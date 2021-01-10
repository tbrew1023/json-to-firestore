import firebase from 'firebase';

// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
    apiKey: "AIzaSyBi_CuRJsRjc9fyR22_zRFiizjLT0M-c6U",
    authDomain: "import-test-417de.firebaseapp.com",
    projectId: "import-test-417de",
    storageBucket: "import-test-417de.appspot.com",
    messagingSenderId: "996339948398",
    appId: "1:996339948398:web:e2101e2415e1a78141ff7f"
});
  
var db = firebase.firestore();

var menu =[  
    {  
       "id":1,
       "name":"Focaccia al rosmarino",
       "description":"Wood fired rosemary and garlic focaccia",
       "price":8.50,
       "type":"Appetizers"
    },
    {  
       "id":2,
       "name":"Burratta con speck",
       "description":"Burratta cheese, imported smoked prok belly prosciutto, pached balsamic pear",
       "price":13.50,
       "type":"Appetizers"
    },
    {  
        "id":3,
        "name":"Succi",
        "description":"Tempura shrimp, crab, smelt roe, caviar, avocado, and cucumber roll, deepfried and topped with spicy mayo",
        "price":13.50,
        "type":"Appetizers"
     },
     {  
        "id":4,
        "name":"St. Louie sammy",
        "description":"Toasted naan topped with provel cheese, green peppers, bacon, grilled chicken, avocado, garlic aioli, and tomato",
        "price":13.50,
        "type":"Entre"
     },
     {  
        "id":5,
        "name":"Philly boi",
        "description":"Steak, provolone cheese, bell peppers, caramelized onions, tomato, chipotle mayo, and mushrooms on a buttered baguette",
        "price":13.50,
        "type":"Entre"
     }
 ]

menu.forEach(function(obj) {
    db.collection("menu").add({
        id: obj.id,
        name: obj.name,
        description: obj.description,
        price: obj.price,
        type: obj.type
    }).then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
});