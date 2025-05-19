async function loadHTML(id, file) {
  const res = await fetch(file);
  const html = await res.text();
  document.getElementById(id).innerHTML = html;
}

loadHTML("navbar", "navbar.html");
loadHTML("footer", "footer.html");
