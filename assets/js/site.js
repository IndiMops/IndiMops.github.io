const sitePages = [
  { key: "home", href: "index.html" },
  { key: "about", href: "about.html" },
  { key: "projects", href: "projects.html" },
];

const archivePages = [
  { key: "games", href: "game.html" },
  { key: "manga", href: "manga.html" },
];

const localeOrder = ["uk", "en"];

const locales = {
  uk: {
    code: "UA",
    languageName: "Українська",
    pathPrefix: "",
    copy: {
      pages: {
        home: "Головна",
        about: "Про мене",
        projects: "Проєкти",
        games: "Ігровий щоденник",
        manga: "Переклади манги",
      },
      archiveDescriptions: {
        games: "Пройдене, відкладене й заплановане",
        manga: "Невеликий архів перекладацьких робіт",
      },
      archive: "Архів",
      support: "Підтримка",
      menu: "Меню",
      mainNavigation: "Основна навігація",
      homeLabel: "Indi Mops — на головну",
      languageSelector: "Мова сайту",
      currentLanguage: (language) => `${language} — поточна мова`,
      switchLanguage: (language) => `Перейти на ${language}`,
      ribbonLabel: "Повідомлення про оновлення сайту",
      ribbonLead: "Mops Storage 2.0",
      ribbonText: "старий характер, новий код і трохи ностальгії.",
      dismissRibbon: "Сховати повідомлення",
      footerDescription: "Mops Storage — особистий сайт, що живе з 2021 року.",
      socialNetworks: "Соціальні мережі",
      footerMeta: (year) => `© ${year} Indi Mops. Зроблено без фреймворків і зайвого шуму.`,
      filterResult: (count) => `Показано: ${count}`,
      error: {
        pageTitle: "Сторінку не знайдено — Indi Mops",
        description: "Сторінку не знайдено — поверніться на головну сторінку Indi Mops.",
        skipLink: "До вмісту",
        imageAlt: "Засмучена анімована героїня лежить, підперши голову рукою",
        code: "Помилка 404",
        title: "Сторінка кудись утекла",
        message: "Можливо, посилання застаріло або в адресі причаїлася помилка. На головній усе ще є проєкти, переклади й трохи ностальгії.",
        homeLink: "Повернутися на головну",
      },
    },
  },
  en: {
    code: "EN",
    languageName: "English",
    pathPrefix: "en/",
    copy: {
      pages: {
        home: "Home",
        about: "About",
        projects: "Projects",
        games: "Gaming diary",
        manga: "Manga translations",
      },
      archiveDescriptions: {
        games: "Completed, paused, and planned games",
        manga: "A small archive of translation work",
      },
      archive: "Archive",
      support: "Support",
      menu: "Menu",
      mainNavigation: "Main navigation",
      homeLabel: "Indi Mops — home",
      languageSelector: "Site language",
      currentLanguage: (language) => `${language} — current language`,
      switchLanguage: (language) => `Switch to ${language}`,
      ribbonLabel: "Site update announcement",
      ribbonLead: "Mops Storage 2.0",
      ribbonText: "the same character, new code, and a little nostalgia.",
      dismissRibbon: "Dismiss announcement",
      footerDescription: "Mops Storage — a personal website online since 2021.",
      socialNetworks: "Social media",
      footerMeta: (year) => `© ${year} Indi Mops. Built without frameworks or unnecessary noise.`,
      filterResult: (count) => `Showing: ${count}`,
      error: {
        pageTitle: "Page not found — Indi Mops",
        description: "Page not found — return to the Indi Mops home page.",
        skipLink: "Skip to content",
        imageAlt: "A sad animated character lying down with her head resting on one hand",
        code: "Error 404",
        title: "This page ran off somewhere",
        message: "The link may be outdated, or there may be a typo in the address. The home page still has projects, translations, and a little nostalgia.",
        homeLink: "Return home",
      },
    },
  },
};

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/IndiMops",
    icon: "assets/social/github.png",
  },
  {
    label: "Discord",
    href: "https://discord.com/users/734082410504781854",
    icon: "assets/social/discord.png",
  },
  {
    label: "Telegram",
    href: "https://t.me/mops_inc",
    icon: "assets/social/telegram.png",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/indmops/",
    icon: "assets/social/instagram.png",
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@indi_mosya",
    icon: "assets/social/youtube.png",
  },
  {
    label: "Steam",
    href: "https://steamcommunity.com/id/ind_mops/",
    icon: "assets/social/steam.png",
  }
];

const normalizeLocale = (value) => {
  const language = (value || "").toLowerCase().split("-")[0];
  return Object.prototype.hasOwnProperty.call(locales, language) ? language : "uk";
};

const componentLocale = (element) =>
  normalizeLocale(element.getAttribute("lang") || document.documentElement.lang);

const pagePath = (locale, href) => {
  const page = href === "index.html" ? "" : href.replace(/^\/+/, "");
  return `/${locales[locale].pathPrefix}${page}`;
};
const assetPath = (href) => `/${href.replace(/^\/+/, "")}`;

