import React from "react";
import { useState, useEffect } from "react";
import axios from "axios"; // Import Axios
import BookCard from "./BookCard";
import { Link } from "react-router-dom";
import SearchBox from "./SearchBox";
import arrowback from "../assets/arrowback.png";
import close from "../assets/close.png";

function Elibrary() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState([]);
  const [tosee1, setTosee1] = useState(false);
  const [tosee2, setTosee2] = useState(false);

  const [found, setFound] = useState(false);
  const [select, setSelect] = useState([]);
  const [relate, setRelate] = useState(false);
  const seleted = new FormData();
  const [img, setImg] = useState("");
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");

  // async function handleSelect(value) {
  //   seleted.append("keyword", value);
  //   const res = await axios.post(
  //     "http://localhost/databaseforReact/select.php",
  //     seleted,
  //     { headers: { "Content-Type": "multipart/form-data" } }
  //   );
  //   setResult(...result, res.data);
  //   setRelate(false);
  //   console.log(result);
  // }

  useEffect(() => {
    axios
      .get(
        "http://localhost/databaseforReact/RPITST_ADMIN/admin_react2/upbook.php"
      )
      .then((res) => {
        setUsers(res.data);
        console.log(res.data);
      })
      .catch((error) => setError(error));
    // console.log(result);
  }, [users]);
  const [result, setResult] = useState([]);
  const [seeResult, setSeeResult] = useState(false);
  const [keyword, setKeyword] = useState("");
  const clickSearch = new FormData();
  const formData = new FormData();
  formData.append("keyword", keyword);
  async function handleSearch() {
    const res = await axios.post(
      "http://localhost/databaseforReact/live_search.php",
      formData,
      { headers: { "Content-Type": "multipart/form-data" } }
    );

    setSearch(res.data);
    console.log(search);
  }

  // useEffect(() => {
  //   if (keyword == "") {
  //     setTosee(users);
  //   } else {
  //     setResult(search);
  //     if (search.length == 0) {
  //       setFound(true);
  //     } else {
  //       setFound(false);
  //     }
  //   }
  // }, [users, search, result, found]);

  return (
    <div className="w-full">
      <center>
        <div className="">
          <form className="max-w-md mx-auto">
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
                id="default-search"
                onChange={(event) => {
                  setKeyword(event.target.value);
                  setRelate(true);
                  handleSearch();
                }}
                className="block w-full p-4 pr-[6rem] ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search Mockups, Logos..."
                required
              />
              <button
                onClick={(event) => {
                  event.preventDefault();
                  setResult(search);
                  setSeeResult(true);
                  setTosee1(true);
                  setTosee2(false);
                }}
                className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Search
              </button>
              <div
                style={{ display: relate ? "flex" : "none" }}
                className="absolute justify-between bg-white shadow-gray-700 shadow-[0px_0px_20px] w-full z-10 text-gray-800 font-[600] text-left px-4 rounded-md"
              >
                <div>
                  {search.map((ele, i) => (
                    <p
                      onClick={async () => {
                        seleted.append("keyword", ele.title);
                        const res = await axios.post(
                          "http://localhost/databaseforReact/select.php",
                          seleted,
                          { headers: { "Content-Type": "multipart/form-data" } }
                        );
                        // setResult(...result, res);
                        console.log(res);
                        // setImg(res.data.img);
                        // setTitle(res.data.title);
                        // setLink(res.data.link_downlaoad);
                        setRelate(false);
                        setSeeResult(false);
                        setTosee2(true);
                        setTosee1(true);
                        setSelect(res.data);
                      }}
                    >
                      {ele.title}
                    </p>
                  ))}
                </div>
                <div onClick={() => setRelate(false)}>
                  <img
                    src={close}
                    width="20px"
                    height="20px"
                    className="mt-2"
                  />
                </div>
              </div>
            </div>
          </form>
          <br />
          <Link to="/book-upload">
            <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
              UPLAOD BOOK
            </button>
          </Link>
        </div>
      </center>
      <br />
      <br />
      <div
        className="justify-center items-center xl:grid-cols-3 p-4 sm:grid-cols-2 gap-4"
        style={{ display: tosee1 ? "none" : "grid" }}
      >
        {users.map((user, i) => (
          <BookCard
            key={i}
            title={user.title}
            img={user.img}
            pdf={user.link_downlaoad}
          />
        ))}
      </div>
      <div style={{ display: seeResult ? "block" : "none" }}>
        <img
          src={arrowback}
          onClick={() => {
            setSeeResult(false);
            setTosee1(false);
            setTosee2(false);
          }}
          width="30px"
        />
        <div
          className="justify-center items-center xl:grid-cols-3 p-4 sm:grid-cols-2 gap-4"
          style={{ display: seeResult ? "grid" : "none" }}
        >
          {result.map((user, i) => (
            <BookCard
              key={i}
              title={user.title}
              img={user.img}
              pdf={user.link_downlaoad}
            />
          ))}
        </div>
      </div>
      <div style={{ display: tosee2 ? "block" : "none" }}>
        <img
          src={arrowback}
          onClick={() => {
            setTosee2(false);
            setTosee1(false);
          }}
          width="30px"
        />
        <div className="grid justify-center items-center xl:grid-cols-3 p-4 sm:grid-cols-2 gap-4">
          {search.map((ele) => (
            <BookCard
              title={ele.title}
              img={ele.img}
              pdf={ele.link_downlaoad}
            />
          ))}
          {/* <BookCard title={title} img={img} pdf={Link} /> */}
        </div>
      </div>
      <h1
        className="text-[30px] font-[700] text-gray-800"
        style={{ display: found ? "block" : "none" }}
      >
        Search not found
      </h1>
    </div>
  );
}

export default Elibrary;
