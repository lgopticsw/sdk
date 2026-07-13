document.addEventListener('DOMContentLoaded', () => {
  const navDropdowns = document.querySelectorAll('.nav-dropdown');

  navDropdowns.forEach((navDropdown) => {
    const topSummary = navDropdown.querySelector(':scope > summary');
    const subDropdowns = navDropdown.querySelectorAll('.sub-nav-dropdown');

    if (!topSummary) {
      return;
    }

    const closeSubDropdowns = () => {
      subDropdowns.forEach((subDropdown) => {
        subDropdown.open = false;
      });
    };

    const closeAll = () => {
      closeSubDropdowns();
      navDropdown.open = false;
    };

    topSummary.addEventListener('click', (event) => {
      event.preventDefault();
      const willOpen = !navDropdown.open;
      navDropdown.open = willOpen;
      if (!willOpen) {
        closeSubDropdowns();
      }
    });

    subDropdowns.forEach((subDropdown) => {
      const subSummary = subDropdown.querySelector('summary');

      if (!subSummary) {
        return;
      }

      subSummary.addEventListener('click', (event) => {
        event.preventDefault();
      });

      subDropdown.addEventListener('mouseenter', () => {
        subDropdowns.forEach((otherDropdown) => {
          otherDropdown.open = otherDropdown === subDropdown;
        });
      });

      subSummary.addEventListener('focus', () => {
        subDropdowns.forEach((otherDropdown) => {
          otherDropdown.open = otherDropdown === subDropdown;
        });
      });
    });

    document.addEventListener('click', (event) => {
      if (!navDropdown.contains(event.target)) {
        closeAll();
      }
    });

    document.addEventListener('focusin', (event) => {
      if (!navDropdown.contains(event.target)) {
        closeAll();
      }
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        closeAll();
      }
    });
  });
});