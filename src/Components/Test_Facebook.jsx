import axios from "axios";
import React, { useEffect, useState } from "react";

function Test_Facebook() {
  var accesstoken = `EAASARFxGZBIgBO6ZCIVZCRAN2M4WscYwkzxQ2EjrDcptNBSsnvDWp4406jbNe60a4kDnZAT5iRAVwIqg2FZCux9hyIbAdb8kYficIBLU2TAw9gQjiPZCCNeKPyWbsZCckF6tXpkuXZCiO9H0vpmFnTV1mzmLCu2gAqDTSiWePUZCGoyQmMNml6BOCfBrwGngXr8AZD`;
  var pageid = `100960786071190`;
  const [res, setRes] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://graph.facebook.com/v12.0/${pageid}?fields=posts%7Bid%2Cfull_picture%2Cmessage%2Ccreated_time%7D%2Cfollowers_count%2Cname%2Clikes%2Cpicture&access_token=${accesstoken}`
      )
      .then((response) => {
        // console.log(response.data); // Log the full response to inspect it
        // console.log(response.data.posts.data); // Log the posts specifically
        setRes(response.data.posts.data || []); // Ensure that res is an array or empty if posts is undefined
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
      });
  }, []);

  return (
    <div>
      {Array.isArray(res) && res.length > 0 ? (
        res.map((ele) => (
          <PostCard
            img={ele.full_picture}
            // message={ele[message]}
            key={ele.id}
          />
        ))
      ) : (
        <p>No posts available</p>
      )}
    </div>
  );
}

export function PostCard(p) {
  return (
    <div>
      <img src={p.img} alt="" />
      <p>{p.message}</p>
    </div>
  );
}

export default Test_Facebook;
