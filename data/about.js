const teams = [
    {
        Image: '../images/img/avatar-5.jpg',
        name: 'ByteCrawler',
        title: 'Expert Hacker'
        
    },
    {
        Image: '../images/img/avatar-6.jpg',
        name: 'Geekameleon',
        title: 'Expert Nerd'
    },
    {
        Image : '../images/img/avatar-7.jpg',
        name:'Reptech',
        title: 'Engineer'
    },
    {
        Image : '../images/img/avatar-12.jpg',
        name:'Codelizard',
        title: 'Coder'
    },
    {
        Image : '../images/img/avatar-9.jpg',
        name:'ChromaChanger',
        title: 'Magician'
    },
    {
        Image: '../images/img/avatar-13.jpg',
        name: 'ByteLizard',
        title:'Student'
        
    },
    {
        Image: '../images/img/avatar-11.jpg',
        name: 'CSSameleon',
        title: 'Designer'
    },

    {
        Image : '../images/img/avatar-6.jpg',
        name:'Appzilla',
        title: 'App Designer'
    }
];

let teamHTML = '';

teams.forEach((team) => {
    teamHTML += `
    <article class="team-member">
                <div class="team-member-image">
                    <img src="${team.Image}" alt="no image">
                </div>
                <div class="team-member-info">
                    <h4>${team.name}</h4>
                    <p>${team.title}</p>
                </div>
                <div class="team-member-socials">
                    <a href="#"><i class="ri-instagram-line"></i></a>
                    <a href="#"><i class="ri-twitter-line"></i></i></a>
                    <a href="#"><i class="ri-linkedin-fill"></i></a>
                </div>
            </article>
    `
});

document.querySelector('.team-container').innerHTML= teamHTML;