// JavaScript source code
document.addEventListener('DOMContentLoaded', () => {
    const sectionButtonsContainer = document.createElement('div');
    sectionButtonsContainer.id = 'sectionButtons';

    // Style the container

    sectionButtonsContainer.style.left = '0';
    sectionButtonsContainer.style.right = '0';
    sectionButtonsContainer.style.zIndex = '99';
    sectionButtonsContainer.style.backgroundColor = 'rgb(10, 10, 12)';
    sectionButtonsContainer.style.padding = '10px 20px';
    sectionButtonsContainer.style.display = 'grid';
    sectionButtonsContainer.style.gridTemplateColumns = 'repeat(3, 1fr)';
    sectionButtonsContainer.style.gap = '10px';
    sectionButtonsContainer.style.width = '100%';
    sectionButtonsContainer.style.overflowX = 'auto';

    // Rest of your button creation code...
    const newsSections = document.querySelectorAll('.news');
    newsSections.forEach((section) => {
        const h2 = section.querySelector('.textbox h2');
        if (!h2) return;

        // Create button
        const btn = document.createElement('button');
        btn.textContent = h2.textContent.trim();
        btn.style.cssText = `
            background-color: #555;
            border: none;
            color: white;
            padding: 8px 14px;
            font-size: 14px;
            border-radius: 5px;
            cursor: pointer;
            white-space: nowrap;
            transition: background-color 0.3s ease;
        `;

        btn.addEventListener('mouseover', () => {
            btn.style.backgroundColor = '#90C67C';
            btn.style.color = 'black';
        });

        btn.addEventListener('mouseout', () => {
            btn.style.backgroundColor = '#555';
            btn.style.color = 'white';
        });

        btn.addEventListener('click', () => {
            const topOffset = 120; // Adjusted for sticky elements
            const elementPosition = section.getBoundingClientRect().top + window.pageYOffset;
            window.scrollTo({
                top: elementPosition - topOffset,
                behavior: 'smooth'
            });
        });

        sectionButtonsContainer.appendChild(btn);
    });

    // Insert after header
    const headerDiv = document.querySelector('.header');
    if (headerDiv && headerDiv.parentNode) {
        headerDiv.parentNode.insertBefore(sectionButtonsContainer, headerDiv.nextSibling);
    }
});