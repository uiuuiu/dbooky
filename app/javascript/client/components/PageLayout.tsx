import React from "react";
import {Link} from "react-router-dom";
import { Container, Grid } from "@mui/material";
import "./PageLayout.scss";


type PageLayoutProps = {
  children: React.ReactNode
}

type CustomGridProps = {
  children?: React.ReactNode
  sm?: number
  className?: string
}

const CustomGrid: React.FC<CustomGridProps> = ({children, ...props}) => { 
  return <Grid item style={{border: "1px solid black", height: "100%"}} {...props}>{children}</Grid>
};

const PageLayout: React.FC<PageLayoutProps> = ({ children }: PageLayoutProps) => {

  return (
    <Grid container spacing={2} style={{height: "100vh"}}>
      <CustomGrid sm={3} className="left-board">
        <div className="header-links">
          <div className="item">Github</div>
          <div className="item">Upwork</div>
          <div className="item">Linked</div>
          <div className="item"><Link to="/">Home</Link></div>
        </div>
      </CustomGrid>
      <CustomGrid sm={9}>
      </CustomGrid>
    </Grid>
  )
}

export default PageLayout;
