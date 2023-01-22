import { useQuery } from "@tanstack/react-query";
import React from "react";

const Category = () => {
  const { data: categories = [], refetch } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/api/category");
      const data = await res.json();
      return data;
    },
  });
  return (
    <div>
      <div className="popular-categories">
        <div className="container">
          <div className="panel">
            <div className="panel-header">
              <div className="row align-items-center g-lg-4 g-1">
                <div className="col-lg-6 col-9">
                  <h2 className="title">Explore Popular Categories</h2>
                </div>
                <div className="col-lg-6 col-3">
                  <div className="text-end">
                    <a href="shop.html" className="explore-section">
                      View more
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="panel-body">
              <div className="custom-row">
                {categories.map((category) => (
                  <div className="custom-col" key={category._id}>
                    <div className="category-card">
                      <div className="part-img">
                        <a href="shop.html">
                          <img src={category.img} alt="Image" />
                        </a>
                      </div>
                      <div className="part-txt">
                        <h3>
                          <a href="shop.html">{category.name}</a>
                        </h3>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
