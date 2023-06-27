const courses = [
    {
        Image: '../images/img/design-1.jpg',
        title: 'Responsive social media website UI Design',
    },
    {
        Image: '../images/img/design-2.jpg',
        title: 'Responsive social media website UI Design',
    },
    {
        Image: '../images/img/design-3.jpg',
        title: 'Responsive social media website UI Design',
    },
    {
        Image: '../images/img/design-4.jpg',
        title: 'Responsive social media website UI Design',
    },
    {
        Image: '../images/img/design-5.jpg',
        title: 'Responsive social media website UI Design',
    },
    {
        Image: '../images/img/design-6.jpg',
        title: 'Responsive social media website UI Design',
    },
    {
        Image: '../images/img/design-7.jpg',
        title: 'Responsive social media website UI Design',
    },
    {
        Image: '../images/img/design-1.jpg',
        title: 'Responsive social media website UI Design',
    },
    {
        Image: '../images/img/design-4.jpg',
        title: 'Responsive social media website UI Design',
    },
    {
        Image: '../images/img/design-6.jpg',
        title: 'Responsive social media website UI Design',
    },
    {
        Image: '../images/img/design-3.jpg',
        title: 'Responsive social media website UI Design',
    },
    {
        Image: '../images/img/design-7.jpg',
        title: 'Responsive social media website UI Design',
    },
]

let coursesHTML = '';
courses.forEach((course) => {
    coursesHTML += `
    <article class="course">
    <div class="course-image">
      <img src="${course.Image}" alt="no image" />
    </div>
    <div class="course-info">
      <h4>${course.title}</h4>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit
        iusto, totam repudiandae expedita iure laudantium consequatur!
      </p>
      <a href="courses.html" class="btn btn-primary">Learn more</a>
    </div>
    </article>
    `
})

document.querySelector('.courses-container').innerHTML= coursesHTML;