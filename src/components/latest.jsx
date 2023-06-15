import React, { useEffect, useState } from "react";
import CardGroup from "react-bootstrap/CardGroup";
import CardL from "./card";
import firebaseConfig from "./config";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  query,
  getDocs,
  limit,
  orderBy,
} from "firebase/firestore";

function Latest() {
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const pageSize = 3; // Number of news articles to fetch per page
  const batchCount = 3; // Number of batches to display

  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    const fetchNewsData = async () => {
      try {
        const q = query(
          collection(db, "All News Info"),
          orderBy("publishedAt", "desc"),
          limit(pageSize * batchCount)
        );
        const snapshot = await getDocs(q);
        const data = snapshot.docs.map((doc) => doc.data());
        setNewsData(data);
      } catch (error) {
        console.log("Error fetching news data from Firestore:", error);
      }
    };

    fetchNewsData();
  }, []);

  return (
    <div style={{ padding: "0 5%", margin: "7% 0" }}>
      <h3
        style={{
          marginTop: "4%",
          marginLeft: "3%",
          fontWeight: "bold",
          fontFamily: "'Titillium Web', sans-serif",
          fontSize: "2.8rem",
          textAlign: "center",
        }}
      >
        Latest News
      </h3>
      <br />
      <br />

      {Array.from({ length: batchCount }, (_, index) => (
        <CardGroup key={index}>
          {newsData
            .slice(index * pageSize, (index + 1) * pageSize)
            .map((article, innerIndex) => (
              <CardL
                key={innerIndex}
                src={article.imageURL}
                from={article.publishedAt}
                head={article.Title}
                desc={article.Content.split(" ").slice(0, 30).join(" ") + "..."}
                URL={article.URL}
              />
            ))}
        </CardGroup>
      ))}
    </div>
  );
}

export default Latest;
