


const searchBook = () => {
    const searchField = document.getElementById("search-field");
    const searchText = searchField.value;
    searchField.value = '';


    const url = `https://openlibrary.org/search.json?q=${searchText}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResult(data.docs));


}



const displaySearchResult = books => {

    const searchResult = document.getElementById("search-result");

    books.forEach(book => {
        console.log(book);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
            <div class="card ">
                <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top p-2" alt="..." width="250" height="400">
                
                <div class="row g-0">
                    <div class="col-6 col-md-4 text-center border border-primary fw-bolder p-1"> BOOK NAME </div>
                    <div class="col-sm-6 col-md-8 text-center border border-primary fw-bolder fst-italic text-info p-1">${book.title}</div>
                </div>
                <div class="row g-0">
                    <div class="col-6 col-md-4 text-center border border-primary fw-bolder p-1"> AUTHOR NAME </div>
                    <div class="col-sm-6 col-md-8 text-center border border-primary fw-bolder fst-italic text-info p-1">${book.author_name}</div>
                </div>
                <div class="row g-0">
                    <div class="col-6 col-md-4 text-center border border-primary fw-bolder p-1"> PUBLISHER </div>
                    <div class="col-sm-6 col-md-8 text-center border border-primary fw-bolder fst-italic text-info p-1">${book.publisher}</div>
                </div>
                <div class="row g-0">
                    <div class="col-6 col-md-4 text-center border border-primary fw-bolder p-1"> FIRST PUBLISH YEAR </div>
                    <div class="col-sm-6 col-md-8 text-center border border-primary fw-bolder fst-italic text-info p-1">${book.first_publish_year}</div>
                </div>
            </div>
        `;
        searchResult.appendChild(div);



    })
}