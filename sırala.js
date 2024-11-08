const projects = [
    { title: "Portfolyo Web Sitesi", image: "image/portfolyo.png", description: "Kendi portfolyo web sitemi oluşturdum.", date: "2024-11-15", likes: 950 },
    { title: "JavaScript Oyun Projesi", image: "image/maxresdefault.jpg", description: "Basit bir tarayıcı oyunu geliştirdim.", date: "2024-02-20", likes: 340 },
    { title: "BOOMBOOK E-kitap Projesi", image: "image/boombook.png", description: "E-kitap sitesi oluşturdum.", date: "2024-11-10", likes: 880 },
    { title: "Kişisel Blog", image: "image/bloggs.png", description: "Kişisel blog sitesi tasarımı ve geliştirmesi.", date: "2023-11-05", likes: 290 },
    { title: "1984 Cafe Web Sitesi", image: "image/1984cafe.jpg", description: "Rize de bulunan 1984 Cafe için web sitesi tasarladım.", date: "2024-03-10", likes: 320 },
    { title: "Rehber Uygulaması", image: "image/rehber.png", description: "Kullanıcılar için rehber uygulaması geliştirdim.", date: "2023-10-12", likes: 150 }
];

function displayProjects(filteredProjects) {
    const container = document.getElementById("projects-container");
    container.innerHTML = "";  

    filteredProjects.forEach(project => {
        const projectCard = document.createElement("div");
        projectCard.className = "project-card";
        projectCard.innerHTML = `
            <img src="${project.image}" alt="${project.title}">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
        `;
        container.appendChild(projectCard);
    });
}

function filterProjects(criteria) {
    let filteredProjects;

    if (criteria === "latest") {
        filteredProjects = [...projects].sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 3);
    } else if (criteria === "popular") {
        filteredProjects = [...projects].sort((a, b) => b.likes - a.likes).slice(0, 2);
    } else {
        filteredProjects = projects;
    }

    displayProjects(filteredProjects);
}

document.addEventListener("DOMContentLoaded", () => {
    filterProjects("all");
});
