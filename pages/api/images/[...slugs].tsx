import Avatar from "boring-avatars";
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const [type, size, name] = (req.query.slugs as string[]) || []

  const avatarHtml = ReactDOMServer.renderToString(
    <Avatar
      size={Number(size)}
      name={name}
      variant={type as any}
      colors={["#92A1C6", "#146A7C", "#F0AB3D", "#C271B4", "#C20D90"]}
    />,
  );
  res.setHeader('Content-Type', 'image/svg+xml');
  res.end(avatarHtml);
}