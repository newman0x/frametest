import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  
  const html = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
         <meta property="fc:frame" content="vNext" />
         <meta property="fc:frame:image" content="https://i.imgur.com/iKbr2Nx.jpeg" />
         <meta property="fc:frame:button:1" content="Green" />
         <meta property="fc:frame:button:2" content="Purple" />
         <meta property="fc:frame:button:3" content="Red" />
         <meta property="fc:frame:button:4" content="Blue" />
      </head>
      <body></body>
    </html>
  `;

  res.setHeader('Content-Type', 'text/html');
  res.send(html);
}
