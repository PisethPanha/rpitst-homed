import React from "react";
import Slider from "./Slider";

function Background() {
  return (
    <div>
      <Slider />
      <center>
        <h1 className="text-[20px] font-[700]">
          <u>ប្រវត្តិវិទ្យាស្ថាន</u>
        </h1>
      </center>
      <br />
      <br />
      <div className="w-full h-full grid px-4 md:flex">
        <div className="border-[2px] border-black rounded-t-2xl md:rounded-l-2xl md:rounded-r-none">
          <ul className="list-disc items-start ml-20 leading-10">
            <li>
              មជ្ឈមណ្ឌលបណ្តុះបណ្តាលវិជ្ជាជីវៈខេត្តតាកែវបង្កើតឡើងនៅខែកញ្ញាឆ្នាំ
              ១៩៩៣។
            </li>
            <li>ឆ្នាំ១៩៩៣ ដល់ឆ្នាំ១៩៩៨ ដោយមានការឧបត្ថម្ភពីគម្រោង ILO។</li>
            <li>
              នៅខែកក្កដាឆ្នាំ១៩៩៨ក៏បានផ្ទេរការងារនេះមកនៅក្រោមការគ្រប់គ្រងផ្ទាល់របស់មន្ទីរអប់រំយុវជន
              និងកីឡាខេត្តនៃក្រសួងអប់រំយុវជន និងកីឡា។
            </li>
            <li>
              ឆ្នាំ២០០៤មជ្ឈមណ្ឌលបណ្តុះបណ្តាលវិជ្ជាជីវៈខេត្តតាកែវបានផ្ទេរមកក្រោមការគ្រប់គ្រងរបស់មន្ទីរការងារ
              និងបណ្តុះបណ្តាលវិជ្ជាជីវៈ នៃក្រសួងការងារ និងបណ្តុះបណ្តាល
              វិជ្ជាជីវៈ។
            </li>
            <li>
              នៅឆ្នាំ២០១៤មជ្ឈមណ្ឌលបណ្តុះបណ្តាលវិជ្ជាជីវៈខេត្តតាកែវត្រូវបានប្រែក្លាយទៅជា
              វិទ្យាស្ថានពហុបច្ចេទេសភូមិភាគតេជោសែនតាកែវ។
            </li>
            <li>
              វិទ្យាស្ថានពហុបច្ចេទេសភូមិភាគតេជោសែនតាកែវជាគ្រឹះស្ថានសាធារណៈ
              ស្ថិតនៅក្រោមការ គ្រប់គ្រងរបស់ក្រសួងការងារ និងបណ្តុះបណ្តាវិជ្ជាជីវៈ
            </li>
            <li>
              វិទ្យាស្ថានត្រូវបានប្រែក្លាយមកពីមជ្ឈមណ្ឌលបណ្តុះបណ្តាលវិជ្ជាជីវៈខេត្តតាកែវ
              តាមអនុក្រឹត្យលេខ១១៨អនក្រ.បក ចុះថ្ងៃទី១៧ ខែមីនា ឆ្នាំ២០១៤។
            </li>
            <li>
              វិទ្យាស្ថានផ្តល់ការបណ្តុះបណ្តាលជំនាញបច្ចេកទេស និងវិជ្ជាជីវៈ
              ចាប់ពីកម្រិតវិញ្ញាបនបត្ររយៈពេលខ្លី
              រហូតដល់កម្រិតបរិញ្ញាបត្របច្ចេកវិទ្យា ដល់ក្រុមគោលដៅរួមមាន
              ជនជាតិភាគតិច ជនក្រីក្រ ជនពិការ ស្រ្តីមេមាយ ទ័ពរំសាយ
              អ្នកបាត់បង់ការងារជនទំនេរគ្មានការងារធ្វើ និងសិស្សបោះបង់ការសិក្សា
              ឬគ្មានលទ្ធភាពបន្តការសិក្សានៅថ្នាក់ឧត្តមសិក្សា និងសាធារណៈជនទូទៅ
              ក្នុងរូបភាពនៃការផ្តល់អាហារូបករ
            </li>
          </ul>
        </div>
        <div className="border-[2px] border-black rounded-b-2xl md:rounded-r-2xl md:rounded-l-none">
          <ul className="list-disc items-start ml-20 leading-10">
            <li>RPITST Established in September 1993.</li>
            <li>1993 to 1998 with the support of the ILO project.</li>
            <li>
              In July 1998, the work was transferred to the Department of Youth
              Education. And Provincial Sports of the Ministry of Education,
              Youth and Sports.
            </li>
            <li>
              2004 RPITST transferred under the management of the Department of
              Labor And Vocational Training of the Ministry of Labor and
              Vocational Training.
            </li>
            <li>
              In 2014, TRPITST was transformed into Techo Sen Takeo Regional
              Polytechnic Institute.
            </li>
            <li>
              Techo Sen Takeo Regional Polytechnic Institute is a public
              institution. Under the control of the Ministry of Labor and
              Vocational Training
            </li>
            <li>
              The institute was transformed from RPITST Pursuant to Sub-Decree
              No. 118 dated March 17, 2014.
            </li>
            <li>
              RPITST From short-term certification level Up to Bachelor of
              Technology to target group including Minorities, the poor, the
              disabled, the widows Unemployed, unemployed and dropouts Or
              inability to pursue higher education and the general public In the
              image of scholarships
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Background;
