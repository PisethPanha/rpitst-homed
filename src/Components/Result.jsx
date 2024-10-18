import axios from "axios";
import React, { useEffect, useState } from "react";
import close from "../assets/close.png";

function Result() {
  const [option, setOption] = useState([]);
  const [table, setTable] = useState("");
  const [list, setList] = useState([]);
  const [resultInput, setResultInput] = useState([]);
  const [resultClick, setResultClick] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [keySearchVissible, setKeySearchVissible] = useState();
  const [tableVissible, setTableVissible] = useState(true);
  // const [purpose, setPurpose] = useState("");
  const tableName = new FormData();
  tableName.append("table", table);
  const keySearch = new FormData();
  keySearch.append("keyword", keyword);
  keySearch.append("table", table);
  keySearch.append("for", "keySearch");
  const keyClick = new FormData();
  keyClick.append("keyword", keyword);
  keyClick.append("table", table);
  keyClick.append("for", "keyClick");
  useEffect(() => {
    axios
      .get("http://localhost/API/GetTable.php")
      .then((res) => setOption(res.data));

    if (table !== "") {
      axios
        .post("http://localhost/API/GetTable.php", tableName, {
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then((res) => setList(res.data));
    }
  }, [table]);
  function handleSearch(event) {
    setKeyword(event.target.value);
    setKeySearchVissible(true);
    if (table !== "") {
      axios
        .post(
          "http://localhost/databaseforReact/student_search.php",
          keySearch,
          {
            headers: {
              "Content-Type": "multipart/from-data",
            },
          }
        )
        .then((res) => setResultInput(res.data));
    } else {
      setResultInput([{ គោត្តនាម_នាម: "please select table!!!" }]);
    }
  }
  // const [clickValue, setClickValue] = useState("");
  function handleButtonSearch() {
    setKeySearchVissible(false);
    setTableVissible(false);
    axios
      .post("http://localhost/databaseforReact/student_search.php", keySearch, {
        headers: {
          "Content-Type": "multipart/from-data",
        },
      })
      .then((res) => setResultClick(res.data));
  }

  return (
    <div>
      <div>
        <div className="max-w-sm mx-auto">
          <label
            htmlFor="countries"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Select your department
          </label>
          <select
            id="countries"
            onChange={(event) => {
              setTable(event.target.value);
            }}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="">Choose a department</option>
            {option.map((ele, i) => (
              <option key={i} value={ele.Tables_in_create_table}>
                {ele.Tables_in_create_table}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="p-4 grid gap-4 w-[80%] mx-auto ">
        <div className="relative">
          {" "}
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              onChange={handleSearch}
              id="default-search"
              className="block w-full p-4 pr-[6rem] ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search Mockups, Logos..."
              required
            />
            <button
              onClick={handleButtonSearch}
              className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Search
            </button>
          </div>
          <div
            style={{ display: keySearchVissible ? "flex" : "none" }}
            className="w-full  absolute shadow-gray-600 shadow-[0px_0px_20px] z-50 rounded-md p-4 h-auto bg-white"
          >
            <div className="grid">
              {resultInput.map((ele, i) => (
                <p
                  key={i}
                  className="w-full h-full"
                  onClick={() => {
                    setKeySearchVissible(false);
                    setTableVissible(false);

                    axios
                      .get(
                        `http://localhost/databaseforReact/student_search.php?keyword=${ele.គោត្តនាម_នាម}&table=${table}`
                      )
                      .then((res) => setResultClick(res.data));
                  }}
                >
                  {ele.គោត្តនាម_នាម}
                </p>
              ))}
            </div>
            <img
              src={close}
              onClick={() => setKeySearchVissible(false)}
              className="w-5 h-5 ml-auto"
            />
          </div>
        </div>
        <br />
        <br />
      </div>

      <div className="relative overflow-x-auto">
        <center>
          <button
            onClick={() => {
              setTableVissible(true);
            }}
            style={{ display: tableVissible ? "none" : "block" }}
            className="text-[20px] text-white p-4 rounded-lg mb-4 bg-blue-700"
          >
            {" "}
            Back
          </button>
        </center>
        <table className="w-full p-4 text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-gray-900 bg-transparent"
              >
                ID
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-gray-900 bg-transparent"
              >
                Name
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-gray-900 bg-transparent"
              >
                sex
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-gray-900 bg-transparent"
              >
                Average
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-gray-900 bg-transparent"
              >
                Grade
              </th>
            </tr>
          </thead>
          <tbody>
            {list.map((ele, i) => (
              <tr
                key={i}
                style={{ display: tableVissible ? "" : "none" }}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <td className="px-6 py-4">{ele.ID}</td>
                <td className="px-6 py-4">{ele.គោត្តនាម_នាម}</td>
                <td className="px-6 py-4">{ele.ភេទ}</td>
                <td className="px-6 py-4">{ele.មធ្យមភាគ}</td>
                <td className="px-6 py-4">{ele.ចំណាត់ថ្នាក់}</td>
              </tr>
            ))}
            {resultClick.map((ele, i) => (
              <tr
                key={i}
                style={{ display: tableVissible ? "none" : "" }}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <td className="px-6 py-4">{ele.ID}</td>
                <td className="px-6 py-4">{ele.គោត្តនាម_នាម}</td>
                <td className="px-6 py-4">{ele.ភេទ}</td>
                <td className="px-6 py-4">{ele.មធ្យមភាគ}</td>
                <td className="px-6 py-4">{ele.ចំណាត់ថ្នាក់}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Result;
