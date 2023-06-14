import { useEffect, useState } from "react";

function Description() {
  const [quote, setQuote] = useState(null);
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    let isMounted = true; // Flag to track component mounting

    fetch("https://api.quotable.io/random?tags=sports")
      .then((response) => response.json())
      .then((data) => {
        if (isMounted) {
          setQuote(data.content);
          setAuthor(data.author);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    // Clean up function to set isMounted to false when the component unmounts
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div
      style={{
        // margin: "5% 0",
        top: "5%",
        textAlign: "center",
        backgroundColor: "#C2DEDC",
        margin: "5rem 3rem 3rem 3rem",
        padding: "5%",
        borderRadius: "20px",
        fontFamily: "'Montserrat','sans-serif'",
      }}
    >
      <h1>Shining a Spotlight on Sports </h1>
      <h2>Your source for latest News and Highlights</h2>
      <br />
      {quote ? (
        <div>
          <blockquote style={{ fontWeight: "bolder" }}>"{quote}"</blockquote>
          <h7>~{author}</h7>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Description;
