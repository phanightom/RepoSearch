
type fetchReposRequest = {
  userName: string,
  pageNumber: number,
  perpage: number,
}

export async function fetchRepos({userName, perpage, pageNumber}: fetchReposRequest) {
  const response = await fetch(
    `https://api.github.com/users/${userName}/repos?sort=fullname&per_page=${perpage}&page=${pageNumber}`,
    {
      headers: {
        'Authorization': '04ab0c1fc3be25abed0fc043237d962278579e04'
      }
    }
  )
  return await response.json();
}