/*
create a class library and implement the following:

constructor must take the book list as an arguement 
getBookList()
issueBook(bookname, user)
returnBook(bookname)
*/

class Library {
    constructor(bookAuthor, bookTitle, bookList) {
        this.author = bookAuthor;
        this.title = bookTitle;
        this.book = bookList;
    }

    getBookList() {
        return `the book name is ${this.title}`;
    }
}
sumair = new Library("Chetanbhagat", "half", "stud");
console.log(sumair);
console.log(sumair.getBookList());