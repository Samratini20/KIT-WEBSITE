import React from "react";
import { useEffect } from "react";
   
function TermsConditions(props) {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="d-flex flex-column">
        <div className="d-grid fa-2x fw-bold justify-content-center" style={{marginTop:'7.5rem'}}>Terms & Conditions</div>
        <div className="align-content-center d-flex flex-column mx-1 px-5 py-3" style={{lineHeight: 2}}>
          <span className="mb-2">
          The usage and access of any product, service or feature (the “Material/s”) available through the internet websites accessible at <b className="bg-danger">KIT Website(the “Website”)</b> by any user of the Website (“you” or “your”) shall be governed by the following Terms of Use:
          </span>
          <ul>
            <li>
            This Website is provided and operated by K.I.T Global Technologies Pvt Ltd and may be used for informational purposes only. 
            By using the site or downloading the Materials from the site, you agree and consent to abide by the terms and conditions set forth in this notice. 
            If you do not agree to abide by these terms and conditions please do not use the Website or download materials from the Website.
            </li>
            <li>
            By accessing the website, the user agrees that all information, data and content on the website related to products and services is 
            subjective and the actual product or service may vary, based on various factors defined by K.I.T Global Technologies Pvt Ltd.
            </li>
            <li>
            This Site, including all Materials present and any material that would be added or redacted (excluding any applicable third-party materials),
             is the property of K.I.T Global Technologies Pvt Ltd and is copyrighted and protected by worldwide copyright laws and treaty provisions. 
             You consent to comply with all copyright laws worldwide in your use of this Website and to avoid any unauthorised copying of the Materials.
              K.I.T Global Technologies Pvt Ltd does not grant any explicit or implied rights under any patents, trademarks, copyrights or trade secret information.
            </li>
           <li>K.I.T Global Technologies Pvt Ltd has business relationships with a number of customers, suppliers, and others. 
            For convenience and simplicity, words like alliance, partnership, and partner are used to indicate business relationships involving common activities and interests. 
            Such words may or may not indicate precise legal relationships.
            </li>
            <li className="mb-2">
            Permission is granted to temporarily download one copy of the materials (information or software) from K.I.T Global Technologies Pvt Ltd's website for personal,
             non-commercial, non-distributive, transitory viewing only. This is the grant of a licence, not a transfer of title, and under this licence you may not:
            </li>
             <ol>
              <li>modify or copy the materials.</li>
              <li>use the materials for any commercial purpose, or for any public display (commercial or non-commercial, including social media)</li>
              <li>attempt to decompile or reverse engineer any software contained on K.I.T Global Technologies Pvt Ltd's website</li>
              <li>remove any copyright or other proprietary notations from the materials or transfer the materials to another person or "mirror" the materials on any other server.</li>
              <li className="mb-3">use it in any way that can defame, may go against the values of K.I.T Global Technologies Pvt Ltd or can be used against K.I.T Global Technologies Pvt Ltd in any way.</li>
             </ol>
          </ul>
          <span className="mb-2">
            This licence shall terminate automatically if you violate any of these restrictions and may be terminated by K.I.T Global Technologies Pvt Ltd at any time.
           Upon terminating your viewing of these materials or upon the termination of this licence, you agree to destroy and permanently delete any downloaded material 
           in your possession whether in electronic or printed format.
          </span>
          <span className="fw-bold mb-2 text-info">
          Limited Licence
          </span>
          <span className="mb-2">
          Subject to the terms and conditions set forth in these Terms of Use, K.I.T Global Technologies Pvt Ltd grants you a non-exclusive, non-transferable, limited access, use and display this site and the materials thereon. 
          You agree not to disrupt or attempt to interrupt the operation of the site in any way.
          </span>
          <span className="fw-bold mb-2 text-info">
          Third Party Content
          </span>
          <span className="mb-3">
          The Website provides information of third parties available, including articles, analyst reports, news reports, tools to facilitate calculation, company information
           and other data (the “Third Party Content”). You acknowledge and agree that <b className="bg-danger">the Third-Party Content</b> is not created or endorsed by K.I.T Global Technologies Pvt Ltd
            nor are any products or services offered through it. The provision of Third-Party Content is for general informational purposes only and does not constitute a
             recommendation or solicitation to make any type of investment decision. In addition, the Third-Party Content is not intended to provide tax, legal or investment advice. 
             You acknowledge that the Third-Party Content provided to you is obtained from sources believed to be reliable, but no guarantees are made by the Website or the providers of 
             the Third-Party Content about its accuracy, completeness, timeliness. You agree not to hold the Website, any businesses offering products or services through the Website or
              any provider of Third Party Content liable for any investment decision or other transaction you may make based on your reliance on or use of such data,
               or any liability that may arise due to delays or interruptions in the delivery of the Third Party Content for any reason.
          </span>
          <span className="mb-3">
          By using any Third-Party Content, you may leave this Website and be directed to an external website, or to a website maintained
           by an entity other than K.I.T Global Technologies Pvt Ltd. If you decide to visit any such site, you do so at your own risk, 
           and it is your responsibility to take all protective measures to guard against viruses or other destructive elements.
            K.I.T Global Technologies Pvt Ltd makes no warranty or representation regarding, and does not endorse, any linked Websites 
            or the information appearing thereon or any of the products or services described thereon. Links do not imply that K.I.T 
            Global Technologies Pvt Ltd or this Site sponsors, endorses, is affiliated or associated with, or is legally 
            authorised to use any trademark, trade name, logo or copyright symbol displayed in or accessible through the links,
             or that any linked site is authorised to use any trademark, trade name, logo or copyright symbol of 
             K.I.T Global Technologies Pvt Ltd or any of its affiliates or subsidiaries.
          </span>
          <span className="fw-bold mb-2 text-info">NO WARRANTIES</span>
          <span>
          This site, the information and materials on the site, and any software made available on the site, 
          are provided “as is” without any representation or warranty, express or implied, of any kind, including, 
          but not limited to, warranties of merchantability, non-infringement, or fitness for any particular purpose.
           There is no warranty of any kind, express or implied, regarding third party content. 
           There is also no warranty that this site will be free of any computer viruses. Some jurisdictions do not allow
            for the exclusion of implied warranties, so the above exclusions may not apply to you.
          </span>
          <span className="fw-bold mb-2 text-info">Limitation of damages</span>
          <span className="mb-2">
          In no event and in no case shall K.I.T Global Technologies Pvt Ltd or any of its subsidiaries, 
          associates and affiliates be liable to any entity for any direct, indirect, special, extraordinary, 
          consequential or other damages (including, without limitation, any lost profits, business interruption,
           loss of information or programs or other data on your information handling system) that are related to the use of,
            or the inability to use, the content, materials, and functions of the website or any linked website, 
            even if K.I.T Global Technologies Pvt Ltd is expressly advised of the possibility of such damages.
          </span>
          <span className="fw-bold mb-2 text-info">Disclaimer</span>
          <span className="mb-2">
            The website may contain inaccuracies, imprecise details and typographical and clerical errors. 
            K.I.T Global Technologies Pvt Ltd expressly disclaims any obligation to update this site or any of 
            the materials on this site. K.I.T Global Technologies Pvt Ltd does not warrant the accuracy or completeness 
            of the materials or the reliability of any advice, opinion, statement or other information displayed or 
            distributed through the site. You acknowledge that any reliance on any such opinion, advice, statement, memorandum, 
            or information shall be at your sole risk. K.I.T Global Technologies Pvt Ltd reserves the right, 
            in its absolute discretion, to correct any errors or omissions in any portion of the site. K.I.T Global Technologies
             Pvt Ltd may make any other changes and modifications to the site, the materials and the products, programs, services
              or prices (if any) described in the site at any time without notice.
          </span>
          <span className="fw-bold mb-2 text-info">Indemnity</span>
          <span className="mb-2">
            You agree to indemnify and hold harmless K.I.T Global Technologies Pvt Ltd, its subsidiaries and affiliates 
            from any claim, allegation, cost, expense, judgement or other loss relating to your use of this website, 
            including without limitation of the foregoing, any action you take which is in violation of the terms 
            and conditions of these Terms of Use.
          </span>
          <span className="fw-bold mb-2 text-info">Changes</span>
          <span>
            K.I.T Global Technologies Pvt Ltd reserves the right, at its sole discretion, to change, modify, add or
             remove any portion of these Terms of Use in whole or in part, at any time. Changes in these Terms of Use 
             will be effective when notice of such change is posted. Your continued use of the Website after any changes 
             to these Terms of Use are posted will be considered acceptance of those changes. K.I.T Global Technologies 
             Pvt Ltd may terminate, change, suspend or discontinue any aspect of the K.I.T Global Technologies Pvt Ltd Website, 
             including the availability of any features of the Site, at any time. K.I.T Global Technologies Pvt Ltd
              may also impose limits on certain features and services or restrict your access to parts or the entire 
              Website without notice or liability. K.I.T Global Technologies Pvt Ltd may terminate the authorization, 
              rights and licence given above and, upon such termination; you shall immediately destroy all Materials.
          </span>
          <span className="fw-bold mb-2 text-info">International Users and Choice of Law</span>
          <span className="mb-2">
          This Site is controlled, operated and administered by K.I.T Global Technologies Pvt Ltd from its offices within India.
           K.I.T Global Technologies Pvt Ltd makes no representation that materials at this site are appropriate or available 
           for use at other locations outside of India and access to them from territories where their contents are illegal 
           is prohibited. You may not use the Website or export the Materials in violation of any applicable export laws and regulations.
            If you access this Site from a location outside of India, you solely are responsible for compliance with all local laws.
             These Terms of Use shall be governed by the laws of India, without giving effect to its conflict of law’s provisions.
              You agree that the appropriate court in Bengaluru, India, would have the exclusive jurisdiction to resolve all disputes
               arising under these Terms of Use and you consent to personal jurisdiction in such a forum.
          </span>
          <span>
           These Terms of Use constitute the entire agreement between K.I.T Global Technologies Pvt Ltd and you with
            respect to your use of the Website. Any cause of action you may have with respect to your use of the Website must
             be commenced within one (1) year after the claim or cause of action arises. If for any reason a court of competent
              jurisdiction finds any provision of these Terms of Use or portion thereof, to be unenforceable, that provision shall
               be enforced to the maximum extent permissible so as to affect the intent of these Terms of Use, and the remainder of
                these Terms of Use shall continue in full force and effect.
          </span>
        </div>
    </div>
  )
}

export default TermsConditions;