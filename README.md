# bun-vercel

Run [Bun](https://bun.sh) on Vercel Serverless Functions

[https://bun-vercel.vercel.app/](https://bun-vercel.vercel.app/)

> This is an experimental project and should not be used in production. This project is not endorsed by Vercel.

```typescript
// api/index.ts
export default function handler(req: Request) {
  return new Response(
    JSON.stringify({ message: `Hello from bun@${Bun.version}` }),
    {
      headers: { "Content-Type": "application/json" },
    },
  )
}
```

## Get Started

There are two ways to deploy your project to Vercel:

1. GitHub integration
2. Manually from your computer

### GitHub Integration

Update your vercel.json with `bun-vercel`

```json
{
  "$schema": "https://openapi.vercel.sh/vercel.json",
  "functions": {
    "api/index.ts": {
      "runtime": "bun-vercel@1.0.0-alpha.6"
    }
  }
}
```

### Manually

1. Install the Vercel CLI and run `vercel link`
2. Run `vercel pull`
3. Run `vercel build`
4. Run `vercel deploy --prebuilt --prod`
