import React, { useEffect, useState } from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Card from "../Components/Card";
import axios from "axios";
export default function Home() {
  const [foodcat, setfoodcat] = useState([]);
  const [fooditem, setFoodItem] = useState([]);
  const [search, setsearch] = useState("");
  const handleData = async () => {
    try {
      const res = await axios.get("http://127.0.0.1:1200/api/foodItems");
      const data = await res.data;
      setFoodItem(data[0]);
      setfoodcat(data[1]);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    handleData();
  }, []);

  return (
    <>
      <div>
        <Navbar />
      </div>
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
        style={{ height: "45vh" }}
      >
        <div className="carousel-indicators">
          <div className="carousel-caption d-none d-md-block w-40">
            <div className="align-item-center">
              <input
                className="form-control mr-sm-0"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={search}
                onChange={(e) => setsearch(e.target.value)}
              />
            </div>
          </div>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>

        <div
          className="carousel-inner"
          style={{ height: "100%", objectFit: "cover" }}
        >
          <div className="carousel-item active">
            <img
              className="d-block w-100"
              src="https://source.unsplash.com/random/1152×250/?burger"
              alt="first slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="https://source.unsplash.com/random/1152×250/?pastery"
              alt="second slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="https://source.unsplash.com/random/1152×250/?barbeque"
              alt="Third slide"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="container-fluid">
        {foodcat !== [] ? (
          foodcat.map((data,i) => {
            return (
              <>
                <div key={i} className="fs-3 m-4 row">
                  {data.CategoryName}
                </div>
                <hr />
                <div className="row align-item-center m-5">
                  {fooditem !== [] ? (
                    fooditem
                      .filter((food) => {
                        return (
                          food.CategoryName === data.CategoryName &&
                          food.name
                            .toLowerCase()
                            .includes(search.toLocaleLowerCase())
                        );
                      })
                      .map((filter,i) => {
                        return (
                          <div
                            key={i}
                            className="col-md-6 col-lg-3 col-12 mb-4"
                            style={{ height: "47vh" }}
                          >
                            <Card
                              food={{
                                name: filter.name,
                                img: filter.img,
                                Option: filter.options[0],
                                description: filter.description,
                              }}
                            />
                          </div>
                        );
                      })
                  ) : (
                    <div>No data</div>
                  )}
                </div>
              </>
            );
          })
        ) : (
          <div>no categories</div>
        )}
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}
