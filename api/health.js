export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.status(200).json({
    status: 'online',
    service: 'M.I. Uhail Ahamed Portfolio API (Vercel Serverless)',
    environment: 'production',
    timestamp: new Date().toISOString(),
  });
}

