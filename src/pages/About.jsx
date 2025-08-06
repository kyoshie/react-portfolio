import { motion } from "framer-motion";
import { GraduationCap, IdCardLanyard, Medal } from "lucide-react";

const About = () => {
  return (
    <motion.section
      id="about"
      className="min-h-screen pt-20 scroll-mt-20 max-w-7xl mx-auto px-4 sm:px-6 "
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false, amount: 0.2 }}
    >

      <div className="text-center">
        <span className="w-fit mx-auto border-purple-400/50 text-purple-400 bg-purple-400/10  p-2 text-sm mb-4 rounded-full px-3 py-1 flex items-center justify-center">
          <IdCardLanyard className="w-3 h-3 mr-1" />
          About Me
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">Get to know me better</h2>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
          I'm passionate about creating digital experiences that make a difference.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
        <div className="w-full border bg-slate-800/30 border-slate-600 rounded-md backdrop-blur-sm h-[700px] md:h-[720px] lg:h-[500px] hover:border-blue-400 hover:shadow-[0_0_15px_#60a5fa] transition-all duration-300 ease-in-out">
          <div className="p-8">
            <h3 className="text-2xl font-bold text-white mb-6">My Journey</h3>
            <div className="space-y-4 text-slate-300 leading-relaxed text-md">
              <p>
                Hello! I am Joshua, a passionate individual who wants to become a professional front-end developer.
                My interest in web development started last year when I did my capstone project as a 4th year BSIT Student.
                I started to lean on front-end development this year through my internship at the University of Batangas Information
                Technology Center.
              </p>
              <p>
                I specialize in several front-end frameworks like Bootstrap, Tailwind CSS, and React JS creating responsive and attractive
                front-end pages. I am eager to learn new trends when it comes to the field of technology and development.
              </p>
              <p>
                When I'm not coding, you'll find me exploring vidoes about coding, playing online games, watching movies,
                or hanging out with my special someone or my friends.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full border bg-slate-800/30 border-slate-600 rounded-md backdrop-blur-sm h-[720px]  md:h-[700px] lg:h-[500px] hover:border-blue-400 hover:shadow-[0_0_15px_#60a5fa] ltransition-all duration-300 ease-in-out">
          <div className="p-8">
            <h3 className="text-2xl font-bold text-white mb-6">My Education</h3>
            <div className="space-y-4">
              {[
                {
                  school: "University of Batangas",
                  course: "Bachelor of Science in Information Technology",
                  year: "2022–2025",
                },
                {
                  school: "STI College Batangas",
                  course: "Bachelor of Science in Information Technology",
                  year: "2019–2020",
                },
              ].map((educ, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-slate-700 last:border-l-0">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-500 rounded-full"></div>
                  <div className="space-y-2">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                      <h4 className="font-semibold text-white">{educ.school}</h4>
                      <span className="text-slate-400 text-xs w-fit">{educ.course}</span>
                    </div>
                    <p className="text-blue-400 text-sm font-medium">{educ.year}</p>
                  </div>
                </div>
              ))}
            </div>
            <h3 className="text-2xl font-bold text-white mb-6 pt-7">Achievements</h3>
            <div className="space-y-4">
              {[
                {
                  school: "University of Batangas",
                  year: "2025",
                  icon: <GraduationCap />,
                  achievement: "Graduated Cum Laude"
                },
                {
                  school: "University of Batangas",
                  year: "2024",
                  icon: <Medal />,
                  achievement: "Won Best IPT Project"
                }
              ].map((achievement, index) => (
                <div key={index} className="relative pl-8">
                  <div className="absolute -left-[8px] top-1">{achievement.icon}</div>
                  <div className="space-y-2">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <h4 className="font-semibold text-white">{achievement.school}</h4>
                        <p className="text-blue-400 text-sm font-medium">{achievement.year}</p>
                      </div>
                      <span className="text-slate-400 text-sm font-medium mt-1 sm:mt-0">
                        {achievement.achievement}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="border bg-slate-800/30 border-slate-600 md:col-span-2 rounded-md backdrop-blur-sm w-full h-[580px] md:h-[250px] hover:border-blue-400 hover:shadow-[0_0_15px_#60a5fa] ltransition-all duration-300 ease-in-out">
          <div className="p-8">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Fun Facts About Me</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-4">🍔</div>
                <h4 className="font-semibold text-white mb-2">Food Lover</h4>
                <p className="text-slate-400 text-sm">
                  I enjoy eating foods from Jollibee and Mcdonalds.
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🎮</div>
                <h4 className="font-semibold text-white mb-2">Gamer</h4>
                <p className="text-slate-400 text-sm">
                  Playing online games is my hobby and it helps me relax.
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">📚</div>
                <h4 className="font-semibold text-white mb-2">Continuous Learner</h4>
                <p className="text-slate-400 text-sm">
                  I enjoy learning from tech creators and staying updated with the latest in the industry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>


    </motion.section >
  );
};

export default About;
