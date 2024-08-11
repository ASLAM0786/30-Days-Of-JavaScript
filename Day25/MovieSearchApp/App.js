const apiKey = "eca8040";

const movieUrl = `http://www.omdbapi.com/?i=tt3896198&apikey=${apiKey}`;
// const posterUrl = `http://img.omdbapi.com/?apikey=${apiKey}&`;
// Promise.all(fetch(movieUrl), fetch(posterUrl))
//   .then((movieResponse, posterResponse) => {
//     if (!movieResponse.ok || !posterResponse.ok) {
//       throw new Error("Network response was not ok");
//     }
//     return Promise.all([weatherResponse.json(), forecastResponse.json()]);
//   })
//   .then(([movieResponse, posterResponse]) => {
//     //! Hide progress bar
//     console.log(posterResponse);
//     console.log(movieResponse);

//     progressContainer.style.display = "none";
//     progressBar.style.width = "0";
//     const title = data.Title;
//     const releasedDate = data.Released;
//     document.getElementById("title").textContent = `Title: ${title}`;
//     document.getElementById(
//       "release-year"
//     ).textContent = `Released Date: ${releasedDate}`;
//   });

// fetch(movieUrl)
//   .then((response) => response.json())
//   .then((data) => {
//     console.log("Move Data:", data);
//     //* Update the webpage
//     const title = data.Title;
//     const poster = data.Poster; // URL of the poster
//     const releasedDate = data.Released;
//     document.getElementById("title").textContent = `Title: ${title}`;
//     document.getElementById("poster").src = poster; // Set the poster image src
//     document.getElementById(
//       "release-year"
//     ).textContent = `Released Date: ${releasedDate}`;
//   })
//   .catch((error) => {
//     console.error("Error fetching Movie data:", error);
//   });
// Function to handle more info button click
// Function to handle more info button click
function moreInfo(imdbID) {
  const infoUrl = `http://www.omdbapi.com/?i=${imdbID}&apikey=${apiKey}`;
  fetch(infoUrl)
    .then((response) => response.json())
    .then((data) => {
      if (data.Response === "True") {
        // Display more information about the movie
        const movieInfo = `
                    <h2>${data.Title}</h2>
                    <img src="${data.Poster}" alt="poster" />
                    <p><strong>Released:</strong> ${data.Released}</p>
                    <p><strong>Genre:</strong> ${data.Genre}</p>
                    <p><strong>Director:</strong> ${data.Director}</p>
                    <p><strong>Plot:</strong> ${data.Plot}</p>
                `;
        document.getElementById("movie-info").innerHTML = movieInfo;
      } else {
        document.getElementById(
          "movie-info"
        ).innerHTML = `<p>${data.Error}</p>`;
      }
    })
    .catch((error) => console.error("Error fetching movie info:", error));
}

document.addEventListener("DOMContentLoaded", () => {
  const movieId = "tt3896198"; // Example IMDb ID
  const movieUrl = `http://www.omdbapi.com/?i=${movieId}&apikey=${apiKey}`;

  fetch(movieUrl)
    .then((response) => response.json())
    .then((data) => {
      console.log("Movie Data:", data);
      //* Update the webpage
      const title = data.Title;
      const poster = data.Poster; // URL of the poster
      const releasedDate = data.Released;

      document.getElementById("title").textContent = `Title: ${title}`;
      document.getElementById("poster").src = poster; // Set the poster image src
      document.getElementById(
        "release-year"
      ).textContent = `Released Date: ${releasedDate}`;
    })
    .catch((error) => {
      console.error("Error fetching Movie data:", error);
    });

  const progressContainer = document.getElementById("progress-container");
  const progressBar = document.getElementById("progress-bar");
  const form = document.getElementById("movie-form");

  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent the default form submission

    const title = document.getElementById("movie-title").value;
    if (title) {
      // Show progress bar
      progressContainer.style.display = "block";
      progressBar.style.width = "100%";

      // Fetch movie data
      const url = `http://www.omdbapi.com/?t=${title}&apikey=${apiKey}`;
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          // Hide progress bar
          progressContainer.style.display = "none";
          progressBar.style.width = "0";

          // Check if the response contains movie data
          if (data.Response === "True") {
            // If the response is a list of movies
            if (data.Search) {
              const movieItems = data.Search;
              document.getElementById("movie").innerHTML = movieItems
                .map(
                  (item) => `
                                <div class="movie-item">
                                    <h3>${item.Title}</h3>
                                    <img src="${item.Poster}" alt="poster" />
                                    <p>Released Year: ${item.Year}</p>
                                    <button onclick="moreInfo('${item.imdbID}')">More Info</button>
                                </div>
                            `
                )
                .join("");
            }
            // If the response is a single movie
            else {
              const movie = data;
              document.getElementById("movie").innerHTML = `
                            <div class="movie-item">
                                <h3>${movie.Title}</h3>
                                <img src="${movie.Poster}" alt="poster" />
                                <p>Released Year: ${movie.Released}</p>
                                <button onclick="moreInfo('${movie.imdbID}')">More Info</button>
                            </div>
                        `;
            }
          } else {
            // Handle cases where no movie is found or an error occurs
            document.getElementById("movie").innerHTML = `<p>${data.Error}</p>`;
          }
        })
        .catch((error) => {
          console.error("Error fetching movie data:", error);
          // Hide progress bar on error
          progressContainer.style.display = "none";
          progressBar.style.width = "0";
        });
    }
  });
});
