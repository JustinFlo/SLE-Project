const testimonials = [
    {
        name: 'John Doe',
        role: 'Web Developer',
        content:"This ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget odio",
        image: "https://randomuser.me/api/portraits",
    },
    {
        name: 'John Doe1',
        role: 'Web Developer1',
        content:"Should ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget odio",
        image: "https://randomuser.me/api/portraits",
    },
    {
        name: 'John Doe2',
        role: 'Web Developer2',
        content:"All ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget odio",
        image: "https://randomuser.me/api/portraits",
    },
    {
        name: 'John Doe3',
        role: 'Web Developer3',
        content:"Be ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget odio",
        image: "https://randomuser.me/api/portraits",
    },
    {
        name: 'John Doe4',
        role: 'Web Developer4',
        content:"Different ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget odio",
        image: "https://randomuser.me/api/portraits",
    },
    {
        name: 'John Doe5',
        role: 'Web Developer5',
        content:"So ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget odio",
        image: "https://randomuser.me/api/portraits",
    },
    {
        name: 'John Doe6',
        role: 'Web Developer6',
        content:"This ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget odio",
        image: "https://randomuser.me/api/portraits",
    },
    {
        name: 'John Doe7',
        role: 'Web Developer7',
        content:"Can ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget odio",
        image: "https://randomuser.me/api/portraits",
    },
    {
        name: 'John Doe8',
        role: 'Web Developer8',
        content:"Work ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget odio",
        image: "https://randomuser.me/api/portraits",
    },
];

const createTestimonialCard = (testimonial) =>{
    return `
             <div class="card">
            <div class="profile">
              <img src="${testimonial.image}" alt="${testimonial.name}" />
              <div>
                <div class="name">${testimonial.name}</div>
                <div class="role">${testimonial.role}</div>
              </div>
            </div>

             <div class="content">
            ${testimonial.content}
            </div>
          </div>
    `;
}

const populateColumn = (columnId) => {
    const column = document.getElementById(columnId);

    [...testimonials, ...testimonials].forEach((testimonial) => {
        column.innerHTML += createTestimonialCard(testimonial);
    });
    
}

testimonials.sort(() => Math.random() - 0.5);
populateColumn('column1');
testimonials.sort(() => Math.random() - 0.5);
populateColumn('column2');
testimonials.sort(() => Math.random() - 0.5);
populateColumn('column3');