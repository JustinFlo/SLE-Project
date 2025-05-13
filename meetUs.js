const testimonials = [
    {
        name: 'Sofia Russo',
        role: 'Secretary',
        content:"I’ve had an amazing experience in TSA collaborating with my peers and problem-solving!",
        
    },
    {
        name: 'Kenny Sandoval-Sanchez',
        role: 'Historian',
        content:"TSA has allowed me to explore my creativity alongside a motivated set of individuals!",
        
    },
    {
        name: 'Kezia George',
        role: 'President',
        content:"I learnt how to work in high pressure situations and how to adapt quickly if things fell through with events last minute. Also, with the new members this year, I was able to work with a new group of people. Seeing how everyone worked together and bring in different ideas was something I loved! I can't wait to go to TCNJ for states and spend more time with everyone!",
        
    },
    {
        name: 'Eliana Agoglia',
        role: 'Member',
        content:"This is my first year at Freehold Township High School and my first time joining TSA. I've never heard of TSA before, but being part of the music production team has taught me a lot. I have a big passion for music and video games, and although I've never really worked with technology before, this experience has opened my mind to it. I've learned that I need to be patient, take my time, and not rush things. I also really found that it was difficult to put a piece together online, being a musician it was like opening up a whole different world to me. But I'm so glad I did so because it has been such a great experience, and I'm so proud of the music I was able to make.",
        
    },
    {
        name: 'Alyssa Florio',
        role: 'Vice President',
        content:"I started TSA in 8th grade and have competed both at the state and national level. When I was in 8th grade I placed 4th nationally for leadership strategies. As I moved to high school I wanted to continue TSA and competed in Future Technology and Engineering Teacher, placing 2nd at the state level, and in Fashion Design and Technology last year. TSA has taught me invaluable skills and helped me gain a middle school friend group I still love while learning more about the technical world around us.",
        
    },
    {
        name: 'Ava Grinberg',
        role: 'Member',
        content:"My experience in TSA was amazing, I made new friends and had so much fun. I got to see how to create a creative cover and put different instruments together to produce a musical beat for my music production section. For my audio podcasting I learned how to speak and write a script . The time and effort was worth it to see how amazing the outcome would be.",
        
    },
    {
        name: 'Justin Flores',
        role: 'Member',
        content:"The TSA experience has been a great one for me. I have learned so much about technology and how to work with others. I have also made some great friends along the way. I am looking forward to continuing my journey with doing more with projects and development once I get to college",
        
    },
    {
        name: 'Olusegun Olayinka',
        role: 'Parliamentarian',
        content:"I have learned so much about technology and how to work with others. I have also made some great friends along the way, especially within the council. The best part of TSA was compeiting in Leadership events and working with my peers to create a project.",
        
    },
    {
        name: 'Lauren Soto',
        role: 'Sergeant-At-Arms',
        content:"Being apart of TSA has been one of the best experiences I have had in high school. I have learned so much about technology and getting the opurtunity to work with an amazing council of my friends. The TSA club has done so much for me and I am so grateful to be apart of it. I have learned how to work with others and how to be a leader. ",
        
    },
];

const createTestimonialCard = (testimonial) =>{
    return `
             <div class="card">
            <div class="profile">

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