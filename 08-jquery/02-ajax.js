$(document).ready(() => {
  const url = "https://anapioficeandfire.com/api/books/";

  const addBookToDOM = (item) => {
    console.log(item.name);

    $("#books").append(
      $("<div>")
        .css({
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "20px",
        })
        .append($("<h3>").text(item.name))
        .append($("<p>").text(item.authors[0]))
        .append($("<p>").text(item.released.substr(0, 4)))
        .append($("<h3>").text(`$item.numberOfPages`))
    );

    /* element.style.display = "flex";
    element.style.flexDirection = "column";
    element.style.alignItems = "center";
    element.style.marginTop = "20px";

    title.textContent = item.name;
    author.textContent = `by ${item.authors[0]}`;
    published.textContent = item.released.substr(0, 4);
    pages.textContent = `${item.numberOfPages} pages`;
    */
  };

  const fetchData = (url) => {
    $.ajax({
      type: "GET",
      url: url,
      success: (data) => {
        data.forEach((item) => {
          addBookToDOM(item);
        });
      },
      error: (error) => {
        console.error(error);
        $("#books").append($("<div>").text());
      },

      complete: () => {
        $("#loading").remove();
      },
    });
  };

  fetchData(url);
});
