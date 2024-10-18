import React from "react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import axios from "axios";
import image from "../assets/IMG2.png";
function Management() {
  const [teacher, setTeacher] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost/databaseforReact/teacher.php")
      .then((res) => {
        setTeacher(res.data["teacher_management"]);
      })
      .catch((err) => console.log(err));
  }, []);

  teacher.map((element, i) => {
    console.log(element.img_link);
  });
  return (
    <div className="grid xl:grid-cols-3 p-4 sm:grid-cols-2 gap-4">
      {teacher.map((element, i) => (
        <ManagementCard
          key={i}
          delay="0.1"
          img={"teacher_management/" + element.img_link}
          khname={element.name_kh}
          latinName={element.name_en}
          position={element.position}
          doh={element.doh}
          graduate={element.graduated}
          major={element.major}
          phone={element.phone}
          tele={element.phone}
          email={element.email}
        />
      ))}
    </div>
  );
}

export function ManagementCard(p) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0, delay: 1 }}
      transition={{ duration: 1, delay: p.delay }}
      className="text-white mx-auto w-[20rem] p-4 grid items-center justify-center bg-blue-600 rounded-lg shadow-[0px_0px_20px] shadow-gray-600"
    >
      <center>
        <img
          className="w-[200px] self-center rounded-lg"
          src={`http://localhost/databaseforReact/RPITST_ADMIN/admin_react2/${p.img}`}
        />
      </center>

      <div className="text-center text-white items-center justify-center">
        <h3 className="md:text-[20px] text-[15px] font-bold">
          {p.khname} <br />
          {p.latinName}
        </h3>
      </div>
      <table className=" md:w-[15rem] w-[5rem] text-[15px] ">
        <tr>
          <td
            colSpan="2"
            className="bg-transparent text-white text-left border-none"
          >
            ទទួលបន្ទុក: {p.position}
          </td>
        </tr>

        <tr>
          <td
            colSpan="2"
            className="bg-transparent text-white text-left border-none"
          >
            ចូលបម្រើការងារ: {p.doh}
          </td>
        </tr>

        <tr>
          <td
            colSpan="2"
            className="bg-transparent text-white text-left border-none"
          >
            កម្រិត: {p.graduate}
          </td>
        </tr>
        <tr>
          <td
            colSpan="2"
            className="bg-transparent text-white text-left border-none"
          >
            ជំនាញ : {p.major}
          </td>
        </tr>
        <tr>
          <td
            colSpan="2"
            className="bg-transparent text-white text-left border-none"
          >
            ទូរស័ព្ទ : {p.phone}
          </td>
        </tr>
        <tr>
          <td
            colSpan="2"
            className="bg-transparent text-white text-left border-none"
          >
            TELEGRAM : {p.tele}
          </td>
        </tr>
        <tr>
          <td
            colSpan="2"
            className="bg-transparent text-white text-left border-none"
          >
            EMAIL : {p.email}
          </td>
        </tr>
      </table>
    </motion.div>
  );
}

export default Management;
