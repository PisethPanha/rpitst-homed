import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
function Icttable() {
  const [sesmes1, setSesmes1] = useState([]);
  const [sesmes2, setSesmes2] = useState([]);
  const [sesmes21, setSesmes21] = useState([]);
  const [sesmes22, setSesmes22] = useState([]);
  const [sesmes31, setSesmes31] = useState([]);
  const [sesmes32, setSesmes32] = useState([]);
  const [sesmes41, setSesmes41] = useState([]);
  const [sesmes42, setSesmes42] = useState([]);
  useEffect(() => {
    // Fetch data from the PHP backend
    axios
      .get("http://localhost/databaseforReact/react.php")
      .then((response) => {
        setSesmes1(response.data.sesmes1);
        setSesmes2(response.data.sesmes2);
        setSesmes21(response.data.sesmes21);
        setSesmes22(response.data.sesmes22);
        setSesmes31(response.data.sesmes31);
        setSesmes32(response.data.sesmes32);
        setSesmes41(response.data.sesmes41);
        setSesmes42(response.data.sesmes42);
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
      });
  }, []);
  return (
    <div className="mx-[5rem]">
      <table>
        <tbody>
          <tr>
            <th className="head_year" colSpan="8">
              Year: 1
            </th>
          </tr>
          <tr>
            <td rowSpan="2">កូដមុខវិជ្ជា&ZeroWidthSpace;(CODE)</td>
            <td rowSpan="2">មុខវិជ្ជា&ZeroWidthSpace;(SUBJECT)</td>
            <td colSpan="2">ទ្រឹស្ដី(THEORY)</td>
            <td colSpan="2">អនុវត្ត (PRACTICUM)</td>
            <td colSpan="2">សរុប (TOTAL)</td>
          </tr>
          <tr>
            <td>ចំនួនក្រេឌិត (CREDIT)</td>
            <td>ចំនួនម៉ោង (HOURS)</td>
            <td>ចំនួនក្រេឌិត (CREDIT)</td>
            <td>ចំនួនម៉ោង (HOURS)</td>
            <td>ចំនួនក្រេឌិត (CREDIT)</td>
            <td>ចំនួនម៉ោង (HOURS)</td>
          </tr>
          <tr>
            <th colSpan="8">Semester :1</th>
          </tr>
          {sesmes1.map((element, i) => (
            <tr key={i}>
              <td>{element.SUBJECT_CODE}</td>
              <td>{element.SUBJECT}</td>
              <td>{element.THEORY_CREDIT}</td>
              <td>{element.THEORY_HOURS}</td>
              <td>{element.PRACTICUM_CREDIT}</td>
              <td>{element.PRACTICUM_HOURS}</td>
              <td>{element.TOTAL_CREDIT}</td>
              <td>{element.TOTAL_HOURS}</td>
            </tr>
          ))}

          <tr className="bg">
            <td colSpan="2">សរុប</td>
            <td>21</td>
            <td>336</td>
            <td>8</td>
            <td>256</td>
            <td>29</td>
            <td>592</td>
          </tr>
          <tr>
            <td colSpan="8" bgcolor="blue" className="sem_2">
              Semester:2
            </td>
          </tr>
          {sesmes2.map((element, i) => (
            <tr key={i}>
              <td>{element.SUBJECT_CODE}</td>
              <td>{element.SUBJECT}</td>
              <td>{element.THEORY_CREDIT}</td>
              <td>{element.THEORY_HOURS}</td>
              <td>{element.PRACTICUM_CREDIT}</td>
              <td>{element.PRACTICUM_HOURS}</td>
              <td>{element.TOTAL_CREDIT}</td>
              <td>{element.TOTAL_HOURS}</td>
            </tr>
          ))}
          <tr className="bg">
            <td colSpan="2">សរុប</td>
            <td>21</td>
            <td>336</td>
            <td>8</td>
            <td>256</td>
            <td>29</td>
            <td>592</td>
          </tr>

          {/* year2 */}

          <tr>
            <th className="head_year" colSpan="8">
              Year: 2
            </th>
          </tr>
          <tr>
            <td rowSpan="2">កូដមុខវិជ្ជា&ZeroWidthSpace;(CODE)</td>
            <td rowSpan="2">មុខវិជ្ជា&ZeroWidthSpace;(SUBJECT)</td>
            <td colSpan="2">ទ្រឹស្ដី(THEORY)</td>
            <td colSpan="2">អនុវត្ត (PRACTICUM)</td>
            <td colSpan="2">សរុប (TOTAL)</td>
          </tr>
          <tr>
            <td>ចំនួនក្រេឌិត (CREDIT)</td>
            <td>ចំនួនម៉ោង (HOURS)</td>
            <td>ចំនួនក្រេឌិត (CREDIT)</td>
            <td>ចំនួនម៉ោង (HOURS)</td>
            <td>ចំនួនក្រេឌិត (CREDIT)</td>
            <td>ចំនួនម៉ោង (HOURS)</td>
          </tr>
          <tr>
            <th colSpan="8">Semester :1</th>
          </tr>
          {sesmes21.map((element, i) => (
            <tr key={i}>
              <td>{element.SUBJECT_CODE}</td>
              <td>{element.SUBJECT}</td>
              <td>{element.THEORY_CREDIT}</td>
              <td>{element.THEORY_HOURS}</td>
              <td>{element.PRACTICUM_CREDIT}</td>
              <td>{element.PRACTICUM_HOURS}</td>
              <td>{element.TOTAL_CREDIT}</td>
              <td>{element.TOTAL_HOURS}</td>
            </tr>
          ))}

          <tr className="bg">
            <td colSpan="2">សរុប</td>
            <td>21</td>
            <td>336</td>
            <td>8</td>
            <td>256</td>
            <td>29</td>
            <td>592</td>
          </tr>
          <tr>
            <td colSpan="8" bgcolor="blue" className="sem_2">
              Semester:2
            </td>
          </tr>
          {sesmes22.map((element, i) => (
            <tr key={i}>
              <td>{element.SUBJECT_CODE}</td>
              <td>{element.SUBJECT}</td>
              <td>{element.THEORY_CREDIT}</td>
              <td>{element.THEORY_HOURS}</td>
              <td>{element.PRACTICUM_CREDIT}</td>
              <td>{element.PRACTICUM_HOURS}</td>
              <td>{element.TOTAL_CREDIT}</td>
              <td>{element.TOTAL_HOURS}</td>
            </tr>
          ))}
          <tr className="bg">
            <td colSpan="2">សរុប</td>
            <td>21</td>
            <td>336</td>
            <td>8</td>
            <td>256</td>
            <td>29</td>
            <td>592</td>
          </tr>
          {/* // year2 */}

          {/* year3 */}

          <tr>
            <th className="head_year" colSpan="8">
              Year: 3
            </th>
          </tr>
          <tr>
            <td rowSpan="2">កូដមុខវិជ្ជា&ZeroWidthSpace;(CODE)</td>
            <td rowSpan="2">មុខវិជ្ជា&ZeroWidthSpace;(SUBJECT)</td>
            <td colSpan="2">ទ្រឹស្ដី(THEORY)</td>
            <td colSpan="2">អនុវត្ត (PRACTICUM)</td>
            <td colSpan="2">សរុប (TOTAL)</td>
          </tr>
          <tr>
            <td>ចំនួនក្រេឌិត (CREDIT)</td>
            <td>ចំនួនម៉ោង (HOURS)</td>
            <td>ចំនួនក្រេឌិត (CREDIT)</td>
            <td>ចំនួនម៉ោង (HOURS)</td>
            <td>ចំនួនក្រេឌិត (CREDIT)</td>
            <td>ចំនួនម៉ោង (HOURS)</td>
          </tr>
          <tr>
            <th colSpan="8">Semester :1</th>
          </tr>
          {sesmes31.map((element, i) => (
            <tr key={i}>
              <td>{element.SUBJECT_CODE}</td>
              <td>{element.SUBJECT}</td>
              <td>{element.THEORY_CREDIT}</td>
              <td>{element.THEORY_HOURS}</td>
              <td>{element.PRACTICUM_CREDIT}</td>
              <td>{element.PRACTICUM_HOURS}</td>
              <td>{element.TOTAL_CREDIT}</td>
              <td>{element.TOTAL_HOURS}</td>
            </tr>
          ))}

          <tr className="bg">
            <td colSpan="2">សរុប</td>
            <td>21</td>
            <td>336</td>
            <td>8</td>
            <td>256</td>
            <td>29</td>
            <td>592</td>
          </tr>
          <tr>
            <td colSpan="8" bgcolor="blue" className="sem_2">
              Semester:2
            </td>
          </tr>
          {sesmes32.map((element, i) => (
            <tr key={i}>
              <td>{element.SUBJECT_CODE}</td>
              <td>{element.SUBJECT}</td>
              <td>{element.THEORY_CREDIT}</td>
              <td>{element.THEORY_HOURS}</td>
              <td>{element.PRACTICUM_CREDIT}</td>
              <td>{element.PRACTICUM_HOURS}</td>
              <td>{element.TOTAL_CREDIT}</td>
              <td>{element.TOTAL_HOURS}</td>
            </tr>
          ))}
          <tr className="bg">
            <td colSpan="2">សរុប</td>
            <td>21</td>
            <td>336</td>
            <td>8</td>
            <td>256</td>
            <td>29</td>
            <td>592</td>
          </tr>
          {/* year3 */}

          {/* year4 */}

          <tr>
            <th className="head_year" colSpan="8">
              Year: 4
            </th>
          </tr>
          <tr>
            <td rowSpan="2">កូដមុខវិជ្ជា&ZeroWidthSpace;(CODE)</td>
            <td rowSpan="2">មុខវិជ្ជា&ZeroWidthSpace;(SUBJECT)</td>
            <td colSpan="2">ទ្រឹស្ដី(THEORY)</td>
            <td colSpan="2">អនុវត្ត (PRACTICUM)</td>
            <td colSpan="2">សរុប (TOTAL)</td>
          </tr>
          <tr>
            <td>ចំនួនក្រេឌិត (CREDIT)</td>
            <td>ចំនួនម៉ោង (HOURS)</td>
            <td>ចំនួនក្រេឌិត (CREDIT)</td>
            <td>ចំនួនម៉ោង (HOURS)</td>
            <td>ចំនួនក្រេឌិត (CREDIT)</td>
            <td>ចំនួនម៉ោង (HOURS)</td>
          </tr>
          <tr>
            <th colSpan="8">Semester :1</th>
          </tr>
          {sesmes41.map((element, i) => (
            <tr key={i}>
              <td>{element.SUBJECT_CODE}</td>
              <td>{element.SUBJECT}</td>
              <td>{element.THEORY_CREDIT}</td>
              <td>{element.THEORY_HOURS}</td>
              <td>{element.PRACTICUM_CREDIT}</td>
              <td>{element.PRACTICUM_HOURS}</td>
              <td>{element.TOTAL_CREDIT}</td>
              <td>{element.TOTAL_HOURS}</td>
            </tr>
          ))}

          <tr className="bg">
            <td colSpan="2">សរុប</td>
            <td>21</td>
            <td>336</td>
            <td>8</td>
            <td>256</td>
            <td>29</td>
            <td>592</td>
          </tr>
          <tr>
            <td colSpan="8" bgcolor="blue" className="sem_2">
              Semester:2
            </td>
          </tr>
          {sesmes42.map((element, i) => (
            <tr key={i}>
              <td>{element.SUBJECT_CODE}</td>
              <td>{element.SUBJECT}</td>
              <td>{element.THEORY_CREDIT}</td>
              <td>{element.THEORY_HOURS}</td>
              <td>{element.PRACTICUM_CREDIT}</td>
              <td>{element.PRACTICUM_HOURS}</td>
              <td>{element.TOTAL_CREDIT}</td>
              <td>{element.TOTAL_HOURS}</td>
            </tr>
          ))}
          <tr className="bg">
            <td colSpan="2">សរុប</td>
            <td>21</td>
            <td>336</td>
            <td>8</td>
            <td>256</td>
            <td>29</td>
            <td>592</td>
          </tr>

          {/* year4 */}
        </tbody>
      </table>
    </div>
  );
}

export default Icttable;
