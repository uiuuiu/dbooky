import React from "react";
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Box, Tab } from "@mui/material";

import EdittingBook from "./EdittingBook";
import Chapters from "./Chapters";
import Account from "./Account";
import Books from './Books';

import {bookActions} from "./actions";
import appActions from "../../actions/appActions";

import './index.scss';
import { useSelector } from "react-redux";
import { RootState } from "../../store";

const SideBarNavigation: React.FC = () => {  
  const { selectedTab } = useSelector((state: RootState) => state.app)

  return (
    <>
      <TabContext value={selectedTab}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={(_e, value) => appActions.changeSidebarTab(value)} aria-label="lab API tabs example">
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
        <TabPanel className="tab-content" value="3"><Books /></TabPanel>
        <TabPanel className="tab-content" value="4"><Account /></TabPanel>
      </TabContext>
    </>
  )
}

export default SideBarNavigation;
