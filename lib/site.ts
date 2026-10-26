// ===== EDIT ALL CONTENT HERE =====
export const site = {
  name: "Advance Academy", city: "Ambikapur", cityHi: "अंबिकापुर", region: "Chhattisgarh",
  tagline: "Right Coaching Makes The Difference",
  phone: "6261051722", whatsapp: "916261051722",
  registerUrl: "https://forms.gle/i1nypQ4kf5EYNufz8",
  waMessage: "Hello Advance Academy, I want to enquire about admission.",
  address: ["In Front of JAYEKA RESTRA", "Gandhinagar", "Ambikapur (C.G.)"],
  url: "https://advanceacademy.example",
  logo: "/images/logo.png",
  offer: "", //ex; Admissions open — limited seats//shown in footer strip if not empty
  nav: [["Home","#home"],["Courses","#courses"],["Results","#results"],["Faculty","#faculty"],["About","#about"],["Contact","#contact"]] as [string,string][],
  hero: ["EVERY DOCTOR\nSTARTS AS A STUDENT.","YOUR JOURNEY\nSTARTS HERE.","FROM ASPIRATION\nTO ACHIEVEMENT."],
  heroSub: "Right guidance. Consistent practice. A clear path to your dream.",
  frames: ["student-01","student-02","student-03","student-04"].map(f=>`/images/transformation/${f}.webp`),
};
export const stats = [
  {value:"10+",label:"Years of excellence"},{value:"10,000+",label:"Students guided"},
  {value:"7,000+",label:"Selections"},{value:"1000+",label:"Top rankers"},
  {value:"2026 TOP RANKS"}
];
export const courses = [
  {title:"NEET",tagline:"From First Concept to Medical College"},
  {title:"IIT / JEE",tagline:"Build the Foundation for Engineering"},
  {title:"Foundation",tagline:"Start Strong. Grow Stronger."},
  {title:"Pre B.Sc Nursing",tagline:"Build Your Path in Healthcare"},
  {title:"PAT / Agriculture",tagline:"Focused Agriculture Entrance Preparation"},
];
export const results = [
  {name:"Praveen Gupta",exam:"NEET 2026",score:"616/720",rank:"",year:"2026",photo:"/images/students/pravin.jpeg"},
  {name:"Rohit Kumar",exam:"NEET 2026",score:"546/720",rank:"",year:"2026",photo:"/images/students/rohit.jpeg"},
];
export const milestones = [
  {year:"2015",title:"Academy Begins"},{year:"2018",title:"Started Online Classes First In Our City"},
  {year:"2023",title:"Awarded With Coaching Of The Year"},{year:"2026",title:"NEET 2026 Results Top State RANKS From Our Coaching"},
];
export const why = [
  ["Experienced Faculty","Teachers who know the exam and the student."],["Regular Test Series","Practice under real exam conditions."],
  ["Personal Mentorship","Someone who knows your progress by name."],["Doubt Support","Questions answered before they pile up."],
  ["Performance Analysis","Every test shows what to fix next."],["Structured Preparation","A clear plan from day one to exam day."],
  ["Competitive Environment","Ambitious peers who push each other."],["Result-Oriented Guidance","Every decision aimed at selection."],
];

export const director = {
  name: "PREM GUPTA SIR",
  title: "Director, Advance Academy",
  qualification: "BE. Civil Engineering | MSC. mathematics | 10+ years experience | Maths HOD",
  message: "“Your dream deserves the right direction, the right guidance, and the right environment to grow. \n At Advance Academy, we believe that every student has the potential to achieve something extraordinary. Our responsibility is not just to teach a syllabus, but to help students develop the knowledge, discipline, confidence, and mindset needed to succeed.",
  photo: "/images/faculty/premsir.jpeg",
};

export const faculty = [
  {name:"Aditya Arya Gupta",subject:"HOD Physics",Experience:"10 Years",bio:"PHD | MSC.PHYSICS With 10+ Years Of Experience",photo:"/images/faculty/adityasir.png"},
  {name:"Sachin Kumar Gupta",subject:"HOD Chemistry",experience:"4 Years",bio:"NET | JRF | MSC.CHEMISTRY With 10+ Years Of Experience",photo:"/images/faculty/chiku.png"},
  {name:"Lovely Ferwi",subject:"Biology",experience:"2 Years",bio:"MBBS With 2 Years of Experience",photo:"/images/faculty/Lovelyna.jpeg"},
  {name:"Anish Patel",subject:"Maths[JEE]",experience:"2 Years",bio:"BTech Electrical Engineering[NIT Raipur]",photo:"/images/faculty/ansih.jpeg"}
];
export const testimonials = [
  {quote:"With Good teachers i really did best im my exam",name:"Miss.Disha",course:"NEET",year:"2025",photo:"/images/students/disha.png"},
  {quote:"Advance academy gave me courage to get better in my career and exam",name:"Nistha Soni",course:"PAT",year:"2026",photo:"/images/students/nistha.jpeg"},
];
export const campus = ["Classrooms","Students studying","Teachers teaching","Test sessions","Doubt solving","Celebrating","Mentorship"]
  .map(l=>({label:l,photo:`/images/campus/${l.toLowerCase().replace(/ /g,"-")}.webp`}));
export const waLink = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(site.waMessage)}`;
