function scrollToElement(id, offset = 75)
{
    const element = document.getElementById(id);
    if (element) {
        window.scrollTo({
            behavior: 'smooth',
            top: element.offsetTop - offset,
            block: 'start',
            inline: 'nearest'
        });
    } else {
        console.warn(`Element with id "${id}" not found.`);
    }
}

function handleScroll(id, offset = 75)
{
    // First scroll to the element
    scrollToElement(id, offset);

    // Then update the active tab
    updateActiveTab(id);
}

function updateActiveTab(activeId)
{
    // Remove active classes from all tabs
    document.querySelectorAll('.tab-button').forEach(tab => {
        tab.classList.remove(
            'border-b',
            'border-sky-800',
            'text-sky-800',
            'font-semibold'
        );
        tab.classList.add(
            'text-gray-600',
            'font-medium'
        );
    });

    // Add active classes to the clicked tab
    const activeTab = document.querySelector(`.tab-button[data-target="${activeId}"]`);
    if (activeTab) {
        activeTab.classList.remove(
            'text-gray-600',
            'font-medium'
        );
        activeTab.classList.add(
            'border-b',
            'border-sky-800',
            'text-sky-800',
            'font-semibold'
        );
    }
}

document.addEventListener('DOMContentLoaded', () => {
    updateActiveTab('beranda');
})