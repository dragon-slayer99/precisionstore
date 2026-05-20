import { useEffect, useState } from "react";
import "./ApiFetch.css";

function Demo() {
  const ACCESS_KEY = "ruIcRaewAd7MUooRHOR4V4eHwXaO5q7UsHrERG4hml4";
  const [imageLinks, setImageLinks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async function fetchLogic() {
      try {
        const linksArr = [];
        const response = await fetch(
          `https://api.unsplash.com/photos/?page=${Math.ceil(Math.random() * 10)}`,
          {
            method: "GET",
            headers: {
              Authorization: `Client-ID ${ACCESS_KEY}`,
              "Content-Type": "application/json",
            },
          },
        );
        const data = await response.json();
        console.log(data);
        data.map((res) => {
          const {
            id,
            urls: { regular: link },
          } = res;
          linksArr.push({ id: id, link: link });
        });
        setImageLinks(linksArr);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return (
    <div className="iamge-gallery">
      {isLoading
        ? "Loading....."
        : imageLinks.map(({ id, link }, idx) => (
            <div className="gallery-item" key={id}>
              <img src={link} className="gallery-image" />
            </div>
          ))}
    </div>
  );
}

export default Demo;
