import * as React from "react";
import './servicePage.css';
import serviceImg from '../assets/serviceImg.jpg'
import Img1 from '../assets/servicesImg_1.jpg';
import Img2 from '../assets/servicesImg_2.jpg';

const quality = 80;
function ServicePage(props) {
  return (
    <>
      <div className="sdiv">
        {/* <div className="div-2">
          <div className="div-3">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/8f46a3395a58684b7a7a37d57be145cb33c1b586205f87107c340503679ba4dd?apiKey=9d6521b3bd494d48816871a061465c45&"
              className="img"
            />
          </div>
          <div className="div-4">Services</div>
          <div className="div-5">
            <div className="div-6"><a href="/" className='home'>Home</a></div>
            <div className="div-7"><a href="/about" className='aboutUs'>About Us</a></div>
            <div className="div-8"><a href="/services" className='services'>Services</a></div>
            <div className="div-9"><a href="/blog" className='blog'>Blog</a></div>
            <div className="div-10"><a href="/contact" className='contactUs'>Contact Us</a></div>
          </div>
        </div> */}
        <img
            loading="lazy"
            src={Img1}
            className="serviceimg-1"
          />
        <div className="sdiv-11">
          <div className="sdiv-12">
            <div className="sdiv-13">
              {/* <div className="sdiv-14">
                <div className="sdiv-15" />
                <div className="sdiv-16" />
              </div> */}
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
            //srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/4a7451af1abba26a27fd362a2e739db91b34d21fdb46ed8677fae2f44e6dc3ce?apiKey=9d6521b3bd494d48816871a061465c45&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/4a7451af1abba26a27fd362a2e739db91b34d21fdb46ed8677fae2f44e6dc3ce?apiKey=9d6521b3bd494d48816871a061465c45&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4a7451af1abba26a27fd362a2e739db91b34d21fdb46ed8677fae2f44e6dc3ce?apiKey=9d6521b3bd494d48816871a061465c45&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/4a7451af1abba26a27fd362a2e739db91b34d21fdb46ed8677fae2f44e6dc3ce?apiKey=9d6521b3bd494d48816871a061465c45&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/4a7451af1abba26a27fd362a2e739db91b34d21fdb46ed8677fae2f44e6dc3ce?apiKey=9d6521b3bd494d48816871a061465c45&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4a7451af1abba26a27fd362a2e739db91b34d21fdb46ed8677fae2f44e6dc3ce?apiKey=9d6521b3bd494d48816871a061465c45&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/4a7451af1abba26a27fd362a2e739db91b34d21fdb46ed8677fae2f44e6dc3ce?apiKey=9d6521b3bd494d48816871a061465c45&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/4a7451af1abba26a27fd362a2e739db91b34d21fdb46ed8677fae2f44e6dc3ce?apiKey=9d6521b3bd494d48816871a061465c45&"
            className="simg-2"
          />
          <img
              loading="lazy"
              src={Img2}
              className="serviceimg-2"
            />
          {/* <div className="sdiv-32" />
            <img
              loading="lazy"
              src={Img2}
              className="serviceimg-2"
            />   */}
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
                  <div className="sdiv-42">
                    <a href="https://www.facebook.com/learnbuildteach/"
                        className="chatUs">Chat With Us</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sdiv-43">What We Provide</div>
        <div className="sdiv-44">
          <div className="sdiv-45">
            <div className="scolumn">
              <div className="sdiv-46">
                <div className="sdiv-47">IT Services</div>
                <div className="sdiv-48">
                  Proactive monitoring, maintenance, and support for your IT
                  infrastructure, ensuring optimal performance and minimal
                  downtime..
                </div>
                <div className="sdiv-49">
                Chat With Us
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/485a59bc2ea419144f3efadd7aefa2d6e76696ec0f28329be7e7ccfa56c543fc?apiKey=9d6521b3bd494d48816871a061465c45&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/485a59bc2ea419144f3efadd7aefa2d6e76696ec0f28329be7e7ccfa56c543fc?apiKey=9d6521b3bd494d48816871a061465c45&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/485a59bc2ea419144f3efadd7aefa2d6e76696ec0f28329be7e7ccfa56c543fc?apiKey=9d6521b3bd494d48816871a061465c45&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/485a59bc2ea419144f3efadd7aefa2d6e76696ec0f28329be7e7ccfa56c543fc?apiKey=9d6521b3bd494d48816871a061465c45&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/485a59bc2ea419144f3efadd7aefa2d6e76696ec0f28329be7e7ccfa56c543fc?apiKey=9d6521b3bd494d48816871a061465c45&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/485a59bc2ea419144f3efadd7aefa2d6e76696ec0f28329be7e7ccfa56c543fc?apiKey=9d6521b3bd494d48816871a061465c45&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/485a59bc2ea419144f3efadd7aefa2d6e76696ec0f28329be7e7ccfa56c543fc?apiKey=9d6521b3bd494d48816871a061465c45&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/485a59bc2ea419144f3efadd7aefa2d6e76696ec0f28329be7e7ccfa56c543fc?apiKey=9d6521b3bd494d48816871a061465c45&"
                    className="simg-5"
                  />
                  <div className="sdiv-50" />
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
                <div className="sdiv-54">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/485a59bc2ea419144f3efadd7aefa2d6e76696ec0f28329be7e7ccfa56c543fc?apiKey=9d6521b3bd494d48816871a061465c45&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/485a59bc2ea419144f3efadd7aefa2d6e76696ec0f28329be7e7ccfa56c543fc?apiKey=9d6521b3bd494d48816871a061465c45&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/485a59bc2ea419144f3efadd7aefa2d6e76696ec0f28329be7e7ccfa56c543fc?apiKey=9d6521b3bd494d48816871a061465c45&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/485a59bc2ea419144f3efadd7aefa2d6e76696ec0f28329be7e7ccfa56c543fc?apiKey=9d6521b3bd494d48816871a061465c45&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/485a59bc2ea419144f3efadd7aefa2d6e76696ec0f28329be7e7ccfa56c543fc?apiKey=9d6521b3bd494d48816871a061465c45&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/485a59bc2ea419144f3efadd7aefa2d6e76696ec0f28329be7e7ccfa56c543fc?apiKey=9d6521b3bd494d48816871a061465c45&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/485a59bc2ea419144f3efadd7aefa2d6e76696ec0f28329be7e7ccfa56c543fc?apiKey=9d6521b3bd494d48816871a061465c45&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/485a59bc2ea419144f3efadd7aefa2d6e76696ec0f28329be7e7ccfa56c543fc?apiKey=9d6521b3bd494d48816871a061465c45&"
                    className="simg-6"
                  />
                  <div className="sdiv-55" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sdiv-56">
          <div className="sdiv-57">
            <div className="scolumn">
              <div className="sdiv-58">
                <div className="sdiv-59">Web design and development</div>
                <div className="sdiv-60">
                  Build and optimize user-friendly websites that drive
                  conversions and enhance user experience.
                </div>
                <div className="sdiv-61">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/485a59bc2ea419144f3efadd7aefa2d6e76696ec0f28329be7e7ccfa56c543fc?apiKey=9d6521b3bd494d48816871a061465c45&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/485a59bc2ea419144f3efadd7aefa2d6e76696ec0f28329be7e7ccfa56c543fc?apiKey=9d6521b3bd494d48816871a061465c45&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/485a59bc2ea419144f3efadd7aefa2d6e76696ec0f28329be7e7ccfa56c543fc?apiKey=9d6521b3bd494d48816871a061465c45&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/485a59bc2ea419144f3efadd7aefa2d6e76696ec0f28329be7e7ccfa56c543fc?apiKey=9d6521b3bd494d48816871a061465c45&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/485a59bc2ea419144f3efadd7aefa2d6e76696ec0f28329be7e7ccfa56c543fc?apiKey=9d6521b3bd494d48816871a061465c45&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/485a59bc2ea419144f3efadd7aefa2d6e76696ec0f28329be7e7ccfa56c543fc?apiKey=9d6521b3bd494d48816871a061465c45&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/485a59bc2ea419144f3efadd7aefa2d6e76696ec0f28329be7e7ccfa56c543fc?apiKey=9d6521b3bd494d48816871a061465c45&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/485a59bc2ea419144f3efadd7aefa2d6e76696ec0f28329be7e7ccfa56c543fc?apiKey=9d6521b3bd494d48816871a061465c45&"
                    className="simg-7"
                  />
                  <div className="sdiv-62" />
                </div>
              </div>
            </div>
            <div className="scolumn-4">
              <div className="sdiv-63">
                <div className="sdiv-64">Social Media Marketting</div>
                <div className="sdiv-65">
                  Engage your audience and build brand awareness through
                  strategic social media campaigns.
                </div>
                <div className="sdiv-66">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/485a59bc2ea419144f3efadd7aefa2d6e76696ec0f28329be7e7ccfa56c543fc?apiKey=9d6521b3bd494d48816871a061465c45&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/485a59bc2ea419144f3efadd7aefa2d6e76696ec0f28329be7e7ccfa56c543fc?apiKey=9d6521b3bd494d48816871a061465c45&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/485a59bc2ea419144f3efadd7aefa2d6e76696ec0f28329be7e7ccfa56c543fc?apiKey=9d6521b3bd494d48816871a061465c45&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/485a59bc2ea419144f3efadd7aefa2d6e76696ec0f28329be7e7ccfa56c543fc?apiKey=9d6521b3bd494d48816871a061465c45&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/485a59bc2ea419144f3efadd7aefa2d6e76696ec0f28329be7e7ccfa56c543fc?apiKey=9d6521b3bd494d48816871a061465c45&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/485a59bc2ea419144f3efadd7aefa2d6e76696ec0f28329be7e7ccfa56c543fc?apiKey=9d6521b3bd494d48816871a061465c45&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/485a59bc2ea419144f3efadd7aefa2d6e76696ec0f28329be7e7ccfa56c543fc?apiKey=9d6521b3bd494d48816871a061465c45&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/485a59bc2ea419144f3efadd7aefa2d6e76696ec0f28329be7e7ccfa56c543fc?apiKey=9d6521b3bd494d48816871a061465c45&"
                    className="simg-8"
                  />
                  <div className="sdiv-67" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sdiv-68">
          <div className="sdiv-69">
            <div className="scolumn">
              <div className="sdiv-70">
                <div className="sdiv-71">Search Engine Optimization</div>
                <div className="sdiv-72">
                  Improve your online visibility and organic search rankings to
                  attract more website traffic.
                </div>
                <div className="sdiv-73">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/485a59bc2ea419144f3efadd7aefa2d6e76696ec0f28329be7e7ccfa56c543fc?apiKey=9d6521b3bd494d48816871a061465c45&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/485a59bc2ea419144f3efadd7aefa2d6e76696ec0f28329be7e7ccfa56c543fc?apiKey=9d6521b3bd494d48816871a061465c45&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/485a59bc2ea419144f3efadd7aefa2d6e76696ec0f28329be7e7ccfa56c543fc?apiKey=9d6521b3bd494d48816871a061465c45&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/485a59bc2ea419144f3efadd7aefa2d6e76696ec0f28329be7e7ccfa56c543fc?apiKey=9d6521b3bd494d48816871a061465c45&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/485a59bc2ea419144f3efadd7aefa2d6e76696ec0f28329be7e7ccfa56c543fc?apiKey=9d6521b3bd494d48816871a061465c45&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/485a59bc2ea419144f3efadd7aefa2d6e76696ec0f28329be7e7ccfa56c543fc?apiKey=9d6521b3bd494d48816871a061465c45&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/485a59bc2ea419144f3efadd7aefa2d6e76696ec0f28329be7e7ccfa56c543fc?apiKey=9d6521b3bd494d48816871a061465c45&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/485a59bc2ea419144f3efadd7aefa2d6e76696ec0f28329be7e7ccfa56c543fc?apiKey=9d6521b3bd494d48816871a061465c45&"
                    className="simg-9"
                  />
                  <div className="sdiv-74" />
                </div>
              </div>
            </div>
            <div className="scolumn-5">
              <div className="sdiv-75">
                <div className="sdiv-76">Pay-Per-Click Advertising</div>
                <div className="sdiv-77">
                  Create targeted ad campaigns on search engines and social
                  media platforms for instant visibility.
                </div>
                <div className="sdiv-78">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/485a59bc2ea419144f3efadd7aefa2d6e76696ec0f28329be7e7ccfa56c543fc?apiKey=9d6521b3bd494d48816871a061465c45&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/485a59bc2ea419144f3efadd7aefa2d6e76696ec0f28329be7e7ccfa56c543fc?apiKey=9d6521b3bd494d48816871a061465c45&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/485a59bc2ea419144f3efadd7aefa2d6e76696ec0f28329be7e7ccfa56c543fc?apiKey=9d6521b3bd494d48816871a061465c45&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/485a59bc2ea419144f3efadd7aefa2d6e76696ec0f28329be7e7ccfa56c543fc?apiKey=9d6521b3bd494d48816871a061465c45&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/485a59bc2ea419144f3efadd7aefa2d6e76696ec0f28329be7e7ccfa56c543fc?apiKey=9d6521b3bd494d48816871a061465c45&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/485a59bc2ea419144f3efadd7aefa2d6e76696ec0f28329be7e7ccfa56c543fc?apiKey=9d6521b3bd494d48816871a061465c45&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/485a59bc2ea419144f3efadd7aefa2d6e76696ec0f28329be7e7ccfa56c543fc?apiKey=9d6521b3bd494d48816871a061465c45&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/485a59bc2ea419144f3efadd7aefa2d6e76696ec0f28329be7e7ccfa56c543fc?apiKey=9d6521b3bd494d48816871a061465c45&"
                    className="simg-10"
                  />
                  <div className="sdiv-79" />
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
        {/* <div className="div-91">
          <div className="div-92">
            <div className="div-93">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/3c74fc2378d040de3dbfe4aebcdb841400b2d8283433cd1c68ea95856c577066?apiKey=9d6521b3bd494d48816871a061465c45&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/3c74fc2378d040de3dbfe4aebcdb841400b2d8283433cd1c68ea95856c577066?apiKey=9d6521b3bd494d48816871a061465c45&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3c74fc2378d040de3dbfe4aebcdb841400b2d8283433cd1c68ea95856c577066?apiKey=9d6521b3bd494d48816871a061465c45&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/3c74fc2378d040de3dbfe4aebcdb841400b2d8283433cd1c68ea95856c577066?apiKey=9d6521b3bd494d48816871a061465c45&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/3c74fc2378d040de3dbfe4aebcdb841400b2d8283433cd1c68ea95856c577066?apiKey=9d6521b3bd494d48816871a061465c45&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3c74fc2378d040de3dbfe4aebcdb841400b2d8283433cd1c68ea95856c577066?apiKey=9d6521b3bd494d48816871a061465c45&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/3c74fc2378d040de3dbfe4aebcdb841400b2d8283433cd1c68ea95856c577066?apiKey=9d6521b3bd494d48816871a061465c45&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/3c74fc2378d040de3dbfe4aebcdb841400b2d8283433cd1c68ea95856c577066?apiKey=9d6521b3bd494d48816871a061465c45&"
                className="simg-14"
              />
              <div className="div-94">
                <div className="div-95">Quick Links</div>
                <div className="div-96">Home</div>
                <div className="div-97">About Us</div>
                <div className="div-98">Services</div>
                <div className="div-99">Blog</div>
                <div className="div-100">Contact Us</div>
              </div>
            </div>
            <div className="div-101">
              <div className="div-102">Company</div>
              <div className="div-103">Terms & Conditions</div>
              <div className="div-104">Privacy Policy</div>
            </div>
            <div className="div-105">
              <div className="div-106">Follow Us On</div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/81be97afd1ee084eae17e05f83cd06c7c07b1e2d38d4506073a6c3d5c61f549f?apiKey=9d6521b3bd494d48816871a061465c45&"
                className="simg-15"
              />
            </div>
            <div className="div-107">
              <div className="div-108">Newsletter</div>
              <div className="div-109">
                <div className="div-110">Email Address</div>
                <div className="div-111">Send</div>
              </div>
              <div className="div-112">
                Subscribe to our mailing list and get updates to your email
                inbox.
              </div>
            </div>
          </div>
          <div className="div-113">KIT Services © All Rights Reserved</div>
        </div> */}
      </div>
    </>
  );
}
export default ServicePage;



