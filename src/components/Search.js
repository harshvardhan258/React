import React, { useState, useEffect } from "react";

export default function Search() {
  const [term, setTerm] = useState("programming");
  const [debounceTerm, setDebounceTerm] = useState(term);
  const [results, setResults] = useState([]);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebounceTerm(term);
    }, 1000);
    return () => {
      clearTimeout(timerId);
    };
  }, [term]);

  useEffect(() => {
    const fetchSearchResult = async () => {
      const response = await fetch(
        `https://en.wikipedia.org/w/api.php?` +
          new URLSearchParams({
            action: "query",
            list: "search",
            origin: "*",
            format: "json",
            srsearch: debounceTerm, //"programming",
          }),
        { method: "GET" }
      );
      const result = await response.json();
      setResults(result.query.search);
    };

    fetchSearchResult();
  }, [debounceTerm]);

  const renderResults = results.map((result) => {
    return (
      <div className="item" key={result.pageid}>
        <div className="right floated content">
          <a
            className="ui button"
            href={`https://en.wikiedia.org?curid=${result.pageid}`}
          >
            Go
          </a>
        </div>
        <div className="content">
          <div className="header">{result.title}</div>
          {/* use dangerouslySetInnerHTML when erson who sent html can be trusted as there are some security concern around it */}
          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
          {/* {result.snippet} */}
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label htmlFor="">Enter Search Term</label>
          <input
            type="text"
            className="input"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
        </div>
      </div>
      <div className="">{renderResults}</div>
    </div>
  );
}
