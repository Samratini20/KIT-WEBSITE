import * as React from "react";
import serviceImg from '../assets/serviceImg.jpg'
import Img1 from '../assets/servicesImg_1.jpg';
import Img2 from '../assets/servicesImg_2.jpg';
import './servicePage.css';
import { useEffect } from "react";

const quality = 80;
function ServicePage(props) {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="bg-white overflow-hidden sdiv">
        <img
            loading="lazy"
            src={Img1}
            className="serviceimg-1"
          />
        <div className="sdiv-11 overflow-y-hidden">
          <div className="sdiv-12">
            <div className="sdiv-13">
              <div className="sdiv-17">Powerful Solution For Your Business</div>
            </div>
            <div className="sdiv-18">
              <div className="sdiv-19">
                Unlock Success with Our Powerful Business Solutions – Elevate
                Your Performance Today!
              </div>
              <div className="sdiv-20">
                <div className="sdiv-21">Quality Services</div>
                <div className="sdiv-22">{quality}%</div>
              </div>
              <div className="sdiv-23" />
              <div className="sdiv-24">
                <div className="sdiv-25">Experienced technicians</div>
                <div className="sdiv-26">95%</div>
              </div>
              <div className="sdiv-27" />
              <div className="sdiv-28">
                <div className="sdiv-29">Long term warranty</div>
                <div className="sdiv-30">75%</div>
              </div>
              <div className="sdiv-31" />
            </div>
          </div>
          <img
            loading="lazy"
            src={serviceImg}
            className="simg-2"
          />
          <img
              loading="lazy"
              src={Img2}
              className="serviceimg-2"
            />
        </div>
        <div className="sdiv-33">
          <div className="sdiv-34">
            <div className="sdiv-35">
              <div className="scolumn">
                <div className="sdiv-36">
                  <div className="sdiv-37">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/f398ca9cf3ee0e20a18e2851910ae265c7498518bdc9f918aa61cec1f5d66a65?apiKey=9d6521b3bd494d48816871a061465c45&"
                      className="simg-3"
                    />
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/e391911dd819b3c01eb6f8f0e6f48b07f6151987ceb8af18497c4bffdbe73123?apiKey=9d6521b3bd494d48816871a061465c45&"
                      className="simg-4"
                    />
                  </div>
                  <div className="sdiv-38" />
                </div>
              </div>
              <div className="scolumn-2">
                <div className="sdiv-39">
                  <div className="sdiv-40">
                    We Provide Awesome Services For You
                  </div>
                  <div className="sdiv-41">
                    &quot;Elevate Your Experience with Our Services – Your
                    Success, Our Priority!&quot;
                  </div>
                  <div className="mt-5 sdiv-42">
                    <a href="https://wa.me/919686112338" style={{backgroundColor:'#005e8d'}}
                        className="chatwithusbutton" target='_blank'>Chat With Us</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sdiv-43">What We Provide</div>
        <div className="d-flex flex-column">
        <div className="d-flex justify-content-center mx-auto sdiv-44">
          <div className="sdiv-45">
            <div className="scolumn">
              <div className="sdiv-46">
                <div className="sdiv-47">IT Services</div>
                <div className="mb-5 sdiv-48">
                  Proactive monitoring, maintenance, and support for your IT
                  infrastructure, ensuring optimal performance and minimal
                  downtime..
                </div>
                
              </div>
            </div>
            <div className="scolumn-3">
              <div className="sdiv-51">
                <div className="sdiv-52">Software Development</div>
                <div className="sdiv-53">
                  Custom software development for web and mobile applications,
                  tailored to your unique requirements.
                </div>
                
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center mx-auto  sdiv-56">
          <div className="sdiv-57">
            <div className="scolumn">
              <div className="sdiv-58">
                <div className="sdiv-59">Web design and development</div>
                <div className="sdiv-60 mb-5">
                  Build and optimize user-friendly websites that drive
                  conversions and enhance user experience.
                </div>
                
              </div>
            </div>
            <div className="scolumn-4">
              <div className="sdiv-63">
                <div className="sdiv-64">Social Media Marketing</div>
                <div className="sdiv-65 mb-5">
                  Engage your audience and build brand awareness through
                  strategic social media campaigns.
                </div>
                
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center mx-auto sdiv-68">
          <div className="sdiv-69">
            <div className="scolumn">
              <div className="sdiv-70">
                <div className="sdiv-71">Search Engine Optimization</div>
                <div className="sdiv-72 mb-5">
                  Improve your online visibility and organic search rankings to
                  attract more website traffic.
                </div>
                
              </div>
            </div>
            <div className="scolumn-5">
              <div className="sdiv-75">
                <div className="sdiv-76">Pay-Per-Click Advertising</div>
                <div className="sdiv-77 mb-5">
                  Create targeted ad campaigns on search engines and social
                  media platforms for instant visibility.
                </div>
                
              </div>
            </div>
          </div>
        </div>
        </div>
        <div className="sdiv-80">
          <div className="sdiv-81">
            <div className="scolumn-6">
              <div className="sdiv-82">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/65f574d02031eb918a6f9899e2bf1af1a8c57fd2ce4c930e378b1d4a97bea0eb?apiKey=9d6521b3bd494d48816871a061465c45&"
                  className="simg-11"
                />
                <div className="sdiv-83">1. Planning & Research</div>
                <div className="sdiv-84">
                  We meticulously chart the course for your IT success, ensuring
                  strategic precision every step of the way.
                </div>
              </div>
            </div>
            <div className="scolumn-7">
              <div className="sdiv-85">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/8420412c2456f4783139b209f0434cc18d36b1812f4583c252e9b4b12dec7b5f?apiKey=9d6521b3bd494d48816871a061465c45&"
                  className="simg-12"
                />
                <div className="sdiv-86">2. Optimizing</div>
                <div className="sdiv-87">
                  We meticulously chart the course for your IT success, ensuring
                  strategic precision every step of the way.
                </div>
              </div>
            </div>
            <div className="scolumn-8">
              <div className="sdiv-88">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/b28d2daa6dcd9b587194788ad49fc2e2ba85979ce4d535479615b09b3d6df616?apiKey=9d6521b3bd494d48816871a061465c45&"
                  className="simg-13"
                />
                <div className="sdiv-89">3. Result</div>
                <div className="sdiv-90">
                  We meticulously chart the course for your IT success, ensuring
                  strategic precision every step of the way.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default ServicePage;



