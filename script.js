const tagscontainer = document.querySelector(".tags");
const textarea = document.querySelector("textarea");

// textarea.focus()

const createTags = (input) => {
  const tags = input
    .split(",")
    .filter((tag) => tag.trim() !== "")
    .map((tag) => tag.trim());
  tagscontainer.innerHTML = "";

  tags.forEach((tag) => {
    const tagElement = document.createElement("span");
    tagElement.classList.add("tag");
    tagElement.innerText = tag;
    tagscontainer.appendChild(tagElement);
  });
};

const pickRandomTag = () => {
  const tags = tagscontainer.querySelectorAll(".tag");
  return tags[Math.floor(Math.random() * tags.length)];
};

const highlightTag = (tag) => {
  tag.classList.add("highlight");
};

const unhighlightTag = (tag) => {
  tag.classList.remove("highlight");
};

const randomSelect = () => {
  let times = 30;
  const interval = setInterval(() => {
    const randomTag = pickRandomTag();
    highlightTag(randomTag);
    setTimeout(() => {
      unhighlightTag(randomTag);
    }, 100);
    times--;
    if (times <= 0) {
      clearInterval(interval);
      setTimeout(() => {
        const lastTag = pickRandomTag();
        highlightTag(lastTag);
      }, 100);
    }
  }, 100);
};

textarea.addEventListener("keyup", (e) => {
  createTags(e.target.value);
});

textarea.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    randomSelect();
  }
});
