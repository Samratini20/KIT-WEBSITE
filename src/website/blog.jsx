import React, { useState } from 'react';
import './blog.css'
import { useNavigate } from "react-router-dom";



function Blog(props) {
  const [searchItem, setSearchItem] = useState('');


  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchItem(value);
    //onSearch(value);
    
  };

  const date = new Date();
  const day = date.getDate();
  const month = date.toLocaleString('en-us',{month:'short'})
  const time = date.getHours();
  const min = date.getMinutes();
  const fullyear = date.getUTCFullYear();
  const navigate = useNavigate();
  return (
    <>
      <div className="bdiv">
        <div className="bdiv-9">
          <div className="bdiv-10">
            <div className="bcolumn">
              <div className="bdiv-11">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/dbc0b483443805a8a252341cdbeb552544d501acf680e4d99c87d85dcf6f94ce?apiKey=9d6521b3bd494d48816871a061465c45&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/dbc0b483443805a8a252341cdbeb552544d501acf680e4d99c87d85dcf6f94ce?apiKey=9d6521b3bd494d48816871a061465c45&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/dbc0b483443805a8a252341cdbeb552544d501acf680e4d99c87d85dcf6f94ce?apiKey=9d6521b3bd494d48816871a061465c45&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/dbc0b483443805a8a252341cdbeb552544d501acf680e4d99c87d85dcf6f94ce?apiKey=9d6521b3bd494d48816871a061465c45&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/dbc0b483443805a8a252341cdbeb552544d501acf680e4d99c87d85dcf6f94ce?apiKey=9d6521b3bd494d48816871a061465c45&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/dbc0b483443805a8a252341cdbeb552544d501acf680e4d99c87d85dcf6f94ce?apiKey=9d6521b3bd494d48816871a061465c45&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/dbc0b483443805a8a252341cdbeb552544d501acf680e4d99c87d85dcf6f94ce?apiKey=9d6521b3bd494d48816871a061465c45&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/dbc0b483443805a8a252341cdbeb552544d501acf680e4d99c87d85dcf6f94ce?apiKey=9d6521b3bd494d48816871a061465c45&"
                  className="bimg-2"
                />
                <div className="bdiv-12">
                <i class="fa-regular fa-clock time_clock"></i>
                  <div className="bdiv-13">
                   {month} {day}, {fullyear} - {time}:{min} - Latest News 
                  </div>
                </div>
                <div className="bdiv-14">
                  About Company
                </div>
                <div className="bdiv-15">
                  Details
                </div>{" "}
                <button className='blogdiv-button'color="inherit" onClick={()=> navigate('/blog')}>Read More</button>  
              </div>
            </div>{" "}
            <div className="bcolumn-2">
              <div className="bdiv-17">              
                <div className="bdiv-21 px-4">
                  <div className="bdiv-22 fw-bold fs-5">Recent Post</div>{" "}
                  <hr />
                  <div className="bdiv-23" />{" "}
                  <div className="bdiv-24">
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/8f705648579b058b79787db132a8255576dbd6b3ad2a9668073b8e598ec1ebc7?apiKey=9d6521b3bd494d48816871a061465c45&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/8f705648579b058b79787db132a8255576dbd6b3ad2a9668073b8e598ec1ebc7?apiKey=9d6521b3bd494d48816871a061465c45&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8f705648579b058b79787db132a8255576dbd6b3ad2a9668073b8e598ec1ebc7?apiKey=9d6521b3bd494d48816871a061465c45&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/8f705648579b058b79787db132a8255576dbd6b3ad2a9668073b8e598ec1ebc7?apiKey=9d6521b3bd494d48816871a061465c45&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/8f705648579b058b79787db132a8255576dbd6b3ad2a9668073b8e598ec1ebc7?apiKey=9d6521b3bd494d48816871a061465c45&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8f705648579b058b79787db132a8255576dbd6b3ad2a9668073b8e598ec1ebc7?apiKey=9d6521b3bd494d48816871a061465c45&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/8f705648579b058b79787db132a8255576dbd6b3ad2a9668073b8e598ec1ebc7?apiKey=9d6521b3bd494d48816871a061465c45&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/8f705648579b058b79787db132a8255576dbd6b3ad2a9668073b8e598ec1ebc7?apiKey=9d6521b3bd494d48816871a061465c45&"
                      className="bimg-5"
                    />{" "}
                    <div className="bdiv-25">
                      <div className="bdiv-26 fw-bold">
                        Facebook Messenger Turns End-to-End Encryption on by
                        Default for Individual Chats
                      </div>{" "}
                      <div className="bdiv-27">
                        Updated: 7 December 2023 15:35 IST
                      </div>
                    </div>
                  </div>
                </div>{" "}                
              </div>
            </div>
          </div>
        </div>{" "}
        <div className="bdiv-34">
          <div className="bdiv-35">
            <div className="bdiv-36">
              <div className="bcolumn-3">
                <div className="bdiv-37">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/63869949bd85042f16d574f9c9dfe7af03573b251574282293265bbe6c72ea9b?apiKey=9d6521b3bd494d48816871a061465c45&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/63869949bd85042f16d574f9c9dfe7af03573b251574282293265bbe6c72ea9b?apiKey=9d6521b3bd494d48816871a061465c45&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/63869949bd85042f16d574f9c9dfe7af03573b251574282293265bbe6c72ea9b?apiKey=9d6521b3bd494d48816871a061465c45&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/63869949bd85042f16d574f9c9dfe7af03573b251574282293265bbe6c72ea9b?apiKey=9d6521b3bd494d48816871a061465c45&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/63869949bd85042f16d574f9c9dfe7af03573b251574282293265bbe6c72ea9b?apiKey=9d6521b3bd494d48816871a061465c45&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/63869949bd85042f16d574f9c9dfe7af03573b251574282293265bbe6c72ea9b?apiKey=9d6521b3bd494d48816871a061465c45&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/63869949bd85042f16d574f9c9dfe7af03573b251574282293265bbe6c72ea9b?apiKey=9d6521b3bd494d48816871a061465c45&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/63869949bd85042f16d574f9c9dfe7af03573b251574282293265bbe6c72ea9b?apiKey=9d6521b3bd494d48816871a061465c45&"
                    className="bimg-6"
                  />{" "}
                  <div className="bdiv-38">
                    <div className="bdiv-39 fw-bold">
                      Facebook Messenger Turns End-to-End Encryption on by
                      Default for Individual Chats
                    </div>{" "}
                    <div className="bdiv-40">
                      Updated: 7 December 2023 15:35 IST
                    </div>
                  </div>
                </div>
              </div>{" "}
              <div className="bcolumn-4">
                <div className="bdiv-41">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/caa7e0a11277549fc3dbc64077d69b74cb527f31acc2c48814a0cf8dd00f5725?apiKey=9d6521b3bd494d48816871a061465c45&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/caa7e0a11277549fc3dbc64077d69b74cb527f31acc2c48814a0cf8dd00f5725?apiKey=9d6521b3bd494d48816871a061465c45&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/caa7e0a11277549fc3dbc64077d69b74cb527f31acc2c48814a0cf8dd00f5725?apiKey=9d6521b3bd494d48816871a061465c45&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/caa7e0a11277549fc3dbc64077d69b74cb527f31acc2c48814a0cf8dd00f5725?apiKey=9d6521b3bd494d48816871a061465c45&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/caa7e0a11277549fc3dbc64077d69b74cb527f31acc2c48814a0cf8dd00f5725?apiKey=9d6521b3bd494d48816871a061465c45&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/caa7e0a11277549fc3dbc64077d69b74cb527f31acc2c48814a0cf8dd00f5725?apiKey=9d6521b3bd494d48816871a061465c45&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/caa7e0a11277549fc3dbc64077d69b74cb527f31acc2c48814a0cf8dd00f5725?apiKey=9d6521b3bd494d48816871a061465c45&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/caa7e0a11277549fc3dbc64077d69b74cb527f31acc2c48814a0cf8dd00f5725?apiKey=9d6521b3bd494d48816871a061465c45&"
                    className="bimg-7"
                  />{" "}
                  <div className="bdiv-42">
                    <div className="bdiv-43 fw-bold">
                      Facebook Messenger Turns End-to-End Encryption on by
                      Default for Individual Chats
                    </div>{" "}
                    <div className="bdiv-44">
                      Updated: 7 December 2023 15:35 IST
                    </div>
                  </div>
                </div>
              </div>{" "}
              <div className="bcolumn-5">
                <div className="bdiv-45">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/490394a23cf9446450f9aa5aa71988a2e242dba700e3dd61c8ceff9c99c8883c?apiKey=9d6521b3bd494d48816871a061465c45&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/490394a23cf9446450f9aa5aa71988a2e242dba700e3dd61c8ceff9c99c8883c?apiKey=9d6521b3bd494d48816871a061465c45&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/490394a23cf9446450f9aa5aa71988a2e242dba700e3dd61c8ceff9c99c8883c?apiKey=9d6521b3bd494d48816871a061465c45&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/490394a23cf9446450f9aa5aa71988a2e242dba700e3dd61c8ceff9c99c8883c?apiKey=9d6521b3bd494d48816871a061465c45&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/490394a23cf9446450f9aa5aa71988a2e242dba700e3dd61c8ceff9c99c8883c?apiKey=9d6521b3bd494d48816871a061465c45&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/490394a23cf9446450f9aa5aa71988a2e242dba700e3dd61c8ceff9c99c8883c?apiKey=9d6521b3bd494d48816871a061465c45&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/490394a23cf9446450f9aa5aa71988a2e242dba700e3dd61c8ceff9c99c8883c?apiKey=9d6521b3bd494d48816871a061465c45&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/490394a23cf9446450f9aa5aa71988a2e242dba700e3dd61c8ceff9c99c8883c?apiKey=9d6521b3bd494d48816871a061465c45&"
                    className="bimg-8"
                  />{" "}
                  <div className="bdiv-46">
                    <div className="bdiv-47 fw-bold">
                      Facebook Messenger Turns End-to-End Encryption on by
                      Default for Individual Chats
                    </div>{" "}
                    <div className="bdiv-48">
                      Updated: 7 December 2023 15:35 IST
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
          <div className="bdiv-49">
            <div className="bdiv-50">
              <div className="bcolumn-6">
                <div className="bdiv-51">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/6bdef61447afb4e1bd8c6faf809d912a2e9a0e424c48c5dafd02439e97655469?apiKey=9d6521b3bd494d48816871a061465c45&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/6bdef61447afb4e1bd8c6faf809d912a2e9a0e424c48c5dafd02439e97655469?apiKey=9d6521b3bd494d48816871a061465c45&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6bdef61447afb4e1bd8c6faf809d912a2e9a0e424c48c5dafd02439e97655469?apiKey=9d6521b3bd494d48816871a061465c45&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/6bdef61447afb4e1bd8c6faf809d912a2e9a0e424c48c5dafd02439e97655469?apiKey=9d6521b3bd494d48816871a061465c45&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/6bdef61447afb4e1bd8c6faf809d912a2e9a0e424c48c5dafd02439e97655469?apiKey=9d6521b3bd494d48816871a061465c45&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6bdef61447afb4e1bd8c6faf809d912a2e9a0e424c48c5dafd02439e97655469?apiKey=9d6521b3bd494d48816871a061465c45&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/6bdef61447afb4e1bd8c6faf809d912a2e9a0e424c48c5dafd02439e97655469?apiKey=9d6521b3bd494d48816871a061465c45&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/6bdef61447afb4e1bd8c6faf809d912a2e9a0e424c48c5dafd02439e97655469?apiKey=9d6521b3bd494d48816871a061465c45&"
                    className="bimg-9"
                  />{" "}
                  <div className="bdiv-52">
                    <div className="bdiv-53 fw-bold">
                      Facebook Messenger Turns End-to-End Encryption on by
                      Default for Individual Chats
                    </div>{" "}
                    <div className="bdiv-54">
                      Updated: 7 December 2023 15:35 IST
                    </div>
                  </div>
                </div>
              </div>{" "}
              <div className="bcolumn-7">
                <div className="bdiv-55">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/d26aedd1c5bdc96f8dc8ce1671c868f0178f948d79beb286a0ae699f17b72005?apiKey=9d6521b3bd494d48816871a061465c45&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/d26aedd1c5bdc96f8dc8ce1671c868f0178f948d79beb286a0ae699f17b72005?apiKey=9d6521b3bd494d48816871a061465c45&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d26aedd1c5bdc96f8dc8ce1671c868f0178f948d79beb286a0ae699f17b72005?apiKey=9d6521b3bd494d48816871a061465c45&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/d26aedd1c5bdc96f8dc8ce1671c868f0178f948d79beb286a0ae699f17b72005?apiKey=9d6521b3bd494d48816871a061465c45&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/d26aedd1c5bdc96f8dc8ce1671c868f0178f948d79beb286a0ae699f17b72005?apiKey=9d6521b3bd494d48816871a061465c45&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d26aedd1c5bdc96f8dc8ce1671c868f0178f948d79beb286a0ae699f17b72005?apiKey=9d6521b3bd494d48816871a061465c45&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/d26aedd1c5bdc96f8dc8ce1671c868f0178f948d79beb286a0ae699f17b72005?apiKey=9d6521b3bd494d48816871a061465c45&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/d26aedd1c5bdc96f8dc8ce1671c868f0178f948d79beb286a0ae699f17b72005?apiKey=9d6521b3bd494d48816871a061465c45&"
                    className="bimg-10"
                  />{" "}
                  <div className="bdiv-56">
                    <div className="bdiv-57 fw-bold">
                      Facebook Messenger Turns End-to-End Encryption on by
                      Default for Individual Chats
                    </div>{" "}
                    <div className="bdiv-58">
                      Updated: 7 December 2023 15:35 IST
                    </div>
                  </div>
                </div>
              </div>{" "}
              <div className="bcolumn-8">
                <div className="bdiv-59">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/f8e87391de17e760e3022157e47b62aeae4e91835f1598a340beb95d548beb2a?apiKey=9d6521b3bd494d48816871a061465c45&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/f8e87391de17e760e3022157e47b62aeae4e91835f1598a340beb95d548beb2a?apiKey=9d6521b3bd494d48816871a061465c45&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f8e87391de17e760e3022157e47b62aeae4e91835f1598a340beb95d548beb2a?apiKey=9d6521b3bd494d48816871a061465c45&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/f8e87391de17e760e3022157e47b62aeae4e91835f1598a340beb95d548beb2a?apiKey=9d6521b3bd494d48816871a061465c45&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/f8e87391de17e760e3022157e47b62aeae4e91835f1598a340beb95d548beb2a?apiKey=9d6521b3bd494d48816871a061465c45&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f8e87391de17e760e3022157e47b62aeae4e91835f1598a340beb95d548beb2a?apiKey=9d6521b3bd494d48816871a061465c45&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/f8e87391de17e760e3022157e47b62aeae4e91835f1598a340beb95d548beb2a?apiKey=9d6521b3bd494d48816871a061465c45&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/f8e87391de17e760e3022157e47b62aeae4e91835f1598a340beb95d548beb2a?apiKey=9d6521b3bd494d48816871a061465c45&"
                    className="bimg-11"
                  />{" "}
                  <div className="bdiv-60">
                    <div className="bdiv-61 fw-bold">
                      Facebook Messenger Turns End-to-End Encryption on by
                      Default for Individual Chats
                    </div>{" "}
                    <div className="bdiv-62">
                      Updated: 7 December 2023 15:35 IST
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
      </div>{" "}
</>
      );

      }
      export default Blog;
      {/* <style jsx>{`
        .div {
          background-color: #fff;
          display: flex;
          flex-direction: column;
        }
        .bdiv-2 {
          box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
          background-color: #fff;
          align-self: stretch;
          display: flex;
          width: 100%;
          justify-content: space-between;
          gap: 20px;
          padding: 4px 80px;
        }
        @media (max-width: 991px) {
          .bdiv-2 {
            max-width: 100%;
            flex-wrap: wrap;
            padding: 0 20px;
          }
        }
        .img {
          aspect-ratio: 0.76;
          object-fit: contain;
          object-position: center;
          width: 58px;
          overflow: hidden;
          max-width: 100%;
        }
        .bdiv-3 {
          align-self: center;
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 20px;
          margin: auto 0;
        }
        @media (max-width: 991px) {
          .bdiv-3 {
            max-width: 100%;
            flex-wrap: wrap;
            justify-content: center;
          }
        }
        .bdiv-4 {
          color: var(--Text, #292929);
          align-self: start;
          white-space: nowrap;
          font: 400 18px Calibri, sans-serif;
        }
        @media (max-width: 991px) {
          .bdiv-4 {
            white-space: initial;
          }
        }
        .bdiv-5 {
          color: var(--Text, #292929);
          align-self: start;
          font: 400 18px Calibri, sans-serif;
        }
        .bdiv-6 {
          color: var(--Text, #292929);
          align-self: start;
          font: 400 18px Calibri, sans-serif;
        }
        .bdiv-7 {
          color: #14b1ff;
          align-self: stretch;
          font: 700 18px Calibri, sans-serif;
        }
        .bdiv-8 {
          color: var(--Text, #292929);
          align-self: start;
          white-space: nowrap;
          font: 400 18px Calibri, sans-serif;
        }
        @media (max-width: 991px) {
          .bdiv-8 {
            white-space: initial;
          }
        }
        .bdiv-9 {
          align-self: center;
          margin-top: 49px;
          width: 100%;
          max-width: 1261px;
        }
        @media (max-width: 991px) {
          .bdiv-9 {
            max-width: 100%;
            margin-top: 40px;
          }
        }
        .bdiv-10 {
          gap: 20px;
          display: flex;
        }
        @media (max-width: 991px) {
          .bdiv-10 {
            flex-direction: column;
            align-items: stretch;
            gap: 0px;
          }
        }
        .column {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 75%;
          margin-left: 0px;
        }
        @media (max-width: 991px) {
          .column {
            width: 100%;
          }
        }
        .bdiv-11 {
          display: flex;
          flex-grow: 1;
          flex-direction: column;
          align-items: start;
          padding: 0 20px;
        }
        @media (max-width: 991px) {
          .bdiv-11 {
            max-width: 100%;
            margin-top: 40px;
          }
        }
        .img-2 {
          aspect-ratio: 2.06;
          object-fit: contain;
          object-position: center;
          width: 100%;
          overflow: hidden;
          align-self: stretch;
        }
        @media (max-width: 991px) {
          .img-2 {
            max-width: 100%;
          }
        }
        .bdiv-12 {
          border-radius: 5px 25px 25px 5px;
          background-color: #e7f7ff;
          display: flex;
          margin-top: 15px;
          gap: 12px;
          padding: 18px 0;
        }
        @media (max-width: 991px) {
          .bdiv-12 {
            max-width: 100%;
            flex-wrap: wrap;
          }
        }
        .img-3 {
          aspect-ratio: 1;
          object-fit: contain;
          object-position: center;
          width: 24px;
          overflow: hidden;
          max-width: 100%;
        }
        .bdiv-13 {
          color: var(--Section-1, #005e8d);
          letter-spacing: 0.72px;
          align-self: center;
          margin: auto 0;
          font: 700 18px/60px Calibri, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .bdiv-13 {
            max-width: 100%;
          }
        }
        .bdiv-14 {
          color: var(--Text, #292929);
          letter-spacing: 1.2px;
          align-self: stretch;
          margin-top: 26px;
          font: 700 30px/60px Calibri, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .bdiv-14 {
            max-width: 100%;
          }
        }
        .bdiv-15 {
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 3;
          overflow: hidden;
          color: var(--Text, #292929);
          text-overflow: ellipsis;
          letter-spacing: 0.72px;
          align-self: stretch;
          margin-top: 40px;
          font: 400 18px/35px Calibri, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .bdiv-15 {
            max-width: 100%;
          }
        }
        .bdiv-16 {
          color: var(--Background, #fff);
          letter-spacing: 0.36px;
          white-space: nowrap;
          border-radius: 19px;
          box
        }

        `}</style>{" "} */}

       