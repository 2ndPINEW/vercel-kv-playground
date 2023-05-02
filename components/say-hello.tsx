import kv from "@vercel/kv";

export default async function SayHello({ name }: { name: string }) {
  const kvCache = await kv.json.get(cacheKey(name), "$");
  if (kvCache) {
    return (
      <p className="text-sm text-gray-500">{kvCache[0].message} from kv</p>
    );
  }

  const res = await fetch(`/api/greeting?name=${name}`);
  const { message } = await res.json();

  await kv.json.set(cacheKey(name), "$", { message });

  return <p className="text-sm text-gray-500">{message} from api</p>;
}

function cacheKey(name: string) {
  return `${name}-cache`;
}
