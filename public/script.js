document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');
    const submenuToggles = document.querySelectorAll('.mobile-submenu-toggle');

    if (!menuToggle || !menu) {
        return;
    }

    const closeAllSubmenus = () => {
        document.querySelectorAll('.mobile-submenu').forEach((submenu) => {
            submenu.classList.add('hidden');
        });

        document.querySelectorAll('.submenu-icon').forEach((icon) => {
            icon.classList.remove('rotate-180');
        });
    };

    const openMenu = () => {
        menu.classList.remove('hidden');
        menu.classList.add('flex');
        menuToggle.setAttribute('aria-expanded', 'true');
    };

    const closeMenu = () => {
        menu.classList.add('hidden');
        menu.classList.remove('flex');
        menuToggle.setAttribute('aria-expanded', 'false');
        closeAllSubmenus();
    };

    const toggleMenu = () => {
        if (menu.classList.contains('hidden')) {
            openMenu();
        } else {
            closeMenu();
        }
    };

    menuToggle.addEventListener('click', (event) => {
        event.stopPropagation();
        toggleMenu();
    });

    submenuToggles.forEach((button) => {
        button.addEventListener('click', (event) => {
            event.stopPropagation();

            const submenu = button.nextElementSibling;
            const icon = button.querySelector('.submenu-icon');

            if (!submenu) {
                return;
            }

            submenu.classList.toggle('hidden');

            if (icon) {
                icon.classList.toggle('rotate-180');
            }
        });
    });

    menu.addEventListener('click', (event) => {
        event.stopPropagation();

        if (event.target.closest('a')) {
            closeMenu();
        }
    });

    document.addEventListener('click', (event) => {
        const isClickInsideMenu = menu.contains(event.target);
        const isClickOnToggle = menuToggle.contains(event.target);

        if (!isClickInsideMenu && !isClickOnToggle) {
            closeMenu();
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            closeMenu();
        }
    });
});