const currentLink = (page, current) =>
  page.key === current ? ' aria-current="page"' : "";

const currentPageFile = (current) => {
  const knownPage = [...sitePages, ...archivePages, { key: "support", href: "support.html" }].find(
    (page) => page.key === current,
  );
  if (knownPage) return knownPage.href;

  if (document.querySelector(".error-page")) return "404.html";

  const filename = window.location.pathname.split("/").filter(Boolean).pop() || "index.html";
  const knownFilenames = new Set([
    ...sitePages.map((page) => page.href),
    ...archivePages.map((page) => page.href),
    "support.html",
    "404.html",
  ]);
  return knownFilenames.has(filename) ? filename : "index.html";
};

const languageSwitcher = (locale, current) => {
  const copy = locales[locale].copy;
  const filename = currentPageFile(current);

  return `
    <div class="language-switcher" role="group" aria-label="${copy.languageSelector}">
      ${localeOrder
        .map((language) => {
          const option = locales[language];
          const isCurrent = language === locale;
          const label = isCurrent
            ? copy.currentLanguage(option.languageName)
            : copy.switchLanguage(option.languageName);

          return `<a class="language-switcher__link" href="${pagePath(language, filename)}" lang="${language}" hreflang="${language}" aria-label="${label}"${
            isCurrent ? ' aria-current="page"' : ""
          }>${option.code}</a>`;
        })
        .join("")}
    </div>`;
};

class SiteHeader extends HTMLElement {
  connectedCallback() {
    const current = this.getAttribute("current") || "";
    const locale = componentLocale(this);
    const copy = locales[locale].copy;
    const archiveIsCurrent = archivePages.some((page) => page.key === current);

    this.innerHTML = `
      <aside class="site-ribbon" data-site-ribbon aria-label="${copy.ribbonLabel}">
        <div class="container site-ribbon__inner">
          <span class="site-ribbon__mark" aria-hidden="true">✦</span>
          <p><strong>${copy.ribbonLead}</strong> — ${copy.ribbonText}</p>
          <button class="site-ribbon__close" type="button" data-dismiss-ribbon aria-label="${copy.dismissRibbon}">×</button>
        </div>
      </aside>
      <header class="site-header">
        <div class="container site-header__inner">
          <a class="wordmark" href="${pagePath(locale, "index.html")}" aria-label="${copy.homeLabel}">
            <span>Indi Mops</span><i aria-hidden="true">.</i>
          </a>
          <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="primary-navigation">
            <span class="nav-toggle__label">${copy.menu}</span>
            <span class="nav-toggle__icon" aria-hidden="true"><i></i><i></i></span>
          </button>
          <nav class="site-nav" id="primary-navigation" aria-label="${copy.mainNavigation}">
            ${sitePages
              .map(
                (page) =>
                  `<a class="site-nav__link" href="${pagePath(locale, page.href)}"${currentLink(page, current)}>${copy.pages[page.key]}</a>`,
              )
              .join("")}
            <details class="nav-archive"${archiveIsCurrent ? ' data-current="true"' : ""}>
              <summary class="site-nav__link"${archiveIsCurrent ? ' aria-current="page"' : ""}>${copy.archive}</summary>
              <div class="nav-archive__menu">
                ${archivePages
                  .map(
                    (page) => `
                      <a href="${pagePath(locale, page.href)}"${currentLink(page, current)}>
                        <span>${copy.pages[page.key]}</span>
                        <small>${copy.archiveDescriptions[page.key]}</small>
                      </a>`,
                  )
                  .join("")}
              </div>
            </details>
            ${languageSwitcher(locale, current)}
            <a class="site-nav__link site-nav__link--support" href="${pagePath(locale, "support.html")}"${
              current === "support" ? ' aria-current="page"' : ""
            }>${copy.support}</a>
          </nav>
        </div>
      </header>`;

    this.bindNavigation();
    this.bindRibbon();
  }

  bindNavigation() {
    const toggle = this.querySelector(".nav-toggle");
    const navigation = this.querySelector(".site-nav");
    const archive = this.querySelector(".nav-archive");

    const closeNavigation = () => {
      toggle.setAttribute("aria-expanded", "false");
      navigation.classList.remove("is-open");
      document.body.classList.remove("nav-is-open");
    };

    toggle.addEventListener("click", () => {
      const isOpen = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!isOpen));
      navigation.classList.toggle("is-open", !isOpen);
      document.body.classList.toggle("nav-is-open", !isOpen);
    });

    navigation.addEventListener("click", (event) => {
      if (event.target.closest("a")) closeNavigation();
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        closeNavigation();
        archive.removeAttribute("open");
        toggle.focus();
      }
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 820) closeNavigation();
    });

    document.addEventListener("click", (event) => {
      if (archive.open && !archive.contains(event.target)) {
        archive.removeAttribute("open");
      }
    });
  }

  bindRibbon() {
    const ribbon = this.querySelector("[data-site-ribbon]");
    const dismissButton = this.querySelector("[data-dismiss-ribbon]");

    try {
      if (sessionStorage.getItem("mops-ribbon-dismissed") === "true") {
        ribbon.hidden = true;
      }
    } catch {
      // The banner remains visible when storage is unavailable.
    }

    dismissButton.addEventListener("click", () => {
      ribbon.hidden = true;
      try {
        sessionStorage.setItem("mops-ribbon-dismissed", "true");
      } catch {
        // Hiding the banner does not depend on storage access.
      }
    });
  }
}

