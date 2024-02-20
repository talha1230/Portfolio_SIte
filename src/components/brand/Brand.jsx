import React from "react";
import './brand.css';
import { GitHub,slack,atlassian,dropbox,shopify} from "./image";

const Brand = () => (
        <div className="chatai_brand section__padding">
        <div>
                <img src={GitHub} alt="Github Logo" />
        </div>
        <div>
                <img src={slack} alt="Slack Logo" />
        </div>
            <div>
                <img src={atlassian} alt=" atlassian logo " />
            </div>
            <div>
                <img src={dropbox} alt="dropbox logo" />
            </div>
            <div>
                <img src={shopify} alt="shopify logo" />
            </div>
        </div>
    );
  
 export default Brand;
 // Add a closing curly brace here
