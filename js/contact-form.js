/**
 * Kumar Raunak - Minimalist Contact & Lead Form Controller
 * Integrated with Google Forms & WhatsApp Direct Routing
 */

(function () {
  const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSeew9bQYArunN_KX4raqtDsyfoGzECniyO1yQZJjWmqKb2pQQ/formResponse";
  const WHATSAPP_NUMBER = "918102375072";
  const PRIMARY_EMAIL = "kumarworkstation@gmail.com";

  document.addEventListener("DOMContentLoaded", () => {
    initContactForm();
    initCopyEmail();
    initWhatsAppQuick();
  });

  function initContactForm() {
    const form = document.getElementById("contact-form");
    if (!form) return;

    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      const name = form.querySelector("#client-name")?.value.trim() || "";
      const email = form.querySelector("#client-email")?.value.trim() || "";
      const phone = form.querySelector("#client-phone")?.value.trim() || "";
      const projectType = form.querySelector("#project-type")?.value || "full stack web app";
      const message = form.querySelector("#client-message")?.value.trim() || "";
      const submitBtn = form.querySelector("#submit-btn");

      if (!name || !email || !message) {
        showToast("Please fill in your Name, Email, and Message.", "error");
        return;
      }

      const originalBtnHtml = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.classList.add("is-sending");
      submitBtn.innerHTML = `
        <div class="send-anim-track">
          <div class="anim-rocket-glide">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3">
              <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"></path>
            </svg>
            <div class="anim-jet-trail"></div>
          </div>
          <span class="anim-label-text">Dispatching Brief...</span>
          <div class="anim-progress-beam"></div>
        </div>
      `;

      // 1. Submit directly to Google Forms in background
      const postPromise = (async () => {
        try {
          const formData = new FormData();
          formData.append("entry.635009175", name);
          formData.append("entry.1333921202", email);
          formData.append("entry.649512176", phone || "Not provided");
          formData.append("entry.1632950299", projectType);
          formData.append("entry.58245395", message);

          await fetch(GOOGLE_FORM_URL, {
            method: "POST",
            mode: "no-cors",
            body: formData
          });
        } catch (err) {
          console.warn("Google form background dispatch note:", err);
        }
      })();

      // 2. Play moving launch animation for 1550ms then trigger Sent state
      const minAnimationDelay = new Promise(resolve => setTimeout(resolve, 1550));

      await Promise.all([postPromise, minAnimationDelay]);

      // Success State once moving animation completes
      submitBtn.classList.remove("is-sending");
      submitBtn.classList.add("is-sent");
      submitBtn.innerHTML = "<span>✓ Sent! I'll connect with you shortly</span>";
      form.reset();
      showToast("Sent! I'll connect with you shortly.", "success");

      setTimeout(() => {
        submitBtn.classList.remove("is-sent");
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnHtml;
      }, 4500);
    });
  }

  function initCopyEmail() {
    document.querySelectorAll("[data-copy-email]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const email = btn.dataset.copyEmail || PRIMARY_EMAIL;
        navigator.clipboard.writeText(email).then(() => {
          showToast(`Copied ${email} to clipboard!`, "success");
        }).catch(() => {
          showToast(`Email: ${email}`, "info");
        });
      });
    });
  }

  function initWhatsAppQuick() {
    document.querySelectorAll("[data-quick-whatsapp]").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        const msg = encodeURIComponent("Hi Kumar, I came across your portfolio and would like to discuss a project.");
        window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank");
      });
    });
  }

  function showToast(message, type = "info") {
    let container = document.getElementById("toast-container");
    if (!container) {
      container = document.createElement("div");
      container.id = "toast-container";
      container.style.cssText = `
        position: fixed;
        bottom: 24px;
        right: 24px;
        z-index: 9999;
        display: flex;
        flex-direction: column;
        gap: 8px;
        pointer-events: none;
      `;
      document.body.appendChild(container);
    }

    const toast = document.createElement("div");
    const accentBorder = type === "success" ? "#4ade80" : type === "error" ? "#ef4444" : "#f5a623";
    toast.style.cssText = `
      background: #14161f;
      border: 1px solid ${accentBorder};
      color: #fafafa;
      padding: 12px 20px;
      border-radius: 10px;
      font-family: 'Plus Jakarta Sans', sans-serif;
      font-size: 0.88rem;
      font-weight: 500;
      box-shadow: 0 12px 30px rgba(0, 0, 0, 0.7);
      opacity: 0;
      transform: translateY(10px);
      transition: all 0.25s ease-out;
      pointer-events: auto;
    `;
    toast.textContent = message;

    container.appendChild(toast);

    requestAnimationFrame(() => {
      toast.style.opacity = "1";
      toast.style.transform = "translateY(0)";
    });

    setTimeout(() => {
      toast.style.opacity = "0";
      toast.style.transform = "translateY(-6px)";
      setTimeout(() => toast.remove(), 250);
    }, 4000);
  }
})();
