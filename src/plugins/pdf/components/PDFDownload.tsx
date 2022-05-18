import React, { FC, useContext } from "react";
import styled from "styled-components";
import { PDFContext } from "../state";
import { LinkButton } from "../../../components/common";
import { DownloadPDFIcon } from "./icons";

const DownloadBtnWrapper = styled.div`
  display: flex;
  width: 32px;
  height: 32px;
  align-items: center;
  justify-content: center;
`;

const DownloadButton = styled(LinkButton)`
  width: 30px;
  height: 30px;
  @media (max-width: 768px) {
    width: 25px;
    height: 25px;
  }
`;

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
          href={currentDocument?.fileData as string}
          download={currentDocument?.uri}
        >
          <DownloadPDFIcon size="75%" />
        </DownloadButton>
      )}
    </DownloadBtnWrapper>
  );
};

export default PDFDownload;
