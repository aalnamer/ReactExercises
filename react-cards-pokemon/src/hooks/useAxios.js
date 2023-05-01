import React, { useState, useEffect } from "react";
import axios from "axios";
import uuid from "uuid";

const useAxios = (url) => {
  const [response, setResponse] = useState([]);

  useEffect(() => {
    const getData = async (dataUrl) => {
      const res = await axios.get(dataUrl);
      setResponse((data) => [...data, res]);
    };
    getData(url);
  }, [url]);

  return { response };
};

export default useAxios;

// import { useState } from "react";
// import axios from "axios";

// const useAxios = (baseUrl) => {
//     const [responses, setResponses] = useState([]);
//     const addResponseData = async (formatter = data => data, path= "") => {
//         const response = await axios.get(`${baseUrl}${path}`);
//         setResponses(data => [...data, formatter(response.data)]);

//     }
//     return [responses, addResponseData]
// }
// export default useAxios;
