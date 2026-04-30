import Njeri from "../assets/Njeri.png"
import { Heart, Award, Users, Clock } from "lucide-react";

function About(){
    return(
        <>
            <section className="first-section">
                <h1 className="welcome-text">About Me</h1>
                <p className="description">Passion, tradition and excellence in every creation</p>
            </section>
            <div className="grid md:grid-cols-2 gap-6 py-6 px-6 mx-4 my-4 shadow-xl rounded-3xl bg-white/30 backdrop-blur">
                <div className="w-full h-full max-w-md mx-h-md overflow-auto mx-auto rounded-3xl flex justify-center">
                    <img src={Njeri} alt="Grace Njeri" className="rounded-2xl" />
                </div>
                <div className="text-card">
                    <h2 className="head-text">Grace Njeri</h2>
                    <p>
                        Hello! I'm Grace, the founder and head baker at Njeri's Delights. My journey into the world of baking began over 10 years ago when I discovered my passion for creating delicious treats in my mother's kitchen.
                    </p>
                    <p>
                        After graduating from Kiambu National Polytechnic and working in renowned bakeries across Kenya, I returned home with a dream: to share my love for artisan baking with my community. Today, Sweet Delights stands as a testament to that dream.
                    </p>
                    <p>
                        Every product we create is made with premium ingredients, traditional techniques, and most importantly, love. I believe that baking is not just about following recipes—it's about creating moments of joy and bringing people together.
                    </p>
                </div>
            </div>
            <section className="mx-4">
                <h1 className="bg-gradient-to-r from-purple-500 to-pink-600 bg-clip-text bg-transparent text-4xl font-semibold tracking-normal pb-5">Our Values</h1>
                <div className="grid md:grid-cols-2 gap-6 lg:grid-cols-4">
                    <div className="bg-white/30 backdrop-blur border border-gray/20 rounded-3xl shadow-2xl flex flex-col items-start px-8 py-6 text-left">
                        <div className="value-icon1">
                            <Heart className="text-purple-500" size={32} />
                        </div>
                        <h2 className="value-text">Passion</h2>
                        <p className="text-gray-600">
                            Every creation is made with dedication and love for the craft
                        </p>
                    </div>
                    <div className="bg-white/30 backdrop-blur border border-gray/20 rounded-3xl shadow-2xl flex flex-col items-start px-8 py-6 text-left">
                        <div className="value-icon2">
                            <Award className="text-pink-500" />
                        </div>
                        <h2 className="value-text">Quality</h2>
                        <p className="text-gray-600">
                            Only the finest ingredients and traditional techniques
                        </p>
                    </div>
                    <div className="bg-white/30 backdrop-blur border border-gray/20 rounded-3xl shadow-2xl flex flex-col items-start px-8 py-6 text-left">
                        <div className="value-icon3">
                            <Users  className="text-orange-500"/>
                        </div>
                        <h2 className="value-text">Community</h2>
                        <p className="text-gray-600">
                            Building connections through shared moments of sweetness
                        </p>
                    </div>
                    <div className="bg-white/30 backdrop-blur border border-gray/20 rounded-3xl shadow-2xl flex flex-col items-start px-8 py-6 text-left">
                        <div className="value-icon4">
                            <Clock className="text-yellow-500" />
                        </div>
                        <h2 className="value-text">Tradition</h2>
                        <p className="text-gray-600">
                            Honoring time-tested methods passed down through generations
                        </p>
                    </div>
                </div>
            </section>
            <section className="mx-4 my-8">
                <div className="journey-table">
                    <h1 className="bg-gradient-to-r from-purple-500 to-pink-600 bg-clip-text bg-transparent text-4xl font-semibold tracking-normal">Our Journey</h1>
                    <div className="flex gap-3">
                        <div className="left">
                            <span className="year1">2010</span>
                        </div>
                        <div className="right">
                            <h1 className="value-text">The Beginning</h1>
                            <p>
                                Started experimenting with family recipes in my home kitchen
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-3">
                        <div className="left">
                            <span className="year2">2023</span>
                        </div>
                        <div className="right">
                            <h1 className="value-text">Culinary School</h1>
                            <p>
                                Joined Kiambu National Polythechnic
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-3">
                        <div className="left">
                            <span className="year3">2025</span>
                        </div>
                        <div className="right">
                            <h1 className="value-text">Attachments</h1>
                            <p>
                                Worked at Aberdare Royal Cottages Nanyuki
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-3">
                        <div className="left">
                            <span className="year4">2026</span>
                        </div>
                        <div className="right">
                            <h1 className="value-text">Graduating</h1>
                            <p>
                                Graduated from Kiambu National Polytechnic
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About;