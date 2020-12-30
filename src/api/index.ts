

export async function fetchRepos(userName: string) {
  const data = await fetch(`https://api.github.com/users/${userName}/repos`)
  return data;
}