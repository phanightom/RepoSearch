export type fetchReposRequest = {
  userName: string,
  pageNumber: number,
  perpage: number,
}

export async function fetchRepos({userName, perpage, pageNumber}: fetchReposRequest) {
  const response = await fetch(
    `https://api.github.com/users/${userName}/repos?sort=fullname&per_page=${perpage}&page=${pageNumber}&access_token=82ed7adb47c0928aa24d2ad7e4196a4316225055`,
  )
  return await response.json();
}