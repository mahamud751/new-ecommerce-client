import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
const options = {
  margin: 30,
  responsiveClass: true,
  //   nav: true,
  dots: true,
  autoplay: true,
  //   navText: ["Prev", "Next"],
  smartSpeed: 1000,
  responsive: {
    0: {
      items: 1,
    },
    400: {
      items: 1,
    },
    600: {
      items: 2,
    },
    700: {
      items: 3,
    },
    1000: {
      items: 4,
    },
  },
};
const Blog = () => {
  return (
    <div>
      <div className="blog blog-2 pt-25 pb-50">
        <div className="container">
          <div className="panel panel-2">
            <div className="heading text-center">
              <h2>Latest Blog</h2>
            </div>

            <OwlCarousel
              className="owl-main  owl-theme"
              items={4}
              loop={true}
              {...options}
            >
              <div className="single-blog">
                <div className="part-img">
                  <img src="assets/images/blog-img-1.jpg" alt="Image" />
                </div>
                <div className="part-txt">
                  <div className="tag-n-date">
                    <span>Shoping</span> <span>/</span>{" "}
                    <span>May 23, 2021</span>
                  </div>
                  <h3>
                    <a href="blog-details.html">
                      Commodo Sociosqu Venenatis Cras Dolor Sagittis Teger
                    </a>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing eli sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis
                  </p>
                </div>
              </div>
              <div className="single-blog">
                <div className="part-img">
                  <img src="assets/images/blog-img-2.jpg" alt="Image" />
                </div>
                <div className="part-txt">
                  <div className="tag-n-date">
                    <span>Shoping</span> <span>/</span>{" "}
                    <span>May 23, 2021</span>
                  </div>
                  <h3>
                    <a href="blog-details.html">
                      Commodo Sociosqu Venenatis Cras Dolor Sagittis Teger
                    </a>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing eli sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis
                  </p>
                </div>
              </div>
              <div className="single-blog">
                <div className="part-img">
                  <img src="assets/images/blog-img-3.jpg" alt="Image" />
                </div>
                <div className="part-txt">
                  <div className="tag-n-date">
                    <span>Shoping</span> <span>/</span>{" "}
                    <span>May 23, 2021</span>
                  </div>
                  <h3>
                    <a href="blog-details.html">
                      Commodo Sociosqu Venenatis Cras Dolor Sagittis Teger
                    </a>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing eli sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis
                  </p>
                </div>
              </div>
              <div className="single-blog">
                <div className="part-img">
                  <img src="assets/images/blog-img-4.jpg" alt="Image" />
                </div>
                <div className="part-txt">
                  <div className="tag-n-date">
                    <span>Shoping</span> <span>/</span>{" "}
                    <span>May 23, 2021</span>
                  </div>
                  <h3>
                    <a href="blog-details.html">
                      Commodo Sociosqu Venenatis Cras Dolor Sagittis Teger
                    </a>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing eli sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis
                  </p>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
