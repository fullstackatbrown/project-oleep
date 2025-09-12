import React, { useEffect, useState } from "react";
import { createBucketClient } from '@cosmicjs/sdk';
import Footer from "./footer";

const cosmic = createBucketClient({
  bucketSlug: 'fullstack-oleep-production',
  readKey: 'OgbgGgGqXoTSTvpdJ3NtQuU0I5sCWRfj60IBS0SFGy9Y7n0unh'
});

export default function FooterClient() {
  const [siteLeaders, setSiteLeaders] = useState([]);

  useEffect(() => {
    async function fetchSiteLeaders() {
      try {
        const response = await cosmic.objects.find({ type: "site-leaders" })
          .limit(10)
          .props("slug,title,metadata,type")
          .depth(1);
        setSiteLeaders(response.objects || []);
      } catch (error) {
        setSiteLeaders([]);
      }
    }
    fetchSiteLeaders();
  }, []);

  return <Footer siteLeaders={siteLeaders} />;
}
