import React, { useEffect, useRef } from "react";
import { useAppContext } from "./AppContext";
import { Chart } from "chart.js";
import "./Statistiques.css";

function Statistiques() {
  const { csvData } = useAppContext();
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const parent = canvas.parentNode;

    const resizeCanvas = () => {
      canvas.width = parent.clientWidth;
      canvas.height = parent.clientHeight;
    };

    resizeCanvas();
    const handleResize = () => {
      resizeCanvas();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [csvData]);

  return <canvas ref={canvasRef} id="canvas"></canvas>;
}

export default Statistiques;
