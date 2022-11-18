import React from "react";
import {Link} from "react-router-dom";
import { Container, Grid } from "@mui/material";
import "./PageLayout.scss";
import { useSelector } from "react-redux";
import {RootState} from '../store';
import SideBarNavigation from "./SideBarNavigation";


type PageLayoutProps = {
  children: React.ReactNode
}

type CustomGridProps = {
  children?: React.ReactNode
  sm?: number,
  style?: {},
  className?: string
}

const CustomGrid: React.FC<CustomGridProps> = ({children, ...props}) => { 
  const style = {
    ...props.style,
    border: "1px solid black",
    height: "100%"
  }
  return <Grid item {...props} style={style}>{children}</Grid>
};

const PageLayout: React.FC<PageLayoutProps> = ({ children }: PageLayoutProps) => {
  return (
    <Grid container spacing={2} style={{height: "100vh"}}>
      <CustomGrid sm={3} className="left-board" style={{overflow: 'scroll'}}>
        <SideBarNavigation />
      </CustomGrid>
      <CustomGrid sm={9}>
        {children}
      </CustomGrid>
    </Grid>
  )
}

export default PageLayout;
