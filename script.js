async function loadNews(category) {
  let url = "https://api.spaceflightnewsapi.net/v4/articles/";

  if(category === "quantum") url += "?search=quantum";
  if(category === "medicine") url += "?search=medicine";
  if(category === "science") url += "?search=science";
  if(category === "ai") url += "?search=artificial intelligence";
  if(category === "space") url += "?search=space";
  if(category === "robotics") url += "?search=robot";
  if(category === "energy") url += "?search=energy";
  if(category === "biotech") url += "?search=biotech";
  if(category === "physics") url += "?search=physics";
  if(category === "future") url += "?search=technology";
  if(category === "technology") url += "?search=technology";

  const res = await fetch(url);
  const data = await res.json();
  const articles = data.results;

  const container = document.getElementById("news");
  container.innerHTML = "";

  articles.sort((a,b) => new Date(b.published_at) - new Date(a.published_at));

  articles.forEach(a => {
    container.innerHTML += `
      <div class="card">
        <img src="${a.image_url}">
        <h3>${a.title}</h3>
        <p>${a.summary}</p>
        <a href="${a.url}" target="_blank">Ler mais</a>
      </div>
    `;
  });

  const today = new Date().toLocaleDateString();
  document.getElementById("updateDate").innerText =
    "Última atualização: " + today;
}

setInterval(() => loadNews(currentCategory), 86400000);
