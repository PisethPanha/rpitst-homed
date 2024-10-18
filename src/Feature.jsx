import React from "react";
import { motion } from "framer-motion";
function Feature() {
  const x = 0.1;
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="mx-auto bg-purple-800 container p-8 rounded-lg shadow-[0px_0px_10px] shadow-gray-600"
    >
      <center>
        <h1 className="text-white font-[700] text-[30px]">
          គុណតម្លៃរបស់​ RPITST
        </h1>
      </center>
      <div className="grid grid-cols-3 text-white text-[20px]">
        <motion.h3
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0, delay: 0.1 }}
          transition={{ duration: 0.5 }}
        >
          R = ការគោរព​ (Respect)
        </motion.h3>
        <motion.h3
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          whileInView={{ opacity: 1, x: 0, delay: 0.3 }}
        >
          I = សុចរិត (Integrity)
        </motion.h3>
        <motion.h3
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          whileInView={{ opacity: 1, x: 0, delay: 0.5 }}
        >
          S = ភាពឆ្លាតវៃ (Smart)
        </motion.h3>
        <motion.h3
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          whileInView={{ opacity: 1, x: 0, delay: 0.7 }}
        >
          P = ជំនាញអាជីព (Professional)
        </motion.h3>
        <motion.h3
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          whileInView={{ opacity: 1, x: 0, delay: 0.9 }}
        >
          T = ទេពកោសល្យ (Talent)
        </motion.h3>
        <motion.h3
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          whileInView={{ opacity: 1, x: 0, delay: 1.1 }}
        >
          T = ការងារជាក្រុម (Teamwork)
        </motion.h3>
      </div>
    </motion.div>
  );
}

export default Feature;
