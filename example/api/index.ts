export default function handler(req: Request) {
  return new Response(
    JSON.stringify({ message: `Hello from bun@${Bun.version} on Vercel` }),
    {
      headers: { "Content-Type": "application/json" },
    },
  )
}
