import React, { useState } from "react";
import Routes from "../../../routes/index";

function Saved() {
  const [bookList, setBookList] = useState([])

  function loadBooks() {
    Routes.getBooks()
      .then(res => 
        setBookList(res.data)
      )
      .catch(err => console.log(err));
  };

  function deleteBook(id) {
    Routes.deleteBook(id)
      .then(res => loadBooks())
      .catch(err => console.log(err));
  }

  function saveBook(id){
        googleRoutes.saveBook({
          title: formObject.title,
          author: formObject.author,
          synopsis: formObject.synopsis
        })
          .then(res => loadBooks())
          .catch(err => console.log(err));
      }

      return (
        <div>
  
        </div>
      );
  }


export default Saved;