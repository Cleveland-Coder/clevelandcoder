import yaml from 'js-yaml';
import fs from 'fs';

import { Résumé } from '../types/résumé.interface';

let résumé = {} as Résumé;

try {
  résumé = yaml.load(fs.readFileSync('./data/résumé.yml', 'utf8')) as Résumé;
  console.log(résumé);
} catch (e) {
  console.log(e);
}

export default function Home() {
  const { email, name, occupation } = résumé;
  return (
    <>
      <header className="flex flex-col mt-12 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold">{name}</h1>
        <h2 className="mt-4 text-xl">{occupation}</h2>
        <div className="mt-2">
          <a className="focus:underline hover:underline" href={`mailto:${email}`}>{email}</a>
        </div>
      </header>
      <main></main>
    </>
  );
}
