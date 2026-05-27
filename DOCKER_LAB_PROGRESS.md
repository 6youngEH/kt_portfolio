# Docker Lab Progress

## Current Flow

The user is practicing Docker by editing the portfolio lab page directly.
Do not write the learning notes for the user unless they ask for a correction.
Guide them so they can type the explanations themselves in:

`app/labs/docker/page.tsx`

## Current Position

The user already has a `docker ps` command block under "실행한 명령어".
They are checking whether the explanation below it is correct.

The next command block is:

```tsx
<code className="block rounded bg-slate-100 px-3 py-2">
  docker images
</code>
```

The next learning step is for the user to write the explanation under
`docker images` themselves.

## Teaching Style

When the user asks to continue:

1. Review the current `app/labs/docker/page.tsx` content first.
2. Explain the next Docker concept in Korean.
3. Give short example wording only as a reference.
4. Let the user edit the code themselves.
5. Check their wording when they ask if it is correct.

## Docker Concepts Covered

- `docker ps` shows running containers.
- `support-frontend`, `support-backend`, and `support-postgres` were running.
- `3001->3000` means host/server port `3001` forwards to container internal port `3000`.

## Next Concept

`docker images`

Explain that it shows Docker images stored on the server/local machine.
Useful columns:

- `REPOSITORY`: image name
- `TAG`: image version or label
- `IMAGE ID`: image identifier
- `SIZE`: image size
