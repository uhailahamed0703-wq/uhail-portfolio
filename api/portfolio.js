export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.status(200).json({
    personal: {
      name: "M.I. Uhail Ahamed",
      title: "Full Stack Developer | AI Engineer | Software Developer",
      location: "Indonesia",
      university: "Universitas Nusa Putra",
      degree: "Bachelor's Degree in Informatics Engineering",
      email: "uhailahamed0703@gmail.com",
      github: "https://github.com/uhailahamed0703-wq",
      linkedin: "https://www.linkedin.com/in/uhailahamed",
      instagram: "https://www.instagram.com/uhail_ahamed_/",
      whatsapp: "https://wa.me/Uhail_Ahamed?s=p"
    },
    featuredProjects: [
      {
        id: "openlearn",
        name: "OpenLearn",
        category: "AI-Powered Education Platform",
        org: "AYITRIX",
        role: "Full Stack Developer & QA",
        url: "https://openlearn.ayitrix.xyz/",
        github: "https://github.com/mahfoos/openlearn",
      },
      {
        id: "ayipm",
        name: "AyiPM",
        category: "Open-Source Team Management Platform",
        org: "AYITRIX",
        github: "https://github.com/uhailahamed0703-wq/AyiPM",
      },
      {
        id: "basic-programming-project",
        name: "Basic Programming Project",
        category: "Interactive Python Learning Platform",
        liveUrl: "https://uhail.netlify.app/",
        github: "https://github.com/uhailahamed0703-wq/Basic-Programming-Project",
      },
      {
        id: "farmlink",
        name: "FarmLink",
        category: "Agricultural Marketplace Platform",
        github: "https://github.com/uhailahamed0703-wq/farmLink",
      },
      {
        id: "hospital-emergency-management",
        name: "Hospital Emergency Management System",
        category: "Java | Data Structures & Algorithms",
      },
    ],
  });
}

