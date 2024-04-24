import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { useAppContext } from "./AppContext";
import Papa from "papaparse";

function DragAndDrop({ open }) {
  const { setCsvData } = useAppContext();
  const onDrop = useCallback(
    (acceptedFiles) => {
      acceptedFiles.forEach((file) => {
        const reader = new FileReader();

        reader.onabort = () => console.log("file reading was aborted");
        reader.onerror = () => console.log("file reading has failed");
        reader.onload = () => {
          const binaryStr = reader.result;
          Papa.parse(binaryStr, {
            complete: (result) => {
              console.log("CSV data 1 : ");

              var a = 0;
              const updatedCsvData = result.data.map((item) => {
                a++;
                item["active"] = true;
                item["id"] = a;
                return item;
              });
              a = 0;

              setCsvData(updatedCsvData);
              console.log(result.data);
            },
            header: true,
            dynamicTyping: true,
          });
        };

        reader.readAsText(file);
      });
    },
    [setCsvData],
  );
  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
    </div>
  );
}

export default DragAndDrop;
