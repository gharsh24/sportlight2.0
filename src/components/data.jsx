// import React, { useEffect, useState } from "react";

// import firebaseConfig from "./config";

// import { initializeApp } from "firebase/app";
// import {
//   getFirestore,
//   collection,
//   addDoc,
//   getDocs,
//   deleteDoc,
//   writeBatch,
//   doc,
// } from "firebase/firestore";

// function DataFromApi() {
//   const app = initializeApp(firebaseConfig);
//   const db = getFirestore(app);

//   const API_URL =
//     "https://gnews.io/api/v4/top-headlines?category=sports&lang=en&country=in&max=10&apikey=a9c273c9a3850d41ec388598454404f3";

//   const [newsData, setNewsData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       // Check if 6 hours have passed since the last API call
//       const lastApiCall = localStorage.getItem("lastApiCall");
//       const currentTime = new Date().getTime();
//       const sixHours = 6 * 60 * 60 * 1000; // 6 hours in milliseconds

//       if (!lastApiCall || currentTime - lastApiCall > sixHours) {
//         // Make API call
//         const data = await fetchNewsData();
//         setNewsData(data);
//       } else {
//         // Fetch data from Firestore
//         const data = await fetchNewsDataFromFirestore();
//         setNewsData(data);
//       }
//     };

//     fetchData();
//   }, []);

//   const fetchNewsData = async () => {
//     try {
//       const response = await fetch(API_URL);
//       const { articles } = await response.json();

//       // Clear existing data in Firestore
//       const snapshot = await getDocs(collection(db, "All News Info"));
//       snapshot.forEach((doc) => {
//         deleteDoc(doc.ref);
//       });

//       // Store data in Firestore
//       const batch = writeBatch(db);
//       articles.slice(0, 30).forEach((article, index) => {
//         const docRef = doc(collection(db, "All News Info"), `news-${index}`);
//         batch.set(docRef, {
//           Content: article.content,
//           Title: article.title,
//           URL: article.url,
//           imageURL: article.image,
//           publishedAt: article.publishedAt,
//         });
//       });
//       await batch.commit();

//       // Save the current timestamp in local storage
//       localStorage.setItem("lastApiCall", new Date().getTime());

//       return articles.slice(0, 30);
//     } catch (error) {
//       console.log("Error fetching news data:", error);
//       return [];
//     }
//   };

//   const fetchNewsDataFromFirestore = async () => {
//     try {
//       const snapshot = await getDocs(collection(db, "All News Info"));
//       return snapshot.docs.map((doc) => doc.data());
//     } catch (error) {
//       console.log("Error fetching news data from Firestore:", error);
//       return [];
//     }
//   };

//   return (
//     <div>
//       <h1>News</h1>
//       {newsData.map((article, index) => (
//         <div key={index}>
//           <h2>{article.Title}</h2>
//           <p>{article.Content}</p>
//           <a href={article.URL}>Read More</a>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default DataFromApi;

import React, { useEffect } from "react";
import firebaseConfig from "./config";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  writeBatch,
  doc,
} from "firebase/firestore";

function DataFromApi() {
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  const API_URL =
    "https://gnews.io/api/v4/top-headlines?category=sports&lang=en&country=in&max=10&apikey=a9c273c9a3850d41ec388598454404f3";

  useEffect(() => {
    const fetchData = async () => {
      // Check if 6 hours have passed since the last API call
      const lastApiCall = localStorage.getItem("lastApiCall");
      const currentTime = new Date().getTime();
      const sixHours = 3 * 60 * 60 * 1000; // 3 hours in milliseconds

      if (!lastApiCall || currentTime - lastApiCall > sixHours) {
        // Make API call
        await fetchNewsData();
      } else {
        console.log("Do Nothing FROM API");
      }
    };

    fetchData();
  }, []);

  const fetchNewsData = async () => {
    console.log("FETCHING FROM API");
    try {
      const response = await fetch(API_URL);
      const { articles } = await response.json();

      // Clear existing data in Firestore
      const snapshot = await getDocs(collection(db, "All News Info"));
      snapshot.forEach((doc) => {
        deleteDoc(doc.ref);
      });
      // Store data in Firestore
      const batch = writeBatch(db);
      articles.slice(0, 10).forEach((article, index) => {
        const docRef = doc(collection(db, "All News Info"), `news-${index}`);
        batch.set(docRef, {
          Content: article.content,
          Title: article.title,
          URL: article.url,
          imageURL: article.image,
          publishedAt: article.source.name,
        });
      });
      await batch.commit();

      // Save the current timestamp in local storage
      localStorage.setItem("lastApiCall", new Date().getTime());
    } catch (error) {
      console.log("Error fetching news data:", error);
    }
  };

  return null; // Render nothing
}

export default DataFromApi;
