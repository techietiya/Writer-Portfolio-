let pages = [
  { title: "About Me", content: "I am a writer who believes words heal, provoke, and remember." },
  { title: "My Work", content: "Short essays on society, identity, and quiet resistance." }
];

let current = 0;

const book = document.getElementById("book");
const titleInput = document.getElementById("titleInput");
const contentInput = document.getElementById("contentInput");

function render() {
  book.innerHTML = "";

  pages.forEach((p, i) => {
    const page = document.createElement("div");
    page.className = "page";
    if (i < current) page.classList.add("flipped");

    page.innerHTML = `<h2>${p.title}</h2><p>${p.content}</p>`;
    book.appendChild(page);
  });

  loadEditor();
}

function loadEditor() {
  titleInput.value = pages[current]?.title || "";
  contentInput.value = pages[current]?.content || "";
}

document.getElementById("next").onclick = () => {
  if (current < pages.length - 1) {
    current++;
    render();
  }
};

document.getElementById("prev").onclick = () => {
  if (current > 0) {
    current--;
    render();
  }
};

document.getElementById("save").onclick = () => {
  pages[current].title = titleInput.value;
  pages[current].content = contentInput.value;
  render();
};

document.getElementById("add").onclick = () => {
  pages.push({ title: "New Page", content: "Write here..." });
  current = pages.length - 1;
  render();
};

render();
