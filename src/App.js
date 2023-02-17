import "./App.css";
import React from "react";
import { useNewsContext } from "./CreateContext";
import { useEffect } from "react";
function App() {
  let { isLoading, article, getArticle } = useNewsContext();
  useEffect(() => {
    getArticle();
  }, []);
  return (
    <>
      <div className="container">
        <h4>News</h4>
        {isLoading ? (
          article.map((news, index) => {
            return (
              <div key={index}>
                <div className="col-10">
                  <div className="row mb-3">
                    <div className="card mb-3" style={{ maxWidth: "1000px" }}>
                      <div className="row no-gutters">
                        <div
                          className="col-md-4 "
                          style={{ paddingLeft: "0px" }}
                        >
                          <img
                            src={news.urlToImage}
                            className="card-img"
                            alt="...."
                            height="200px"
                          />
                        </div>
                        <div className="col-md-8">
                          <div className="card-body">
                            <h5 className="card-title">{news.title}</h5>
                            <p className="card-text">{news.content}</p>
                            <p className="card-text">
                              <small class="text-muted">
                                <a href={news.url}>Read more</a>
                              </small>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="spinner-border"></div>
        )}
      </div>
    </>
  );
}

export default App;
