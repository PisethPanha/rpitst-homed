import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function UploadEbook() {
  const [image, setImage] = useState("");
  const [title, setTiltle] = useState("");
  const [link, setLink] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData();
    data.append("image", image);
    data.append("title", title);
    data.append("link", link);
    try {
      const res = await axios.post(
        "http://localhost/databaseforReact/RPITST_ADMIN/admin_react2/upbook.php",
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <form className="max-w-sm mx-auto">
        <div className=" mb-5">
          <label
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            htmlFor="file_input"
          >
            Upload file
          </label>
          <input
            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            id="file_input"
            type="file"
            required
            accept="image/*"
            onChange={(event) => setImage(event.target.files[0])}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="base-input"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            TITLE
          </label>
          <input
            onChange={(event) => setTiltle(event.target.value)}
            type="text"
            id="base-input"
            required
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="base-input2"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            LINK DOWNLOAD
          </label>
          <input
            onChange={(event) => setLink(event.target.value)}
            type="text"
            id="base-input2"
            required
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <center>
          <button
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            onClick={handleSubmit}
          >
            <Link className="w-full h-full" to="/e-library">
              Submit
            </Link>
          </button>
        </center>
      </form>
    </div>
  );
}

export default UploadEbook;
