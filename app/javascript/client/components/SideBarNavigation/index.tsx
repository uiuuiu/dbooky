import React, { useState } from "react";
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Box, Tab } from "@mui/material";

import EdittingBook from "./EdittingBook";
import Chapters from "./Chapters";

import './index.scss';

const SideBarNavigation: React.FC = () => {  
  const [tab, setTab] = useState('1');

  return (
    <>
      <TabContext value={tab}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={(e, value) => setTab(value || '1')} aria-label="lab API tabs example">
            <Tab label="Editting" value="1" />
            <Tab label="Chapters" value="2" />
            <Tab label="Books" value="3" />
            <Tab label="Account" value="4" />
          </TabList>
        </Box>
        <TabPanel className="tab-content" value="1">
          <EdittingBook />
        </TabPanel>
        <TabPanel className="tab-content" value="2"><Chapters /></TabPanel>
        <TabPanel className="tab-content" value="3">Item Three</TabPanel>
        <TabPanel className="tab-content" value="4">Item Four</TabPanel>
      </TabContext>
    </>
  )
}

export default SideBarNavigation;
