import * as React from "react";
import "./homePage.css";
import Carousel from "@itseasy21/react-elastic-carousel";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import heroimg from "../assets/HomePage_Hero_img.png";
import herimgdots from "../assets/homepage-dots.png";
import whychooseus from "../assets/whyChoseUs.png";
import ceoimg from "../assets/sandeep-sir.png";
import client1 from "../assets/client1.png";
import client2 from "../assets/client2.png";
import client3 from "../assets/client3.png";
import client4 from "../assets/client4.png";
import client5 from "../assets/client5.png";

const data = [
  {
    id: "1",
    logo: client1,
    head: "Design Rank Impress",
    description:
      "KIT embodies an extraordinary fusion of professionalism and approachability, leaving us thoroughly delighted with the exceptional work.",
  },
  {
    id: "2",
    logo: client2,
    head: "Soar with SEO",
    description:
      "We are truly delighted to collaborate with the team. Their exceptional expertise and professionalism have truly distinguished them.",
  },
  {
    id: "3",
    logo: client3,
    head: "Outdated to Outstanding",
    description:
      "We've just finalized a website redesign, reasonably priced. Now boasting a sleek, modern design, we anticipate increased business engagement.",
  },
  {
    id: "4",
    logo: client4,
    head: "Engage, Boost, Succeed",
    description:
      "From the inaugural consultation, KIT adeptly discerned our requirements, delivering professional-grade results that surpassed expectations.",
  },
  {
    id: "5",
    logo: client5,
    head: "Co-ordination at the best",
    description:
      "Mr. Sandeep Banavasi serves as the cornerstone of the company, providing strategic direction, making pivotal corporate decisions of the organization.",
  },
];
function HomePage(props) {
  const navigate = useNavigate();

  useEffect(() => {
    //Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
    if (document.getElementsByClassName("rec-arrow")[0]) {
      document.getElementsByClassName("rec-arrow")[0].innerText = "";
      document.getElementsByClassName("rec-arrow-right")[0].innerHTML =
        '<i class="fa-solid fa-arrow-right"></i>';
      document.getElementsByClassName("rec-arrow-left")[0].innerHTML =
        '<i class="fa-solid fa-arrow-left"></i>';
    }
  }, []);

  const [items, setItems] = useState(window.innerWidth <= 600 ? 1 : 2);

  useEffect(() => {
    function handleResize() {
      setItems(window.innerWidth <= 600 ? 1 : 2);
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <main className="w-100 h-100 container-fluid ">
        <div className="row d-flex flex-column-reverse flex-sm-row py-5">
          <div className="col-12 col-sm-5 homepage-section1 ">
            <div className="homediv-13">
              <div className="fs-5 fw-bold homediv-14">We Are</div>
              <div className="container">
                <div
                  className="fs-3 fw-bold homediv-15"
                  style={{ color: "#0A161C" }}
                >
                  Creators{" "}
                </div>
                <div className="fs-3 fw-bold homediv-15">Designers </div>
                <div
                  className="fs-3 fw-bold homediv-15"
                  style={{ color: "#042636" }}
                >
                  Developers{" "}
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-center flex-column homediv-16 mt-4">
              Your trusted partner in IT services and solutions. With a passion
              for technology and a commitment to excellence, we have been
              providing cutting-edge IT services to business.
              <button
                className="get-started-button mt-5"
                onClick={() => navigate("/services")}
              >
                Get Started
              </button>
            </div>
          </div>
          <div className="col-12 col-sm-7 homepage-section1">
            <div className="d-flex justify-content-center">
              <img
                className="align-self-start top-dots homepage-dots"
                src={herimgdots}
                alt=""
              />
              <img className="hero-img" src={heroimg} alt="" />
              <img
                className="align-self-end bottom-dots homepage-dots"
                src={herimgdots}
                alt=""
              />
            </div>
          </div>
        </div>
      </main>
      <section className="container-fluid bg-white">
        <div className="row">
          <div className="col-12 col-sm-6 my-3 my-sm-5 pt-5">
            <img
              loading="lazy"
              className="w-75 mx-5"
              src={whychooseus}
              alt="image"
            />
          </div>
          <div className="col-12 col-sm-6 mt-2 mt-sm-4 pt-2 pt-sm-5">
            <h3 className="text-center">Why Choose Us?</h3>
            <ul className="fs-5 my-2">
              <li>
                We Design product requirements from clients considering time and
                budget Constraints, Design modularity and product robustness.
              </li>
              <li>
                We have a proven methodology, We’ve developed and refined our
                methods over many years, so you can expect our services and
                projects to be delivered consistently. Our numerous years of
                experience have always made us aware and considerate in putting
                our best foot forward during the work process so our clients can
                get the best.
              </li>
              <li>
                We listen, suggest, and update. We understand that although
                there are common themes, each business is different and has its
                own special needs.
              </li>
              <li>
                We are providing reliable and user friendly services,
                maintenance, updating, repairs and fix issues in software.
              </li>
              <li>
                We prioritise your satisfaction and work closely with you to
                understand your specific needs, ensuring that our services are
                tailored to your requirements.
              </li>
            </ul>
          </div>
        </div>
      </section>
      
      <div className="row">
        <section className="what-client-says-section py-1 py-sm-5">
          <div className="col what-client-says-animation pb-2 pb-sm-5">
            <h2 className="fw-bold fs-3 text-center my-3 my-sm-5">
              What Client Says
            </h2>
            <div className="mx-3">
              <Carousel
                itemsToShow={items}
                showArrows={true}
                pagination={false}
              >
                {data.map((item, i) => (
                  <div className="d-flex">
                    <div className="fs-5 justify-content-center overflow-auto testimonial-card-container">
                      <div className="d-flex fw-bold justify-content-center mt-4 mx-4">
                        <img src={item.logo} loading="lazy" />
                      </div>
                      <div className="mt-4 mx-4 py-3 what-client-says-font">
                        <i class="fa fa-quote-left mx-2" aria-hidden="true"></i>
                        {item.description}
                        <i
                          class="fa fa-quote-right mx-2"
                          aria-hidden="true"
                        ></i>
                      </div>
                    </div>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </section>
      </div>

      <section className="container-fluid bg-white">
        <div className="row">
          <div className="col-12 col-sm-6 d-flex justify-content-center align-items-center my-3 my-sm-5">
            <img className="w-50 mt-3 mt-sm-4" src={ceoimg} alt="CEO image" />
          </div>
          <div
            className="col-12 col-sm-6 my-3 my-sm-5 d-flex flex-column align-items-center align-items-sm-start
                  "
          >
            <p className="fst-italic js-nametag mx-4 px-2">
              Sandeep Banavasi, CEO
            </p>
            <div className="fs-5 mt-auto pb-3 line-height-1">
              <ul>
                My team aim to build a strong and profitable made service by
                delivering to our customers a professional services that are
                always fair, efficient, helpful and responsive.
                <li className="mt-2">
                  We are committed to building loyalty to our customers and
                  ensuring that the satisfaction of their needs is central to
                  everything we do.
                </li>
                <li>
                  We are committed to creating an environment where we can take
                  pride in ourselves, our colleagues and our company.
                </li>
                <li>
                  Our team consists of highly skilled professionals with
                  extensive experience in the IT industry. We stay up to date
                  with the latest trends and technologies to provide you with
                  the best solutions.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;
