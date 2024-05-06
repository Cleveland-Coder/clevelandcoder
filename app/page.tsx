import yaml from 'js-yaml';
import fs from 'fs';

import { Resume } from '../types/resume.interface';

import ResumeSection from '../components/ResumeSection';

let resume = {} as Resume;

try {
  resume = yaml.load(fs.readFileSync('./data/resume.yml', 'utf8')) as Resume;
  console.log(resume);
} catch (e) {
  console.log(e);
}

export default function Home() {
  const { email, name, occupation, sections } = resume;
  return (
    <>
      <header className="flex flex-col mt-12 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold">{name}</h1>
        <div className="mt-4 text-xl">{occupation}</div>
        <div className="mt-2">
          <a
            className="focus:underline hover:underline"
            href={`mailto:${email}`}
          >
            {email}
          </a>
        </div>
      </header>
      <main className="max-w-1440 px-4 mx-auto">
        {sections.map(({ title }) => (
          <div className="mt-12">
            <ResumeSection {...{ title }} />
          </div>
        ))}
      </main>
    </>
  );
}
