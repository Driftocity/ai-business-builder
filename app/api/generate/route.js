export async function POST(req) {
  const { idea } = await req.json();

  // MOCK AI RESPONSE (NO API KEY NEEDED YET)
  const response = {
    name: idea + " Pro Services",
    tagline: "Fast. Reliable. Professional.",
    description: `We provide high-quality ${idea} services for residential and commercial clients.`,
    services: [
      idea + " basic service",
      idea + " premium package",
      "Emergency support",
      "Monthly maintenance"
    ]
  };

  return Response.json(response);
}
