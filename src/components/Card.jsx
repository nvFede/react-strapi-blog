import React from "react";
import { Link } from "react-router-dom";
import Arrow from "./atoms/Arrow";

const Card = ({data}) => {

    
    const articles = data.data
    
//   const articles = [
//     {
//       id: 1,
//       title: "What is the best?",
//       description: "It's a lot like a lot of people who are interested in.",
//       link: "https://www.are.na/are-na",
//       image: "https://www.fillmurray.com/640/360",
//       imageAlt: "are.na",
//     },
//     {
//       id: 2,
//       title: "What is the best?",
//       description: "It's a lot like a lot of people who are interested in.",
//       link: "https://www.are.na/are-na",
//       image: "https://loremflickr.com/640/360",
//       imageAlt: "are.na",
//     },
//     {
//       id: 3,
//       title: "What is the best?",
//       description: "It's a lot like a lot of people who are interested in.",
//       link: "https://www.are.na/are-na",
//       image: "https://placekitten.com/640/360",
//       imageAlt: "are.na",
//     },
//   ];

  const getSlug = (str) => {
    return str.replaceAll(" ", "-");
  };

  return (
    <>
      {articles.map((article) => {
        console.log(article)
        return (
          <Link to={`/single/${article.id}`} key={article.id}>
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
              <img
                className="rounded-t-lg"
                src={`http://localhost:1337${article.attributes.featuredImage.data.attributes.url}`}
                alt={article.attributes.imageAlt}
              />
              <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {article.attributes.blogTitle}
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {article.attributes.blogSubtitle}
                </p>
                <button
                  href="#"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Read more
                  <Arrow />
                </button>
              </div>
            </div>
          </Link>
        );
      })}
    </>
  );
};

export default Card;
