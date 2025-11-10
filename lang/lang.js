document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll("[data-key]");
  const savedLang = localStorage.getItem("lang") || "es";

  loadLanguage(savedLang);

  document.querySelectorAll(".lang-select").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const lang = btn.getAttribute("data-lang");
      loadLanguage(lang);
      localStorage.setItem("lang", lang);
    });
  });

  function loadLanguage(lang) {
    fetch(`lang/${lang}.json`)
      .then(response => response.json())
      .then(data => {
        elements.forEach(el => {
          const key = el.getAttribute("data-key");
          if (data[key]) el.textContent = data[key];
        });
      })
      .catch(err => console.error("Error cargando idioma:", err));
  }
});
