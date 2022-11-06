import React, {useState} from "react";
import {Collapse, List, ListItemButton} from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

const mockData = [
  {
    index: 1,
    title: 'Chapter 1',
    id: 1
  },
  {
    index: 2,
    title: 'Chapter 2',
    id: 2
  },
  {
    index: 3,
    title: 'Chapter 3',
    id: 3
  },
  {
    index: 4,
    title: 'Chapter 4',
    id: 4
  },
]

const Chapters: React.FC = () => {
  const { edittingBookData } = useSelector((state:RootState) => state.book)
  const headers = edittingBookData.split(/^(?=#)/m).filter(Boolean).map(function(val) { return val.replaceAll(/[\\\n](.+)/g, "") })

  const [open, setOpen] = useState(0);

  const handleClick = (chapterId) => {
    chapterId == open ? setOpen(0) : setOpen(chapterId);
  };

  return (
    <>
      <List>
        {
          mockData.map(chapter => {
            return (
              <div key={chapter.id}>
                <ListItemButton key={chapter.id} onClick={() => handleClick(chapter.id)}>{chapter.title}</ListItemButton>
                <Collapse in={open == chapter.id} timeout="auto"  key={`chapter${chapter.id}-content`}>
                  <List key={`chapter${chapter.id}-headers`} component="div" disablePadding>
                    {
                      headers.map(header => {
                        return (
                          <ListItemButton key={`${chapter.id}-${header}`}>{header}</ListItemButton>
                        )
                      })
                    }
                  </List>
                </Collapse>
              </div>
            )
          })
        }
      </List>
    </>
  )
}

export default Chapters;
