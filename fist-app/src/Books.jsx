function Books(){
    const books = [{id:101, name:"java", author:"srinivas"},
                   {id:102, name:"React", author:"Ratan"},
                   {id:103, name:"Oracle", author:"Dinesh"},
                   {id:104, name:"OOPS", author:"KB"}
                  ]
    const listBooks =  
      books.map(book=>(<li key={book.id}>Id....{book.id},Name....{book.name}, Author....{book.author}, </li>))
     
    return (<>
              <h1>Book List</h1>
              <ul>
                {listBooks}
              </ul>
            </>)           
}
export default Books;