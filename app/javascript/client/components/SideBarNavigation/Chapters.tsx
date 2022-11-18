import React, {useEffect, useState} from "react";
import {Collapse, List, ListItemButton} from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { bookActions } from "./actions";

const Chapters: React.FC = () => {
  const { edittingBookData, chapters, pages } = useSelector((state:RootState) => state.book)
  const { selectedBook, selectedBookType } = useSelector((state:RootState) => state.app)
  const headers = edittingBookData.split(/^(?=#)/m).filter(Boolean).map(function(val) { return val.replaceAll(/[\\\n](.+)/g, "") })

  useEffect(() => {
    if (selectedBook) {
      if (selectedBookType === 'simple') {
        bookActions.fetchPages(selectedBook);
      } else {
        bookActions.fetchChapters(selectedBook);
      }
    }
  }, [])

  const [open, setOpen] = useState(0);

  const handleClick = (chapterId) => {
    chapterId == open ? setOpen(0) : setOpen(chapterId);
  };

  return (
    <>
      {selectedBookType == 'simple' ? <PageList pages={pages} handleClick={handleClick} /> : <ChapterList chapters={chapters} handleClick={handleClick} />}
    </>
  )
}

type ChapterListType = {
  chapters: Array<{[key: string]: any}>,
  handleClick: Function
}

const ChapterList: React.FC<ChapterListType> = ({chapters, handleClick}) => {
  return (
    <List>
      {
        chapters.map(chapter => {
          return (
            <div key={chapter.id}>
              <ListItemButton key={chapter.id} onClick={() => handleClick(chapter.id)}>{chapter.name}</ListItemButton>
              {/* <Collapse in={open == chapter.id} timeout="auto"  key={`chapter${chapter.id}-content`}>
                <List key={`chapter${chapter.id}-headers`} component="div" disablePadding>
                  {
                    headers.map(header => {
                      return (
                        <ListItemButton key={`${chapter.id}-${header}`}>{header}</ListItemButton>
                      )
                    })
                  }
                </List>
              </Collapse> */}
            </div>
          )
        })
      }
    </List>
  )
}

type PageListType = {
  pages: Array<{[key: string]: any}>,
  handleClick: Function
}

const PageList: React.FC<PageListType> = ({pages, handleClick}) => {
  return (
    <List>
      {
        pages.map(page => {
          return (
            <div key={page.id}>
              <ListItemButton key={page.id} onClick={() => handleClick(page.id)}>{page.name}</ListItemButton>
              {/* <Collapse in={open == page.id} timeout="auto"  key={`page${page.id}-content`}>
                <List key={`page${page.id}-headers`} component="div" disablePadding>
                  {
                    headers.map(header => {
                      return (
                        <ListItemButton key={`${page.id}-${header}`}>{header}</ListItemButton>
                      )
                    })
                  }
                </List>
              </Collapse> */}
            </div>
          )
        })
      }
    </List>
  )
}

export default Chapters;
