import kv from "@vercel/kv";

export default async function SayHello({ name }: { name: string }) {
  const kvCache = await kv.json.get(cacheKey(name), "$");
  if (kvCache) {
    return createJsx(kvCache[0].message);
  }

  const res = await fetch(`http://localhost:3002/api/greeting?name=${name}`);
  const { message } = await res.json();

  await kv.json.set(cacheKey(name), "$", { message });

  return createJsx(message);
}

function createJsx(message: string) {
  return <p className="text-sm text-gray-500">{message}</p>;
}

function cacheKey(name: string) {
  return `${name}-cache`;
}
