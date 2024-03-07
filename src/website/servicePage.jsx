import * as React from "react";
import serviceimg1 from "../assets/servicepage_heroimg.jpg";
import serviceimg2 from "../assets/serviceimg2.jpg";
import "./servicePage.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function ServicePage(props) {
  const template = [
    {
      title: "IT Services",
      description:
        "Proactive monitoring, maintenance, and support for your IT infrastructure, ensuring optimal performance and minimal downtime..",
    },
    {
      title: "Software Development",
      description:
        "Custom software development for web and mobile applications, tailored to your unique requirements.",
    },
    {
      title: "Web Design and Development",
      description:
        "Build and optimize user-friendly websites that drive conversions and enhance user experience.",
    },
    {
      title: "Social Media Marketing",
      description:
        "Engage your audience and build brand awareness through strategic social media campaigns.",
    },
    {
      title: "Search Engine Optimization",
      description:
        "Improve your on visibility and organic search rankings to attract more website traffic.",
    },
    {
      title: "Pay-Per-Click Advertising",
      description:
        "Create targeted ad campaigns on search engines and social media platforms for instant visibility.",
    },
  ];
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <section className="container-fluid">
        <div className="row d-flex flex-column-reverse flex-sm-row">
          <div className="col-12 col-sm-6 service-page-section-1-part-1 d-flex flex-column justify-content-center px-3 px-sm-5 gap-3">
            <h3 className="mx-0 mx-sm-4">
              Powerful solution for your business
            </h3>
            <p className="mx-0 mx-sm-4 fs-5 fw-light">
              we're your research and go to organization. we do our best to
              provide service in timely manner so that you're on track to
              meeting your business goals
            </p>
          </div>
          <div className="col-12 col-sm-6 service-page-section-1-part-2 px-3 px-sm-5">
            <img className="w-100" src={serviceimg1} alt="serviceimg1" />
          </div>
        </div>
      </section>

      <section className="container-fluid mt-2 mt-sm-5 bg-primary-subtle">
        <div className="row d-flex">
          <div className="col-12 col-sm-6 my-3 my-sm-5 d-flex justify-content-center px-3 px-sm-5">
            <img className="w-100" src={serviceimg2} alt="serviceimg2" />
          </div>
          <div className="col-12 col-sm-6 d-flex flex-column justify-content-center px-3 px-sm-5 gap-3 my-3 my-sm-0">
            <h3 className="mx-0 mx-sm-4">
              We Provide Awesome Services For You
            </h3>
            <q className="mx-0 mx-sm-4 fs-5 fw-light">
              Elevate Your Experience with Our Services – Your Success, Our
              Priority!
            </q>
            <Link
              style={{ backgroundColor: "#005E8D", width: "fit-content" }}
              className="text-decoration-none text-white px-4 py-2 rounded-5 mx-0 mx-sm-4"
              to="/contact"
            >
              Chat with us
            </Link>
          </div>
        </div>
      </section>
      <section className="container-fluid d-flex flex-column align-items-center">
  <h2 className="text-center mt-3 mt-sm-5">What we provide</h2>
  <div className="row card-row">
    {template.map((data, i) => (
      <div className="col-12 col-sm-6 px-0 px-sm-5" key={i}>
        <div className="card border-0 bg-transparent">
          <div className="card-body card-border my-4">
            <h5 className="card-title">{data.title}</h5>
            <p className="card-text">{data.description}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
</section>
    </>
  );
}
export default ServicePage;
