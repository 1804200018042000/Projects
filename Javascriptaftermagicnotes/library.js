// create a class library and implement the following
//constructor must take the bbok list as an argument
//getBooklist()
//issueBook(bookname,user)
//returnBook(bookname)


class Library {
    constructor(bookList) {
        this.bookList = bookList;
        this.issuedBook = {}; //blank object
    }
    getBookList() {
        this.bookList.forEach(element => {
            console.log(element);
        })
    }
    issueBook(bookname, user) {
        console.log(this.issuedBook[bookname]);
        if (this.issuedBook[bookname] != undefined) {
            this.issuedBook[bookname] = user; // ye book iske paas hain
        }
    }
    returnBook(bookname) {
        delete this.issuedBook[bookname];

    }
}