import { CheckCircle, ExternalLink } from "lucide-react";
import Grace from "../assets/Grace-Resume.pdf"

const skills = [
    { name: "Artisan Bread Making", level: 95 },
    { name: "Pastry & Viennoiserie", level: 90 },
    { name: "Cake Decoration", level: 88 },
    { name: "Chocolate Work", level: 92 }
];

const projects = [
    {
        title: "Wedding",
        description: "5-tier custom wedding cake for 300 guests featuring hand-crafted sugar flowers and gold leaf details",
        year: "2024",
        category: "Wedding Cake",
        highlights: ["sugar flowers", "Gold leaf accents", "Custom flavor pairing"],
    },
    {
        title: "Artisan Bread Workshop Series",
        description: "Weekly bread-making trainings with fellow colleagues",
        year: "2023-Present",
        category: "Education",
        highlights: ["students", "Sourgdough Mastery", "Hands-on Learning"],
    },
    {
        title: "Corporate Catering Program",
        description: "Performed premium catering services at Concord Suites Hotel, Nairobi",
        year: "2025",
        category: "Business",
        highlights: ["Customers", "Custom Menus", "Same-day Delivery"],
    },
];

function Skills(){
    return (

        <>
            <section className="first-section">
                <h1 className="bg-gradient-to-r from-purple-500 to-pink-600 bg-clip-text bg-transparent text-6xl font-semibold pb-3">Skills & Expertise</h1>
                <p className="description">
                    Years of training and experience in the art
                    of baking
                </p>
            </section>
            <section className="mx-4 my-8">
                <div className="journey-table">
                    <h1 className="text-4xl mb-8 p-5 font-semibold tracking-normal">Core Competencies</h1>
                    <div className="space-y-6">
                        {skills.map((skill, index) => (
                            <div key={index}>
                                <div className="flex justify-between mb-2">
                                    <span className="text-lg">{skill.name}</span>
                                    <span className="text-lg text-purple-600">{skill.level}%</span>
                                </div>
                                <div className="h-3 backdrop-blur-sm bg-white/30 rounded-full overflow-hidden border border-white/20">
                                    <div 
                                        className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-1000 ease-out" 
                                        style={{ width: `${skill.level}%` }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="mx-4 mb-16 backdrop-blur-md bg-white/30 rounded-3xl p-6 md:p-8 border border-white/20 shadow-xl ">
                <h1 className="text-4xl mb-8 p-5 font-semibold tracking-normal">Certifications and Training</h1>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="backdrop-blur-sm bg-white/20 rounded-xl p-6 border border-gray/20">
                        <div className="flex items-start gap-4 overflow-hidden">
                            <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={24} />
                            <div>
                                <h3 className="text-xl mb-2">Kiambu National Polytechnic Diploma</h3>
                                <p className="text-gray-700">Advanced Pastry & Baking</p>
                                <p className="text-sm text-gray-600 mt-1">2026</p>
                            </div>
                        </div>
                    </div>
                    <div className="backdrop-blur-sm bg-white/20 rounded-xl p-6 border border-gray/20">
                        <div className="flex items-start gap-4 overflow-hidden">
                            <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={24} />
                            <div>
                                <h3 className="text-xl mb-2">Aberdare Prestige & Royal Cottages</h3>
                                <p className="text-gray-700">Pastry & Baking Internship</p>
                                <p className="text-sm text-gray-600 mt-1">2025</p>
                            </div>
                        </div>
                    </div>
                    <div className="backdrop-blur-sm bg-white/20 rounded-xl p-6 border border-gray/20">
                        <div className="flex items-start gap-4 overflow-hidden">
                            <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={24} />
                            <div>
                                <h3 className="text-xl mb-2">Concord Hotel & Suits</h3>
                                <p className="text-gray-700">Pastry & Baking Industrial Attachment</p>
                                <p className="text-sm text-gray-600 mt-1">2025</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="mx-4 my-8">
                <h1 className="mb-5 p-5 bg-gradient-to-r from-purple-500 to-pink-500 font-semibold tracking-normal">Featured Projects</h1>
                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="backdrop-blur-sm bg-white/30 rounded-2xl p-8 border border-gray/20 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                        >
                            <div className="flex items-start justify-between mb-4">
                                <span className="text-gray-700 px-4 py-1 backdrop-blur-sm bg-purple-700/20 rounded-full text-sm border border-white/20">
                                    {project.category}
                                </span>
                                <span className="text-sm text-gray-600">{project.year}</span>
                            </div>
                            <h3 className="text-gray-500 text-2xl mb-3">{project.title}</h3>
                            <p className="text-gray-700 mb-4 leading-relaxed">
                                {project.description}
                            </p>
                            <div className="space-y-2">
                                <p className="text-sm font-semibold text-purple-600">Key Highlights:</p>
                                <ul className="space-y-1">
                                    {project.highlights.map((highlight, idx) => (
                                        <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                                            <div className="w-1.5 h-1.5 rounded-full bg-pink-500" />
                                            {highlight}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="flex flex-col items-center mx-4 my-8 mt-14 backdrop-blur bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-orange-500/20 rounded-3xl p-12 text-center border border-gray/20 shadow-xl">
                <h2 className="text-3xl md:text-4xl mb-4 py-2">
                    Let's Create Something Special Together
                </h2>
                <p className="text-xl text-gray-700 mb-6 max-w-2xl mx-uto">
                    Whether it's a wedding cake, corporate event or private celebration, I'd love to bring your imagination to reality
                </p>
                <button className="inline-flex items-center gap-2 px-8 py-4 backdrop-blur-md  bg-white/40 hover:bg-white/60 rounded-full transition-all shadow-lg hover-shadow-xl border border-gray/20">
                    <a href={Grace} download="" className="inline-flex">
                        Download CV
                        <ExternalLink size={20} />
                    </a>
                </button>
            </section>
        </>
    )
}


export default Skills;


