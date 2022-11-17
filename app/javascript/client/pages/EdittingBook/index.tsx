import React, { useEffect, useState } from "react";
import MDEditor from "@uiw/react-md-editor";
import actions from "./actions";

import { useAutosave } from 'react-autosave';

import './index.scss';

const EdittingBook: React.FC = () => {
  const [content, setContent] = useState<string>(localStorage.getItem("edittingBookData") || "**Hello world!!!**");
  useEffect(() => {
    actions.saveBookData(content);
  }, [content])

  useAutosave({ data: content, onSave: actions.autoSaveBook, saveOnUnmount: false });

  return (
    <div className="site-layout-content">
      <MDEditor
          value={content}
          onChange={(val) => setContent(val || '')}
          height={'90vh'}
        />
    </div>
  )
};

export default EdittingBook;
