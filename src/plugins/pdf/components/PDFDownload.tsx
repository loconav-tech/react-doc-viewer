import React, { FC, useContext } from "react";
import { PDFContext } from "../state";
import { DownloadBtnWrapper, DownloadButton } from "../../../components/common";
import { DownloadIcon } from "./icons";

const PDFDownload: FC<{}> = () => {
  const {
    state: { mainState },
  } = useContext(PDFContext);

  const currentDocument = mainState?.currentDocument || null;

  return (
    <DownloadBtnWrapper>
      {currentDocument?.fileData && (
        <DownloadButton
          id="pdf-download"
          href={currentDocument?.uri}
          download={currentDocument?.title}
        >
          <DownloadIcon />
        </DownloadButton>
      )}
    </DownloadBtnWrapper>
  );
};

export default PDFDownload;
