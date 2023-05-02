import kv from "@vercel/kv";

export default async function SayHello({ name }: { name: string }) {
  const kvValue = await kv.json.get(kvKey(name), "$");
  if (kvValue) {
    return <p>{kvValue[0].message} from kv</p>;
  }

  const res = await fetch(
    `https://vercel-kv-playground.vercel.app/api/greeting?name=${name}`
  );
  const { message } = await res.json();

  await kv.json.set(kvKey(name), "$", { message });
  return <p>{message} from api</p>;
}

function kvKey(name: string) {
  return `${name}-key`;
}
