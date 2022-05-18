import React from "react";
import styled from "styled-components";
import { DownloadBtnWrapper, DownloadButton } from "../../components/common";
import { DocRenderer } from "../../types";
import { DownloadIcon } from "../pdf/components/icons";

const MSDocRenderer: DocRenderer = ({
  mainState: { currentDocument, currentFileNo },
}) => {
  if (!currentDocument) return null;

  return (
    <Container id="msdoc-renderer">
      <DownloadBtnWrapper>
        {currentDocument?.fileData && (
          <DownloadButton
            id={`${currentDocument.fileType}-download-${currentFileNo}`}
            href={currentDocument?.fileData as string}
            download={currentDocument?.uri}
          >
            <DownloadIcon />
          </DownloadButton>
        )}
      </DownloadBtnWrapper>
      <IFrame
        id="msdoc-iframe"
        title="msdoc-iframe"
        src={`https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(
          currentDocument.uri
        )}`}
        frameBorder="0"
      />
    </Container>
  );
};

export default MSDocRenderer;

const MSDocFTMaps = {
  doc: ["doc", "application/msword"],
  docx: [
    "docx",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  ],
  xls: ["xls", "application/vnd.ms-excel"],
  xlsx: [
    "xlsx",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  ],
  ppt: ["ppt", "application/vnd.ms-powerpoint"],
  pptx: [
    "pptx",
    "application/vnd.openxmlformats-officedocument.presentationml.presentation",
  ],
};

MSDocRenderer.fileTypes = [
  ...MSDocFTMaps.doc,
  ...MSDocFTMaps.docx,
  ...MSDocFTMaps.xls,
  ...MSDocFTMaps.xlsx,
  ...MSDocFTMaps.ppt,
  ...MSDocFTMaps.pptx,
];
MSDocRenderer.weight = 0;
MSDocRenderer.fileLoader = ({ fileLoaderComplete }) => fileLoaderComplete();

const Container = styled.div`
  width: 100%;
`;
const IFrame = styled.iframe`
  width: 100%;
  height: 100%;
  border: 0;
`;
