(function () {
  const titles = document.querySelectorAll(".title-line");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-show");
        } else {
          entry.target.classList.remove("is-show");
        }
      });
    },
    {
      threshold: 0.3,
    },
  );

  titles.forEach((title) => {
    observer.observe(title);
  });

  document.querySelector(".top-btn").addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  const btn = document.querySelector(".hamburger");
  const menu = document.querySelector(".nav-inner");
  btn.addEventListener("click", () => {
    btn.classList.toggle("active");
    menu.classList.toggle("active");
  });

  const conbtn = document.querySelector(".contact-btn");
  const contact = document.querySelector(".contact");
  const navHeight = document.querySelector(".nav-container").offsetHeight;
  conbtn.addEventListener("click", (e) => {
    e.preventDefault(); // 阻止默认跳转行为
    const top = contact.getBoundingClientRect().top + window.scrollY - navHeight;
    window.scrollTo({top: top, behavior: "smooth"});
  });
})();
