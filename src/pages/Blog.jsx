import React from "react";
import Card from "../components/Card";

const Blog = ({data}) => {

  
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-center max-w-[1024px]">
        <Card data={data} />
      
      </div>
    </>
  );
};

export default Blog;
