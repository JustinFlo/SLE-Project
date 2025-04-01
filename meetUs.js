const testimonials = [
    {
        name: 'Sofia Russo',
        role: 'Secretary',
        content:"I’ve had an amazing experience in TSA collaborating with my peers and problem-solving!",
        image: "https://randomuser.me/api/portraits",
    },
    {
        name: 'Kenny Sandoval-Sanchez',
        role: 'Historian',
        content:"TSA has allowed me to explore my creativity alongside a motivated set of individuals!",
        image: "https://randomuser.me/api/portraits",
    },
    {
        name: 'Kezia George',
        role: 'Leader',
        content:"I learnt how to work in high pressure situations and how to adapt quickly if things fell through with events last minute. Also, with the new members this year, I was able to work with a new group of people. Seeing how everyone worked together and bring in different ideas was something I loved! I can't wait to go to TCNJ for states and spend more time with everyone!",
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