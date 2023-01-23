import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Category = () => {
  // const { data: categories = [], refetch } = useQuery({
  //   queryKey: ["categories"],
  //   queryFn: async () => {
  //     const res = await fetch("http://localhost:5000/api/category");
  //     const data = await res.json();
  //     return data;
  //   },
  // });

  const [category, setCategory] = useState([]);
  async function getUser() {
    try {
      const response = await axios.get("http://localhost:5000/api/category");
      setCategory(response.data);
    } catch (error) {
      console.error(error);
    }
  }
  getUser();
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
                {category.map((category) => (
                  <div className="custom-col" key={category._id}>
                    <Link to={`/category/${category._id}`}>
                      <div className="category-card">
                        <div className="part-img">
                          <img src={category.img} alt="Image" />
                        </div>
                        <div className="part-txt">
                          <h3>{category.name}</h3>
                        </div>
                      </div>
                    </Link>
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