class SiteFooter extends HTMLElement {
  connectedCallback() {
    const year = new Date().getFullYear();
    const locale = componentLocale(this);
    const copy = locales[locale].copy;

    this.innerHTML = `
      <footer class="site-footer">
        <div class="container site-footer__inner">
          <div class="site-footer__brand">
            <a class="wordmark wordmark--small" href="${pagePath(locale, "index.html")}" aria-label="${copy.homeLabel}"><span>Indi Mops</span><i aria-hidden="true">.</i></a>
            <p>${copy.footerDescription}</p>
          </div>
          <div class="social-links" aria-label="${copy.socialNetworks}">
            ${socialLinks
              .map(
                (link) => `
                  <a href="${link.href}" target="_blank" rel="noreferrer noopener" aria-label="${link.label}">
                    <img src="${assetPath(link.icon)}" alt="" width="22" height="22">
                    <span>${link.label}</span>
                  </a>`,
              )
              .join("")}
          </div>
          <p class="site-footer__meta">${copy.footerMeta(year)}</p>
        </div>
      </footer>`;
  }
}

const localizeErrorPage = () => {
  const errorPage = document.querySelector(".error-page");
  if (!errorPage) return;

  const firstPathSegment = window.location.pathname.split("/").filter(Boolean)[0] || "";
  const pathLocale = localeOrder.find(
    (locale) => locales[locale].pathPrefix.replace(/\/$/, "") === firstPathSegment,
  );
  const locale = pathLocale || normalizeLocale(document.documentElement.lang);
  const copy = locales[locale].copy.error;

  document.documentElement.lang = locale;
  document.querySelectorAll("site-header, site-footer").forEach((component) => {
    component.setAttribute("lang", locale);
  });

  document.title = copy.pageTitle;
  document.querySelector('meta[name="description"]')?.setAttribute("content", copy.description);

  const skipLink = document.querySelector("[data-error-skip]");
  if (skipLink) {
    skipLink.textContent = copy.skipLink;
    skipLink.setAttribute("href", `${window.location.pathname}#main-content`);
  }

  errorPage.querySelector("[data-error-image]")?.setAttribute("alt", copy.imageAlt);
  errorPage.querySelector("[data-error-code]").textContent = copy.code;
  errorPage.querySelector("[data-error-title]").textContent = copy.title;
  errorPage.querySelector("[data-error-message]").textContent = copy.message;

  const homeLink = errorPage.querySelector("[data-error-home]");
  homeLink.setAttribute("href", pagePath(locale, "index.html"));
  homeLink.querySelector("[data-error-home-label]").textContent = copy.homeLink;
};

localizeErrorPage();
customElements.define("site-header", SiteHeader);
customElements.define("site-footer", SiteFooter);

const bindFilters = () => {
  document.querySelectorAll(".filter-bar").forEach((filterBar) => {
    const locale = normalizeLocale(
      filterBar.closest("[lang]")?.getAttribute("lang") || document.documentElement.lang,
    );
    const copy = locales[locale].copy;
    const buttons = [...filterBar.querySelectorAll("[data-filter]")];
    const scope = filterBar.closest("[data-filter-scope]") || document;
    const items = [...scope.querySelectorAll("[data-filter-item]")];
    const result = scope.querySelector("[data-filter-result], [data-filter-status]");

    if (!buttons.length || !items.length) return;

    const applyFilter = (value) => {
      let visibleItems = 0;

      items.forEach((item) => {
        const isVisible = value === "all" || item.dataset.status === value;
        item.hidden = !isVisible;
        if (isVisible) visibleItems += 1;
      });

      buttons.forEach((button) => {
        button.setAttribute("aria-pressed", String(button.dataset.filter === value));
      });

      if (result) {
        result.textContent = copy.filterResult(visibleItems);
      }
    };

    buttons.forEach((button) => {
      button.addEventListener("click", () => applyFilter(button.dataset.filter));
    });

    applyFilter("all");
  });
};

const bindReveals = () => {
  const elements = [...document.querySelectorAll("[data-reveal]")];
  if (!elements.length) return;

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) {
    elements.forEach((element) => element.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { rootMargin: "0px 0px -8%", threshold: 0.12 },
  );

  elements.forEach((element) => observer.observe(element));
};

document.documentElement.classList.add("js");
bindFilters();
bindReveals();
