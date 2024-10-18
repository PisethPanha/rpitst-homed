import React, { useEffect, useState } from "react";
import { ManagementCard } from "../management";
import axios from "axios";

function TeacherTC() {
  const [teacher, setTeacher] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost/databaseforReact/teacher.php")
      .then((res) => setTeacher(res.data["teacher_certificate"]))
      .catch((err) => console.log(err));
  }, []);
  console.log(teacher);
  return (
    <div className="grid xl:grid-cols-3 p-4 sm:grid-cols-2 gap-4">
      {teacher.map((element, i) => (
        <ManagementCard
          key={i}
          delay="0.1"
          img={"teacher_certificate/" + element.img_link}
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

export default TeacherTC;
