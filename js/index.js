// DOMContentLoaded 
document.addEventListener("DOMContentLoaded", (event) => {
    githubSearch()
})

// Global variables
const githubApiUrl = "https://api.github.com/"

function githubSearch () {
    // Variables
    const githubForm = document.getElementById("github-form")
    let searchInput = document.getElementById("search")
    let userList = document.getElementById("user-list")
    let reposList = document.getElementById("repos-list")

    function userSearch (e) {
        e.preventDefault();
        const searchUser = searchInput.value
        console.log(searchUser)
        githubForm.reset()

        fetch(`${githubApiUrl}search/users?q=${searchUser}` , {
            headers: {
                'Accept': 'application/vnd.github.v3+json'
            }
        })
        .then(r => r.json())
        .then((users) => {
            console.log(typeof users)
            console.log(users)
        })
        .catch(error => console.log(error))
    }

    // Event Listeners
    githubForm.addEventListener('submit', userSearch)
    // githubForm.addEventListener('submit', repoSearch)

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