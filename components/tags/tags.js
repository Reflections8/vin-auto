document.addEventListener("DOMContentLoaded", () => {

  const tagsToAdd = [
    {
      href: '#',
      text: 'Новый тег',
    },
    {
      href: '#',
      text: 'Другой новый тег',
    },
    {
      href: '#',
      text: 'Еще один новый тег',
    },
  ]

  const moreLink = document.querySelector(".tags__link--More");
  moreLink.addEventListener("click", () => {
    moreLink.style.display = 'none'
    const newLinks = [];
    tagsToAdd.forEach(tag => {
      const newLink = document.createElement("a");
      newLink.href = tag.href;
      newLink.className = "buttonLink tags__link";
      newLink.textContent = tag.text;
      newLinks.push(newLink);
    })

    const tagsContainer = document.querySelector(".tags");
    newLinks.forEach(link => {
      tagsContainer.insertBefore(link, moreLink);
    });
  });
})
