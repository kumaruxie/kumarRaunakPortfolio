/**
 * Kumar Raunak - Behance Editorial Portfolio Controller
 * Features: Spotlight Carousel, Work Experience Table, Gallery Filter, Side Drawer ("Bagal me khul jaye"), Fullscreen Lightbox
 */

document.addEventListener("DOMContentLoaded", () => {
    initMobileNav();
  // Initialize Side Drawer & Lightbox
  const drawer = new SideDrawer();

  // Initialize Hero Spotlight Carousel
  initSpotlightCarousel(drawer);

  // Initial Render of Projects Gallery
  renderProjectsGallery(portfolioProjects, drawer);

  // Initialize Gallery Filter Tabs
  initGalleryFilters(drawer);

  // Initialize Work Table Row Click Triggers
  initWorkTable(drawer);

  // Smooth Anchor Navigation
  initSmoothScroll();
});

/**
 * Featured Spotlight Carousel (Centerpiece of the Behance Hero)
 * Enhanced with directional slide & fade animation
 */
function initSpotlightCarousel(drawerInstance) {
  let activeIndex = 0;
  const total = portfolioProjects.length;
  let isAnimating = false;

  const activeCard = document.getElementById("spotlight-active-card");
  const peekPrev = document.getElementById("spotlight-peek-prev");
  const peekNext = document.getElementById("spotlight-peek-next");
  const prevBtn = document.getElementById("spotlight-btn-prev");
  const nextBtn = document.getElementById("spotlight-btn-next");

  function renderContent() {
    const current = portfolioProjects[activeIndex];
    const prevProj = portfolioProjects[(activeIndex - 1 + total) % total];
    const nextProj = portfolioProjects[(activeIndex + 1) % total];

    if (activeCard && current) {
      activeCard.innerHTML = `
        <div class="spotlight-media-frame">
          <img src="${current.image}" alt="${current.title} Preview" />
        </div>
        <div class="spotlight-info-group">
          <span class="spotlight-tag-mini">${current.categoryLabel}</span>
          <h3 class="spotlight-card-title">${current.title}</h3>
          <p class="spotlight-card-desc">${current.shortDesc}</p>
          <div class="spotlight-btn-row">
            <button class="btn-spotlight-readmore" data-open-drawer="${current.id}">
              <span>Read more</span>
              <span>&rarr;</span>
            </button>
            <a href="${current.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn-spotlight-visitlive" title="Visit Live Site">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </a>
          </div>
        </div>
      `;

      // Bind read more button
      const readMoreBtn = activeCard.querySelector(`[data-open-drawer="${current.id}"]`);
      if (readMoreBtn) {
        readMoreBtn.addEventListener("click", () => {
          drawerInstance.open(current.id);
        });
      }
    }

    if (peekPrev && prevProj) {
      peekPrev.innerHTML = `
        <h4 class="spotlight-peek-title">${prevProj.title}</h4>
        <p class="spotlight-peek-desc">${prevProj.subtitle}</p>
      `;
      peekPrev.onclick = () => {
        goToSlide((activeIndex - 1 + total) % total, -1);
      };
    }

    if (peekNext && nextProj) {
      peekNext.innerHTML = `
        <h4 class="spotlight-peek-title">${nextProj.title}</h4>
        <p class="spotlight-peek-desc">${nextProj.subtitle}</p>
      `;
      peekNext.onclick = () => {
        goToSlide((activeIndex + 1) % total, 1);
      };
    }
  }

  function goToSlide(newIndex, direction = 1) {
    if (isAnimating || newIndex === activeIndex) return;
    isAnimating = true;

    if (activeCard) {
      activeCard.style.setProperty("--slide-exit-x", direction > 0 ? "-26px" : "26px");
      activeCard.style.setProperty("--slide-enter-x", direction > 0 ? "26px" : "-26px");
      activeCard.classList.add("spotlight-animating-out");
    }
    if (peekPrev) peekPrev.classList.add("peek-fade");
    if (peekNext) peekNext.classList.add("peek-fade");

    setTimeout(() => {
      activeIndex = newIndex;
      renderContent();

      if (activeCard) {
        activeCard.classList.remove("spotlight-animating-out");
        activeCard.classList.add("spotlight-animating-in");

        // Force reflow
        void activeCard.offsetWidth;

        activeCard.classList.remove("spotlight-animating-in");
      }
      if (peekPrev) peekPrev.classList.remove("peek-fade");
      if (peekNext) peekNext.classList.remove("peek-fade");

      setTimeout(() => {
        isAnimating = false;
      }, 300);
    }, 180);
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      goToSlide((activeIndex - 1 + total) % total, -1);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      goToSlide((activeIndex + 1) % total, 1);
    });
  }

  // Mobile Touch Swipe Gestures for Spotlight Carousel
  let touchStartX = 0;
  let touchStartY = 0;
  let touchEndX = 0;
  let touchEndY = 0;

  const stage = document.querySelector(".spotlight-carousel-stage");
  if (stage) {
    stage.addEventListener("touchstart", (e) => {
      touchStartX = e.changedTouches[0].screenX;
      touchStartY = e.changedTouches[0].screenY;
    }, { passive: true });

    stage.addEventListener("touchend", (e) => {
      touchEndX = e.changedTouches[0].screenX;
      touchEndY = e.changedTouches[0].screenY;
      handleSwipe();
    }, { passive: true });

    function handleSwipe() {
      const deltaX = touchEndX - touchStartX;
      const deltaY = touchEndY - touchStartY;
      // Minimum swipe distance 35px, horizontal dominance
      if (Math.abs(deltaX) > 35 && Math.abs(deltaX) > Math.abs(deltaY) * 1.4) {
        if (deltaX < 0) {
          goToSlide((activeIndex + 1) % total, 1);
        } else {
          goToSlide((activeIndex - 1 + total) % total, -1);
        }
      }
    }
  }


  renderContent();
}

