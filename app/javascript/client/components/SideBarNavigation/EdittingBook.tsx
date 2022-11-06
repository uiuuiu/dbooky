import React from "react";
import MDEditor from "@uiw/react-md-editor";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

const EdittingBook: React.FC = () => {
  const { edittingBookData } = useSelector((state:RootState) => state.book)
  const value = edittingBookData.split(/^(?=#)/m).filter(Boolean).map(function(val) { return val.replaceAll(/[\\\n](.+)/g, "") }).join("")

  return (
    <>
      <MDEditor.Markdown source={value || ""} style={{ width: '100%', overflow: 'scroll' }} />
    </>
  )
}

export default EdittingBook;
