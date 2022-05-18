import React from "react";
import styled from "styled-components";
import { DownloadBtnWrapper, DownloadButton } from "../../components/common";
import { DocRenderer } from "../../types";
import { DownloadIcon } from "../pdf/components/icons";

const ImageProxyRenderer: DocRenderer = (props) => {
  const {
    mainState: { currentDocument, currentFileNo },
    children,
  } = props;

  if (!currentDocument) return null;

  return (
    <Container id="image-renderer" {...props}>
      <DownloadBtnWrapper>
        {currentDocument?.fileData && (
          <DownloadButton
            id={`${currentDocument.fileType}-download-${currentFileNo}`}
            href={currentDocument?.uri}
            download={currentDocument?.title}
          >
            <DownloadIcon />
          </DownloadButton>
        )}
      </DownloadBtnWrapper>
      {children || (
        <Img id="image-img" src={currentDocument.fileData as string} />
      )}
    </Container>
  );
};

export default ImageProxyRenderer;

ImageProxyRenderer.fileTypes = [];
ImageProxyRenderer.weight = 0;

const Container = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: #fff;
`;

const Img = styled.img`
  max-width: 95%;
  max-height: 95%;
`;