/**
 * Render Project Cards into the Curated Gallery Grid
 */
function renderProjectsGallery(projects, drawerInstance) {
  const grid = document.getElementById("projects-gallery-grid");
  if (!grid) return;

  grid.innerHTML = "";

  projects.forEach((p, idx) => {
    const card = document.createElement("article");
    card.className = "gallery-card";
    card.dataset.category = p.category;

    card.innerHTML = `
      <div class="gallery-card-media">
        <img src="${p.image}" alt="${p.title} Preview" loading="lazy" />
        <span class="gallery-card-badge">${p.categoryLabel}</span>
      </div>

      <div class="gallery-card-body">
        <h3 class="gallery-card-title">${p.title}</h3>
        <p class="gallery-card-sub">${p.subtitle}</p>

        <div class="gallery-card-tags">
          ${p.techStack.slice(0, 4).map(t => `<span class="gallery-tag-chip">${t}</span>`).join("")}
          ${p.techStack.length > 4 ? `<span class="gallery-tag-chip">+${p.techStack.length - 4}</span>` : ""}
        </div>

        <div class="gallery-card-actions">
          <button class="btn-inspect-drawer" data-inspect-project="${p.id}">
            <span>Case Study</span>
            <span>→</span>
          </button>
          <a href="${p.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn-launch-pill" aria-label="Visit ${p.title} Live">
            <span>Live Site</span>
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </a>
        </div>
      </div>
    `;

    // Bind inspect button
    const inspectBtn = card.querySelector(`[data-inspect-project="${p.id}"]`);
    if (inspectBtn) {
      inspectBtn.addEventListener("click", () => {
        drawerInstance.open(p.id);
      });
    }

    grid.appendChild(card);
  });
}

/**
 * Filter Projects by Category
 */
function initGalleryFilters(drawerInstance) {
  const filterBtns = document.querySelectorAll(".filter-pill-btn");
  if (!filterBtns.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const category = btn.dataset.filter;
      const filtered = category === "all"
        ? portfolioProjects
        : portfolioProjects.filter(p => p.category === category);

      renderProjectsGallery(filtered, drawerInstance);
    });
  });
}

/**
 * Work Experience Table Rows Interactive Triggers
 */
function initWorkTable(drawerInstance) {
  const rows = document.querySelectorAll(".work-table-row");
  rows.forEach(row => {
    row.addEventListener("click", () => {
      const projectId = row.dataset.linkProject;
      if (projectId) {
        drawerInstance.open(projectId);
      }
    });
  });
}

/**
 * Side Drawer Controller ("Bagal me khul jaye")
 */
class SideDrawer {
  constructor() {
    this.drawer = document.getElementById("project-side-drawer");
    this.backdrop = this.drawer?.querySelector(".side-drawer-backdrop");
    this.closeBtn = this.drawer?.querySelector(".drawer-close-btn");

    this.titleEl = this.drawer?.querySelector("#drawer-title");
    this.subtitleEl = this.drawer?.querySelector("#drawer-subtitle");
    this.imgEl = this.drawer?.querySelector("#drawer-img");
    this.problemEl = this.drawer?.querySelector("#drawer-problem");
    this.solutionEl = this.drawer?.querySelector("#drawer-solution");
    this.highlightsEl = this.drawer?.querySelector("#drawer-highlights");
    this.techEl = this.drawer?.querySelector("#drawer-tech-tags");
    this.launchBtn = this.drawer?.querySelector("#drawer-launch-link");
    this.fullscreenBtn = this.drawer?.querySelector("#drawer-fullscreen-btn");
    this.prevBtn = this.drawer?.querySelector("#drawer-prev-btn");
    this.nextBtn = this.drawer?.querySelector("#drawer-next-btn");
    this.counterEl = this.drawer?.querySelector("#drawer-counter");

    this.currentIndex = 0;

    this.initEvents();
    this.initLightbox();
  }

