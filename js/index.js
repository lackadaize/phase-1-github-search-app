// DOMContentLoaded 
document.addEventListener("DOMContentLoaded", (event) => {
    githubSearch()
})

// Global variables
const githubApiUrl = "https://api.github.com/"

// githubSearch function
function githubSearch () {
    // Variables
    const githubForm = document.getElementById("github-form")
    let searchInput = document.getElementById("search")
    let userList = document.getElementById("user-list")
    let reposList = document.getElementById("repos-list")

    // console.log
    console.log(githubApiUrl)
    console.log(githubForm)
    console.log(searchInput)
    console.log(userList)
    console.log(reposList)
}




/*
The index.html file has a form with a search input. When the form is submitted, it should take the value of the input and search GitHub for user matches using the User Search Endpoint.
Using the results of the search, display information about the users to the page. (You might include showing their username, avatar and a link to their profile.)
Clicking on one of these users should send a request to the User Repos Endpoint and return data about all the repositories for that user.
Using the response from the Users Repos Endpoint, display all the repositories for that user on the page.
*/