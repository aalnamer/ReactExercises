import React, { useState, useEffect } from "react";
import axios from "axios";
import uuid from "uuid";

const useAxios = (url) => {
  const [response, setResponse] = useState([]);

  useEffect(() => {
    const getData = async (dataUrl) => {
      const res = await axios.get(dataUrl);
      console.log(res.data, "RES.DATA");
      setResponse((data) => [...data, res]);
    };
    getData(url);
  }, [url]);

  return { response };
};

export default useAxios;
