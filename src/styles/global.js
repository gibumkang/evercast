import styled, { keyframes } from "styled-components";

export const mainSlideVariants = {
  initial: {
    width: "100%",
  },
  animate: {
    width: "50%",
    transition: {
      ease: "linear",
    },
  },
  exit: {
    width: "100%",
  },
};

export const rightSlideInVariants = {
  initial: {
    x: "100%",
    width: "50%",
    right: "-50%",
  },
  animate: {
    x: "0%",
    width: "50%",
    right: "0%",
    transition: {
      ease: "linear",
    },
  },
};

export const slideExitLeftVariants = {
  initial: {
    x: "0%",
    opacity: 1,
  },
  animate: {
    x: "-100%",
    opacity: 0,
    transition: {
      ease: "linear",
    },
  },
};

export const slideToLeftVariants = {
  initial: {
    right: "0%",
  },
  animate: {
    right: "100%",
    transition: {
      ease: "linear",
    },
  },
};

export const Button = styled.a`
  padding: 7.5px 15px;
  text-align: center;
  display: inline-block;
  &:hover {
    cursor: pointer;
  }
`;

export const ExportButton = styled(Button)`
  padding: 7.5px 0rem;
  svg {
    position: relative;
    top: 2.5px;
    left: 2.5px;
  }
`;

export const ButtonWithIcon = styled(Button)`
  background: #000;
  margin-bottom: 1rem;
  color: #fff;
  padding: 0px 15px 10px 15px;
  svg {
    position: relative;
    top: 5px;
    left: 2.5px;
  }
`;
