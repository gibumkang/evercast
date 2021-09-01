import React, { useState } from "react";
import MainView from "../MainView/MainView";
import ItemView from "../ItemView/ItemView";
import { SlideyboyContext } from "../../hooks/context";
import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";
import * as GS from "../../styles/global";
import AssignmentView from "../AssignmentView/AssignmentView";

const View = () => {
  //set the default state at the component level
  const [slideyboy, setSlideyboy] = useState(false);
  const [assignment, setAssignment] = useState(false);
  //store state in a constant value to pass into provider
  const value = { slideyboy, setSlideyboy, assignment, setAssignment };
  return (
    <SlideyboyContext.Provider value={value}>
      <motion.div>
        <AnimatePresence>
          <motion.div key="1" variants={assignment && GS.slideExitLeftVariants} initial="intiial" animate="animate" exit="exit">
            <Slide key="2" variants={slideyboy && GS.mainSlideVariants} initial="initial" animate="animate" exit="exit">
              <MainView />
            </Slide>
          </motion.div>
          {slideyboy && (
            <Slide key="3" variants={assignment ? GS.slideToLeftVariants : GS.rightSlideInVariants} initial="initial" animate="animate" exit="exit">
              <ItemView />
            </Slide>
          )}
          {assignment && (
            <Slide key="4" variants={GS.rightSlideInVariants} initial="initial" animate="animate" exit="exit">
              <AssignmentView />
            </Slide>
          )}
        </AnimatePresence>
      </motion.div>
    </SlideyboyContext.Provider>
  );
};

const Slide = styled(motion.div)`
  position: absolute;
  width: 100%;
`;

export default View;
