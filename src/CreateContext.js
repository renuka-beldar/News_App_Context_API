import { useState, createContext, useContext} from "react";
import axios from "axios";

const NewsContext = createContext();
export const NewsContextProvider = (Props) => {
  let { children } = Props;
  const [article, setArticle] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const getArticle = async () => {
    try {
      const response = await axios.get(
        `https://newsapi.org/v2/top-headlines?sources=engadget&apiKey=be8c5d2db3fe41e8935d30f6a4a667a0`
      );

      const newsData = response.data.articles;
      console.log(response.data.articles, "News");
      setArticle(newsData);
      setLoading(true);
    } catch (error) {
      console.log(error);
    }
  };
  let values = {
    article,
    isLoading,
    getArticle
  };
  return <NewsContext.Provider value={values}>{children }</NewsContext.Provider>;
};
export const useNewsContext = () => {
  return useContext(NewsContext);
};
