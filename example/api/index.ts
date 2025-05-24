export default function handler(req: Request) {
  return new Response(
    JSON.stringify({ message: `Hello from bun@${Bun.version}` }),
    {
      headers: { "Content-Type": "application/json" },
    },
  )
}