  initEvents() {
    if (this.closeBtn) this.closeBtn.addEventListener("click", () => this.close());
    if (this.backdrop) this.backdrop.addEventListener("click", () => this.close());

    if (this.prevBtn) {
      this.prevBtn.addEventListener("click", () => this.navigate(-1));
    }
    if (this.nextBtn) {
      this.nextBtn.addEventListener("click", () => this.navigate(1));
    }

    document.addEventListener("keydown", (e) => {
      if (!this.isOpen()) return;
      if (e.key === "Escape") this.close();
      if (e.key === "ArrowLeft") this.navigate(-1);
      if (e.key === "ArrowRight") this.navigate(1);
    });
  }

  initLightbox() {
    this.lightbox = document.getElementById("fullscreen-lightbox");
    this.lightboxImg = this.lightbox?.querySelector("#lightbox-img");
    this.lightboxClose = this.lightbox?.querySelector(".lightbox-close-btn");

    if (this.fullscreenBtn) {
      this.fullscreenBtn.addEventListener("click", () => {
        const current = portfolioProjects[this.currentIndex];
        if (this.lightbox && this.lightboxImg && current) {
          this.lightboxImg.src = current.image;
          this.lightbox.classList.add("active");
        }
      });
    }

    if (this.lightboxClose) {
      this.lightboxClose.addEventListener("click", () => {
        this.lightbox.classList.remove("active");
      });
    }

    if (this.lightbox) {
      this.lightbox.addEventListener("click", (e) => {
        if (e.target === this.lightbox) {
          this.lightbox.classList.remove("active");
        }
      });
    }
  }

  isOpen() {
    return this.drawer?.classList.contains("active");
  }

  open(projectId) {
    const idx = portfolioProjects.findIndex(p => p.id === projectId);
    if (idx === -1) return;

    this.currentIndex = idx;
    this.render(portfolioProjects[idx]);

    this.drawer.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  close() {
    if (!this.drawer) return;
    this.drawer.classList.remove("active");
    document.body.style.overflow = "";
  }

  navigate(dir) {
    this.currentIndex = (this.currentIndex + dir + portfolioProjects.length) % portfolioProjects.length;
    this.render(portfolioProjects[this.currentIndex]);
  }

  render(p) {
    if (!p) return;

    if (this.titleEl) this.titleEl.textContent = p.title;
    if (this.subtitleEl) this.subtitleEl.textContent = p.subtitle;
    if (this.imgEl) {
      this.imgEl.src = p.image;
      this.imgEl.alt = `${p.title} Real Screenshot`;
    }
    if (this.problemEl) this.problemEl.textContent = p.problemSolved;
    if (this.solutionEl) this.solutionEl.textContent = p.solutionEngineered;

    if (this.highlightsEl) {
      this.highlightsEl.innerHTML = p.keyHighlights
        .map(h => `
          <li>
            <span class="drawer-bullet" aria-hidden="true"></span>
            <span>${h}</span>
          </li>
        `).join("");
    }

    if (this.techEl) {
      this.techEl.innerHTML = p.techStack
        .map(t => `<span class="gallery-tag-chip">${t}</span>`)
        .join("");
    }

    if (this.launchBtn) {
      this.launchBtn.href = p.liveUrl;
    }

    if (this.counterEl) {
      this.counterEl.textContent = `${this.currentIndex + 1} / ${portfolioProjects.length}`;
    }
  }
}

/**
 * Smooth Anchor Navigation
 */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      if (targetId === "#") return;
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });
}


  // Mobile Hamburger Navigation Controller
  function initMobileNav() {
    const hamburgerBtn = document.getElementById("nav-hamburger-btn");
    const mobileDropdown = document.getElementById("mobile-nav-dropdown");
    if (!hamburgerBtn || !mobileDropdown) return;

    function toggleMenu(open) {
      const isOpen = open !== undefined ? open : !hamburgerBtn.classList.contains("is-active");
      hamburgerBtn.classList.toggle("is-active", isOpen);
      hamburgerBtn.setAttribute("aria-expanded", isOpen);
      mobileDropdown.classList.toggle("is-open", isOpen);
      mobileDropdown.setAttribute("aria-hidden", !isOpen);
    }

    hamburgerBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      toggleMenu();
    });

    // Close when clicking any nav link
    mobileDropdown.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        toggleMenu(false);
      });
    });

    // Close when clicking outside
    document.addEventListener("click", (e) => {
      if (!mobileDropdown.contains(e.target) && !hamburgerBtn.contains(e.target)) {
        toggleMenu(false);
      }
    });

    // Close on Escape key
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        toggleMenu(false);
      }
    });
  }
