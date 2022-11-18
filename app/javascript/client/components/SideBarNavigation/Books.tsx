import { List, ListItemButton } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { useSelector } from "react-redux";
import AppContext from "../../routes/AppContext";
import { RootState } from "../../store";
import LoginLink from "../LoginLink";
import {bookActions} from "./actions";
import appActions from "../../actions/appActions";

const Books: React.FC = () => {
  const {loggedIn} = useContext(AppContext);
  if (!loggedIn) return <LoginLink />

  const {books} = useSelector((state:RootState) => state.book)
  const {selectedBook} = useSelector((state:RootState) => state.app)

  useEffect(() => {
    bookActions.list()
  }, [])

  const handleSelectBook = (book: {}) => {
    appActions.selectBook(book)
  }

  const isSelect = (currentBookId) => {
    return parseInt(selectedBook) === currentBookId
  }

  return (
    <>
      <List style={{overflow: 'scroll'}}>
        {
          books.map(book => {
            return (
              <div key={book.id}>
                <ListItemButton key={book.id} selected={isSelect(book.id)} onClick={() => handleSelectBook(book)}>{book.name}</ListItemButton>
              </div>
            )
          })
        }
      </List>
    </>
  )
}

export default Books;
