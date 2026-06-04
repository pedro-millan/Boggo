document.addEventListener("DOMContentLoaded", () => {
  if (!document.querySelector(".boggo-lightbox")) {
    const lightbox = document.createElement("div");
    lightbox.className = "boggo-lightbox";
    lightbox.innerHTML = `
      <div class="boggo-lightbox__content" role="dialog" aria-modal="true" aria-label="Imagen ampliada de producto">
        <button class="boggo-lightbox__close" type="button" aria-label="Cerrar imagen ampliada">×</button>
        <img src="" alt="">
        <div class="boggo-lightbox__caption"></div>
      </div>
    `;
    document.body.appendChild(lightbox);

    const img = lightbox.querySelector("img");
    const caption = lightbox.querySelector(".boggo-lightbox__caption");
    const close = lightbox.querySelector(".boggo-lightbox__close");

    const openLightbox = (sourceImg) => {
      img.src = sourceImg.currentSrc || sourceImg.src;
      img.alt = sourceImg.alt || "Producto Boggo";
      caption.textContent = sourceImg.alt || "";
      lightbox.classList.add("is-open");
      document.body.style.overflow = "hidden";
    };

    const closeLightbox = () => {
      lightbox.classList.remove("is-open");
      img.src = "";
      document.body.style.overflow = "";
    };

    close.addEventListener("click", closeLightbox);
    lightbox.addEventListener("click", (event) => {
      if (event.target === lightbox) closeLightbox();
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && lightbox.classList.contains("is-open")) {
        closeLightbox();
      }
    });

    document.querySelectorAll(".product-card img, .menu-card img, .product-img, .product-image img, .card-image img").forEach((productImg) => {
      productImg.setAttribute("tabindex", "0");
      productImg.setAttribute("role", "button");
      productImg.setAttribute("aria-label", `Ampliar imagen de ${productImg.alt || "producto Boggo"}`);
      productImg.addEventListener("click", () => openLightbox(productImg));
      productImg.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          openLightbox(productImg);
        }
      });
    });
  }
});


document.addEventListener("DOMContentLoaded", () => {
  const tickerSelectors = [".ticker", ".info-ticker", ".top-ticker", ".marquee", ".marquee-bar", ".boggo-ticker"];
  const ticker = tickerSelectors.map(selector => document.querySelector(selector)).find(Boolean);

  if (ticker && !ticker.dataset.boggoPerfectTicker) {
    ticker.dataset.boggoPerfectTicker = "true";

    let track = ticker.querySelector(".ticker-track, .marquee-track, .info-ticker-track, .boggo-ticker-track");

    if (!track) {
      const originalContent = ticker.innerHTML.trim();
      ticker.innerHTML = "";
      track = document.createElement("div");
      track.className = "boggo-ticker-track";
      const groupA = document.createElement("div");
      const groupB = document.createElement("div");
      groupA.className = "boggo-ticker-group";
      groupB.className = "boggo-ticker-group";
      groupA.innerHTML = originalContent;
      groupB.innerHTML = originalContent;
      track.appendChild(groupA);
      track.appendChild(groupB);
      ticker.appendChild(track);
    } else if (!track.dataset.boggoDuplicated) {
      track.dataset.boggoDuplicated = "true";
      const original = track.innerHTML;
      track.innerHTML = `<div class="boggo-ticker-group">${original}</div><div class="boggo-ticker-group">${original}</div>`;
      track.classList.add("boggo-ticker-track");
    }

    ticker.querySelectorAll(".boggo-ticker-group").forEach(group => {
      group.style.display = "inline-flex";
      group.style.alignItems = "center";
      group.style.flex = "0 0 auto";
      group.style.whiteSpace = "nowrap";
    });
  }
});
