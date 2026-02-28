const jobs = [
    {
        title: 'Senior Civil Engineer',
        category: 'Engineering',
        location: 'Dubai, UAE',
        type: 'Full-time',
        description: 'We are seeking an experienced civil engineer to oversee major construction and infrastructure projects, ensuring they meet all safety, budget, and quality standards.'
    },
    {
        title: 'MEP Technician',
        category: 'Maintenance',
        location: 'Sharjah, UAE',
        type: 'Full-time',
        description: 'Responsible for mechanical, electrical, and plumbing maintenance across a portfolio of commercial buildings. Valid UAE driver license preferred.'
    },
    {
        title: 'Project Manager',
        category: 'Management',
        location: 'Abu Dhabi, UAE',
        type: 'Contract',
        description: 'Looking for a PMP-certified Project Manager to lead our upcoming developmental infrastructure project. Minimum 10 years experience required.'
    },
    {
        title: 'Safety Officer',
        category: 'Health & Safety',
        location: 'Dubai, UAE',
        type: 'Full-time',
        description: 'Ensure compliance with UAE health and safety standards on active construction sites. NEBOSH certification required.'
    }
];

async function seed() {
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'; // Ignore self-signed dotnet certs
    try {
        for (const job of jobs) {
            const res = await fetch('http://127.0.0.1:5200/api/jobs', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(job)
            });
            console.log(`Added ${job.title}: ${res.status}`);
        }
        console.log('Successfully seeded jobs!');
    } catch (error) {
        console.error('Error seeding jobs:', error);
    }
}
seed();
