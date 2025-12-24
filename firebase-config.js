import { initializeApp } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-app.js";
        import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-analytics.js";

        const firebaseConfig = {
            apiKey: "AIzaSyC8TFitMZgSTmxTTIaeCznwN2CpzWoQ6Bc",
            authDomain: "booksdev-3de79.firebaseapp.com",
            databaseURL: "https://booksdev-3de79-default-rtdb.firebaseio.com",
            projectId: "booksdev-3de79",
            storageBucket: "booksdev-3de79.firebasestorage.app",
            messagingSenderId: "39273829148",
            appId: "1:39273829148:web:cbb6d02d4597025e09a0d9",
            measurementId: "G-5Q3BCRZEBZ"
        };

        const app = initializeApp(firebaseConfig);
        const analytics = getAnalytics(app);
        
        console.log("Firebase conectado ao CustomerFlow!");