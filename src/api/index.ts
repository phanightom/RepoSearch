export type fetchReposRequest = {
  userName: string,
  pageNumber: number,
  perpage: number,
}

export async function fetchRepos({userName, perpage, pageNumber}: fetchReposRequest) {
  const response = await fetch(
    `https://api.github.com/users/${userName}/repos?sort=fullname&per_page=${perpage}&page=${pageNumber}`,
  )
  return await response.json();
}