import React from "react";
import styled from "styled-components";
import { DownloadBtnWrapper, DownloadButton } from "../../components/common";
import { DocRenderer } from "../../types";
import { textFileLoader } from "../../utils/fileLoaders";
import { DownloadIcon } from "../pdf/components/icons";

const TXTRenderer: DocRenderer = ({
  mainState: { currentDocument, currentFileNo },
}) => {
  return (
    <Container id="txt-renderer">
      <DownloadBtnWrapper>
        {currentDocument?.fileData && (
          <DownloadButton
            id={`${currentDocument.fileType}-download-${currentFileNo}`}
            href={currentDocument?.fileData as string}
            download={currentDocument?.title}
          >
            <DownloadIcon />
          </DownloadButton>
        )}
      </DownloadBtnWrapper>
      {currentDocument?.fileData}
    </Container>
  );
};

export default TXTRenderer;

TXTRenderer.fileTypes = ["txt", "text/plain"];
TXTRenderer.weight = 0;
TXTRenderer.fileLoader = textFileLoader;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 30px;
  border-radius: 8px;
`;
