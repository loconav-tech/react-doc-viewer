import React from "react";
import { IIconProps } from "../../../../components/icons";

export const PrevPDFNavIcon = (props: IIconProps) => {
  return <PDFNavArrow {...props} reverse />;
};

export const NextPDFNavIcon = (props: IIconProps) => {
  return <PDFNavArrow {...props} />;
};

const PDFNavArrow = (props: IIconProps) => {
  const { color, size, reverse } = props;
  return (
    <svg
      width={size || "100%"}
      height={size || "100%"}
      style={{ transform: `${reverse ? "rotate(180deg)" : ""}` }}
      viewBox="0 0 12 12"
      version="1.1"
    >
      <g
        id="Icons"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g id="Rounded" transform="translate(-548.000000, -1000.000000)">
          <g id="AV" transform="translate(100.000000, 852.000000)">
            <g
              id="-Round-/-AV-/-skip_next"
              transform="translate(442.000000, 142.000000)"
            >
              <g>
                <rect
                  id="Rectangle-Copy-52"
                  x="0"
                  y="0"
                  width="24"
                  height="24"
                ></rect>
                <path
                  d="M7.58,16.89 L13.35,12.82 C13.91,12.42 13.91,11.58 13.35,11.19 L7.58,7.11 C6.91,6.65 6,7.12 6,7.93 L6,16.07 C6,16.88 6.91,17.35 7.58,16.89 Z M16,7 L16,17 C16,17.55 16.45,18 17,18 C17.55,18 18,17.55 18,17 L18,7 C18,6.45 17.55,6 17,6 C16.45,6 16,6.45 16,7 Z"
                  id="icon_color"
                  fill={color || "#aaa"}
                ></path>
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};

export const DownloadIcon = (props: IIconProps) => {
  const { color, size, reverse } = props;
  return (
    <svg
      width={size || "20"}
      height={size || "20"}
      style={{ transform: `${reverse ? "rotate(180deg)" : ""}` }}
      id="Layer_1"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.64227 15.2844V1.99994"
        stroke={color || "#061238"}
        stroke-width="1.25"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M3.00001 17.458L16.2845 17.458"
        stroke={color || "#061238"}
        stroke-width="1.25"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M13.6201 11.2886L9.64214 15.285L5.66415 11.2886"
        stroke={color || "#061238"}
        stroke-width="1.25"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export const ZoomInPDFIcon = (props: IIconProps) => {
  return <ZoomPDFIcon {...props} />;
};

export const ZoomOutPDFIcon = (props: IIconProps) => {
  return <ZoomPDFIcon {...props} reverse />;
};

const ZoomPDFIcon = (props: IIconProps) => {
  const { color, size, reverse } = props;
  return (
    <svg
      width={size || "100%"}
      height={size || "100%"}
      viewBox="0 0 32 32"
      version="1.1"
    >
      <g
        id="Page-1"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g id="search-plus-icon" fill={color || "#aaa"}>
          <path
            id="search-plus"
            d={
              reverse
                ? "M 13 13 L 16 13 L 19 13 L 19 16 L 16 16 L 13 16 L 10 16 L 10 13 Z M 19.4271 21.4271 C 18.0372 22.4175 16.3367 23 14.5 23 C 9.8056 23 6 19.1944 6 14.5 C 6 9.8056 9.8056 6 14.5 6 C 19.1944 6 23 9.8056 23 14.5 C 23 16.3367 22.4175 18.0372 21.4271 19.4271 L 27.0119 25.0119 C 27.5621 25.5621 27.5575 26.4425 27.0117 26.9883 L 26.9883 27.0117 C 26.4439 27.5561 25.5576 27.5576 25.0119 27.0119 L 19.4271 21.4271 L 19.4271 21.4271 L 19.4271 21.4271 Z M 14.5 21 C 18.0899 21 21 18.0899 21 14.5 C 21 10.9101 18.0899 8 14.5 8 C 10.9101 8 8 10.9101 8 14.5 C 8 18.0899 10.9101 21 14.5 21 L 14.5 21 Z"
                : "M 13 13 L 13 10 L 16 10 L 16 13 L 19 13 L 19 16 L 16 16 L 16 19 L 13 19 L 13 16 L 10 16 L 10 13 Z M 19.4271 21.4271 C 18.0372 22.4175 16.3367 23 14.5 23 C 9.8056 23 6 19.1944 6 14.5 C 6 9.8056 9.8056 6 14.5 6 C 19.1944 6 23 9.8056 23 14.5 C 23 16.3367 22.4175 18.0372 21.4271 19.4271 L 27.0119 25.0119 C 27.5621 25.5621 27.5575 26.4425 27.0117 26.9883 L 26.9883 27.0117 C 26.4439 27.5561 25.5576 27.5576 25.0119 27.0119 L 19.4271 21.4271 L 19.4271 21.4271 L 19.4271 21.4271 Z M 14.5 21 C 18.0899 21 21 18.0899 21 14.5 C 21 10.9101 18.0899 8 14.5 8 C 10.9101 8 8 10.9101 8 14.5 C 8 18.0899 10.9101 21 14.5 21 L 14.5 21 Z"
            }
          />
        </g>
      </g>
    </svg>
  );
};

export const ResetZoomPDFIcon = (props: IIconProps) => {
  const { color, size } = props;
  return (
    <svg width={size || "100%"} height={size || "100%"} viewBox="0 0 24 24">
      <path
        fill={color || "#aaa"}
        d="M9.29,13.29,4,18.59V17a1,1,0,0,0-2,0v4a1,1,0,0,0,.08.38,1,1,0,0,0,.54.54A1,1,0,0,0,3,22H7a1,1,0,0,0,0-2H5.41l5.3-5.29a1,1,0,0,0-1.42-1.42ZM5.41,4H7A1,1,0,0,0,7,2H3a1,1,0,0,0-.38.08,1,1,0,0,0-.54.54A1,1,0,0,0,2,3V7A1,1,0,0,0,4,7V5.41l5.29,5.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42ZM21,16a1,1,0,0,0-1,1v1.59l-5.29-5.3a1,1,0,0,0-1.42,1.42L18.59,20H17a1,1,0,0,0,0,2h4a1,1,0,0,0,.38-.08,1,1,0,0,0,.54-.54A1,1,0,0,0,22,21V17A1,1,0,0,0,21,16Zm.92-13.38a1,1,0,0,0-.54-.54A1,1,0,0,0,21,2H17a1,1,0,0,0,0,2h1.59l-5.3,5.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L20,5.41V7a1,1,0,0,0,2,0V3A1,1,0,0,0,21.92,2.62Z"
      />
    </svg>
  );
};

export const TogglePaginationPDFIcon = (props: IIconProps) => {
  const { color, size, reverse } = props;
  return (
    <svg
      width={size || "100%"}
      height={size || "100%"}
      style={{ transform: `${reverse ? "rotate(90deg)" : ""}` }}
      version="1.1"
      id="Scroll_1"
      viewBox="0 0 297 297"
      xmlSpace="preserve"
    >
      <path
        fill={color || "#aaa"}
        d="M206.004,200.723h-31.231V96.277h31.231c0.005,0,0.014,0,0.019,0c5.289,0,9.575-4.287,9.575-9.574
  c0-2.342-0.841-4.488-2.236-6.151L156.168,3.851C154.36,1.428,151.515,0,148.492,0c-3.023,0-5.868,1.428-7.675,3.851L83.302,80.98
  c-2.166,2.902-2.507,6.779-0.883,10.017c1.624,3.236,4.936,5.28,8.559,5.28h31.231v104.445H90.978c-3.623,0-6.934,2.044-8.559,5.28
  c-1.624,3.237-1.283,7.114,0.883,10.017l57.513,77.129c1.808,2.424,4.652,3.852,7.675,3.852c3.023,0,5.868-1.428,7.676-3.852
  l57.514-77.129c2.164-2.902,2.507-6.779,0.883-10.017C212.938,202.767,209.627,200.723,206.004,200.723z"
      />
    </svg>
  );
};
