import React from "react";
import { useEffect } from "react";

function PrivacyPolicy(props) {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="d-flex flex-column">
        <h1 style={{marginTop:'7rem',marginLeft:'28rem'}} className="fw-bold">Privacy Policy</h1>
        <div className="align-content-center d-flex flex-column mx-1 px-5 py-3" style={{lineHeight: 2}}>
            <span>K.I.T Global Technologies Pvt Ltd adheres to and implements a very strict privacy policy. Accordingly, we have developed this Policy in order for you to understand how we obtain, collect, use, communicate, disclose and make use of personal information on 
            our website [KIT Website] and all its regional extensions and landing pages.
            </span>
            <span className="fw-bold mt-2">Information We Collect</span>
              <ul>
                <li>
                Personal Information: We may collect personal information, such as names, email addresses, and contact details, when voluntarily provided by users.
                </li>
                <li>
                Non-Personal Information: We may automatically collect non-personal information, such as browser type, IP address, and usage patterns, through cookies and similar technologies.
                </li>
              </ul>            
             <span className="fw-bold">How We Use Your Information</span>
             <span>We use the collected information for the following purposes:</span>
             <ul>
              <li>
              Provide and improve our products and services
              </li>
              <li>
              Respond to inquiries and customer support requests
              </li>
              <li>
              Send updates, and marketing communications
              </li>
              <li>
              Analyse website usage and trends
              </li>
             </ul>
             <span className="fw-bold">Data Sharing</span>
             <span>We may share your information with third parties under the following circumstances:</span>
             <ul>
              <li>
              With your consent
              </li>
              <li>
              To comply with legal obligations
              </li>
              <li>
              To third-party service providers supporting our business operations
              </li>
             </ul>
             <span className="fw-bold">Cookies and Tracking Technologies</span>
             <span className="mb-2">We use cookies and similar technologies to enhance your experience on our website. You can manage your cookie preferences through your browser settings.</span>
             <span className="fw-bold">Security</span>
             <span className="mb-2">We employ industry-standard security measures to protect your personal information from unauthorised access, disclosure, alteration, and destruction.</span>
              <span className="fw-bold mb-2">Your Choices</span>
              <span>You have the right to:</span>
              <ul>
                <li>
                Access and update your personal information
                </li>
                <li>
                Opt-out of receiving marketing communications
                </li>
                <li>
                Request the deletion of your personal information
                </li>
              </ul>
               <span className="fw-bold">Changes to this Privacy Policy</span>
               <span className="mb-2">We reserve the right to update this Privacy Policy to reflect changes in our practices and legal requirements. Any updates will be posted on our website with the revised effective date.</span>
               <span className="fw-bold">Contact Us</span>
               <span>If you have any questions or concerns about this Privacy Policy, please contact us at info@kitservices.in.</span>
        </div>

    </div>
  )
}

export default PrivacyPolicy;