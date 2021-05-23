import React, { useState } from "react";
import Routes from "../../../routes/index";
import {Form, Button} from "react-bootstrap";

function Search() {
  const [books, setBooks] = useState([])

  function handleFormSubmit(event) {
    event.preventDefault();
    
  };

  function saveBook(id){
    Routes.saveBook({
      title: formObject.title,
      author: formObject.author,
      synopsis: formObject.synopsis
    })
      .then(res => loadBooks())
      .catch(err => console.log(err));
  }

    return (
      <div>
          <Form>
              
          </Form>
      </div>
    );
  }


export default Search;