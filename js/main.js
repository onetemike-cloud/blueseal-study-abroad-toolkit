(function () {
  "use strict";

  function init() {
    var config = window.BLUESEAL_CONFIG || {};
    var checkoutUrl = config.SELAR_CHECKOUT_URL;

    if (!checkoutUrl) {
      console.error("BLUESEAL_CONFIG.SELAR_CHECKOUT_URL is not set.");
      return;
    }

    var ctaLinks = document.querySelectorAll(".js-cta");
    ctaLinks.forEach(function (link) {
      link.setAttribute("href", checkoutUrl);
      link.setAttribute("target", "_blank");
      link.setAttribute("rel", "noopener noreferrer sponsored");
    });

    var yearEl = document.getElementById("year");
    if (yearEl) {
      yearEl.textContent = new Date().getFullYear();
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
