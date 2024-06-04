import resume from "../assets/Files/CarignanAnnieCV.pdf";
import styles from "../styles/Resume.module.scss";
import { IoCloseCircleOutline } from "react-icons/io5";

import { pdfjs } from "react-pdf";
import { useState, useEffect } from "react";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

import { Document, Page } from "react-pdf";
import { useNavigate } from "react-router-dom";

function Resume() {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(true);

  const handleResize = () => {
    if (window.innerWidth <= 480) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    handleResize();
  }, []);

  window.addEventListener("resize", handleResize);

  return (
    <div className={styles.resume}>
      <div className={styles.closeButton}>
        <IoCloseCircleOutline
          size={40}
          onClick={() => {
            navigate("/");
          }}
        />
      </div>

      <Document file={resume} className={styles.document}>
        <Page
          width={isMobile ? "325" : "545"}
          pageNumber={1}
          renderTextLayer={false}
          renderAnnotationLayer={false}
        />
      </Document>
    </div>
  );
}

export default Resume;
