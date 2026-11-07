export default async function handler(req, res) {
  // CORS configuration
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method === 'POST') {
    const { name, email, subject, message } = req.body || {};

    // Validation
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        error: 'Missing required fields: Name, email, and message are required.',
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        error: 'Please provide a valid email address.',
      });
    }

    const submission = {
      id: `msg_${Date.now()}`,
      name: name.trim(),
      email: email.trim(),
      subject: (subject || 'General Inquiry').trim(),
      message: message.trim(),
      receivedAt: new Date().toISOString(),
    };

    console.log(`[Contact] Received message from ${submission.name} (${submission.email})`);

    return res.status(201).json({
      success: true,
      message: 'Thank you! Your message has been received by Uhail Ahamed.',
      data: {
        id: submission.id,
        receivedAt: submission.receivedAt,
      },
    });
  }

  return res.status(405).json({
    success: false,
    error: 'Method not allowed. Use POST to submit messages.',
  });
}

