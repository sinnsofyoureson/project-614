import React from "react";
import styled from "styled-components";

const StyledLoader = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 0.55);
  z-index: 100;
`;

const Loader: React.FC = () => {
  return (
    <StyledLoader>
      <svg
        width="200px"
        height="200px"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
        className="lds-ripple"
        style={{ background: "none" }}
      >
        <circle
          cx="50"
          cy="50"
          r="36.5067"
          fill="none"
          ng-attr-stroke="{{config.c1}}"
          ng-attr-stroke-width="{{config.width}}"
          stroke="#1c4595"
          stroke-width="2"
        >
          <animate
            attributeName="r"
            calcMode="spline"
            values="0;40"
            keyTimes="0;1"
            dur="1"
            keySplines="0 0.2 0.8 1"
            begin="-0.5s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            calcMode="spline"
            values="1;0"
            keyTimes="0;1"
            dur="1"
            keySplines="0.2 0 0.8 1"
            begin="-0.5s"
            repeatCount="indefinite"
          />
        </circle>
        <circle
          cx="50"
          cy="50"
          r="18.4727"
          fill="none"
          ng-attr-stroke="{{config.c2}}"
          ng-attr-stroke-width="{{config.width}}"
          stroke="#e76a24"
          stroke-width="2"
        >
          <animate
            attributeName="r"
            calcMode="spline"
            values="0;40"
            keyTimes="0;1"
            dur="1"
            keySplines="0 0.2 0.8 1"
            begin="0s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            calcMode="spline"
            values="1;0"
            keyTimes="0;1"
            dur="1"
            keySplines="0.2 0 0.8 1"
            begin="0s"
            repeatCount="indefinite"
          />
        </circle>
      </svg>
    </StyledLoader>
  );
};

export default Loader;
