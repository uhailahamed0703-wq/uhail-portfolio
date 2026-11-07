import express from 'express';
import cors from 'cors';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Path for storing received contact messages
const MESSAGES_FILE = path.join(__dirname, 'messages.json');

// Initialize messages file if it does not exist
if (!fs.existsSync(MESSAGES_FILE)) {
  fs.writeFileSync(MESSAGES_FILE, JSON.stringify([], null, 2));
}

// Serve static assets from 'public'
app.use(express.static(path.join(__dirname, 'public')));
app.use('/assets', express.static(path.join(__dirname, 'public/assets')));
app.use('/css', express.static(path.join(__dirname, 'public/css')));
app.use('/js', express.static(path.join(__dirname, 'public/js')));
app.use(express.static(path.join(__dirname, 'dist')));

// ---------------------------------------------------------------------------
// REST API Routes
// ---------------------------------------------------------------------------

// 1. Health check route
app.get('/api/health', (req, res) => {
  res.json({
    status: 'online',
    service: 'M.I. Uhail Ahamed Portfolio API',
    environment: process.env.NODE_ENV || 'production',
    uptime: `${Math.floor(process.uptime())}s`,
    timestamp: new Date().toISOString(),
  });
});

// 2. Portfolio metadata route
app.get('/api/portfolio', (req, res) => {
  res.json({
    personal: {
      name: "M.I. Uhail Ahamed",
      title: "Full Stack Developer | AI Engineer | Software Developer",
      location: "Indonesia",
      university: "Universitas Nusa Putra",
      degree: "Bachelor's Degree in Informatics Engineering",
      gpa: "3.92 / 4.00",
      email: "uhailahamed0703@gmail.com",
      github: "https://github.com/uhailahamed0703-wq",
      linkedin: "https://www.linkedin.com/in/uhailahamed",
      instagram: "https://www.instagram.com/uhail_ahamed_/",
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
});

// 3. Voice intro narration route
app.get('/api/voice/intro', (req, res) => {
  res.json({
    speaker: "M.I. Uhail Ahamed",
    voiceGender: "Male",
    durationSeconds: 28,
    fullText: "Hi, it's Uhail Ahamed. I'm a Full Stack Developer and aspiring AI Engineer, passionate about building modern digital experiences and intelligent software solutions. I work across frontend and backend technologies, explore artificial intelligence, and transform ideas into real-world applications. From AI-powered educational platforms to full-stack web applications, I enjoy building technology that makes a difference. Welcome to my portfolio. Let's explore what I've been building.",
    sentences: [
      { text: "Hi, it's Uhail Ahamed.", time: 0 },
      { text: "I'm a Full Stack Developer and aspiring AI Engineer, passionate about building modern digital experiences and intelligent software solutions.", time: 3.2 },
      { text: "I work across frontend and backend technologies, explore artificial intelligence, and transform ideas into real-world applications.", time: 10.5 },
      { text: "From AI-powered educational platforms to full-stack web applications, I enjoy building technology that makes a difference.", time: 18.0 },
      { text: "Welcome to my portfolio. Let's explore what I've been building.", time: 25.5 },
    ],
  });
});

// 4. Contact form submission route (Real Express Handler)
app.post('/api/contact', (req, res) => {
  const { name, email, subject, message } = req.body;

  // Validation
  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      error: 'Missing required fields. Name, email, and message are required.',
    });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({
      success: false,
      error: 'Please provide a valid email address.',
    });
  }

  const newMessage = {
    id: `msg_${Date.now()}`,
    name: name.trim(),
    email: email.trim(),
    subject: (subject || 'General Inquiry').trim(),
    message: message.trim(),
    receivedAt: new Date().toISOString(),
    ip: req.ip || req.headers['x-forwarded-for'] || '127.0.0.1',
  };

  try {
    const rawData = fs.readFileSync(MESSAGES_FILE, 'utf-8');
    const messages = JSON.parse(rawData);
    messages.unshift(newMessage);
    fs.writeFileSync(MESSAGES_FILE, JSON.stringify(messages, null, 2));

    console.log(`[Contact Form] New message received from ${name} (${email}): "${subject}"`);

    return res.status(201).json({
      success: true,
      message: 'Thank you! Your message has been received by Uhail’s backend server.',
      data: {
        id: newMessage.id,
        receivedAt: newMessage.receivedAt,
      },
    });
  } catch (err) {
    console.error('Error saving message:', err);
    return res.status(500).json({
      success: false,
      error: 'Server error processing your message. Please reach out directly via email.',
    });
  }
});

// 5. Admin / Owner route to inspect messages
app.get('/api/messages', (req, res) => {
  try {
    const rawData = fs.readFileSync(MESSAGES_FILE, 'utf-8');
    const messages = JSON.parse(rawData);
    res.json({
      count: messages.length,
      messages,
    });
  } catch (err) {
    res.status(500).json({ error: 'Could not read messages file' });
  }
});

// ---------------------------------------------------------------------------
// HTML Serving Routes
// ---------------------------------------------------------------------------

// Direct route to view standalone pure HTML5 portfolio
app.get('/html', (req, res) => {
  const pureHtmlPath = path.join(__dirname, 'public/portfolio.html');
  if (fs.existsSync(pureHtmlPath)) {
    res.sendFile(pureHtmlPath);
  } else {
    res.redirect('/');
  }
});

// Fallback: serve primary HTML page
app.use((req, res) => {
  const publicIndex = path.join(__dirname, 'public/index.html');
  const distHtml = path.join(__dirname, 'dist/index.html');
  const rootHtml = path.join(__dirname, 'index.html');

  if (fs.existsSync(publicIndex)) {
    res.sendFile(publicIndex);
  } else if (fs.existsSync(distHtml)) {
    res.sendFile(distHtml);
  } else if (fs.existsSync(rootHtml)) {
    res.sendFile(rootHtml);
  } else {
    res.status(404).send('HTML file not found.');
  }
});

// Start Express Server
app.listen(PORT, () => {
  console.log(`=======================================================`);
  console.log(`🚀 Express.js Server running on http://localhost:${PORT}`);
  console.log(`📄 Serving HTML App: http://localhost:${PORT}/`);
  console.log(`📑 Standalone Pure HTML5: http://localhost:${PORT}/html`);
  console.log(`📡 API Endpoints:`);
  console.log(`   - POST /api/contact`);
  console.log(`   - GET  /api/portfolio`);
  console.log(`   - GET  /api/voice/intro`);
  console.log(`   - GET  /api/health`);
  console.log(`=======================================================`);
});

export default app;
