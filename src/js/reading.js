Reading = {

    create : function () {
        var main_content = document.getElementById("main_content");

        var book_list = document.createElement("ul");
        book_list.className = "book_list";
        main_content.appendChild(book_list);

        var book_creator = this.create_book_element;
        this.books.forEach(function (book) {
            book_list.appendChild(book_creator(book));
        });
    },

    create_book_element : function (book) {
        var book_element = document.createElement("li");

        var title = document.createElement("div");
        title.className = "title";
        title.textContent = book.title;

        var author = document.createElement("div");
        author.className = "author";
        // FIXME - this should be in a loop and have a test for more than one author
        author.textContent = book.author[0];

        book_element.appendChild(title);
        book_element.appendChild(author);

        return book_element;
    },

    books : [
        {
            author : [
                "robert martin"
            ],
            title : "clean code"
        },
        {
            author : [
                "robert martin"
            ],
            title : "the clean coders"
        },
        {
            author : [
                "andy hunt",
                "dave thomas"
            ],
            title : "the pragmatic programmer"
        },
        {
            author : [
                "jez humble",
                "david farley"
            ],
            title : "continuous delivery"
        },
        {
            author : [
                "joshua bloch"
            ],
            title : "effective java, second edition"
        },
        {
            author : [
                "tomek kaczanowski"
            ],
            title : "good test, bad test"
        },
        {
            author : [
                "sandi metz"
            ],
            title : "practical object oriented design in ruby"
        },
        {
            author : [
                "douglas crockford"
            ],
            title : "javascript: the good parts"
        },
        {
            author : [
                "kent beck"
            ],
            title : "test driven development by example"
        }
    ]
};

