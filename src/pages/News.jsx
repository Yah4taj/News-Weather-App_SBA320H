import { useState, useEffect } from "react";

const News = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const url = `https://newsdata.io/api/1/latest?apikey=${import.meta.env.VITE_NEWSDATA_API_KEY}&q=UnitedStates`;

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Failed to fetch news");
        }
        const data = await response.json();
        setArticles(data.results || []); 
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [url]); // Run effect when `url` changes

  return (
    <div className="p-4">
      <h1 className="text-2l font-bold mb-4">Latest News</h1>
      
      {loading && <p>Loading news...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}

      {!loading && !error && articles.length === 0 && <p>No news available.</p>}

      <div className="grid gap-4">
        {articles.map((article, index) => (
          <div key={index} className="p-4 border rounded-lg shadow-md">
            <h2 className="text-lg font-semibold">{article.title}</h2>
            <p className="text-sm text-gray-600">{article.source_id}</p>
            <p className="mt-2">{article.description}</p>
            <a
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline mt-2 inline-block"
            >
              Read more
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
