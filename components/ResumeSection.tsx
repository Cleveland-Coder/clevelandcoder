import { Job, School } from '../types/resume.interface';

interface ResumeSectionProps {
  title: 'Experience' | 'Education';
  jobs?: Job[];
  schools?: School[];
}

export default function ResumeSection({
  title,
  jobs,
  schools,
}: ResumeSectionProps) {
  return (
    <div className="mt-12">
      <h2 className="font-bold uppercase">{title}</h2>
      {jobs !== undefined &&
        jobs.map((job) => <ResumeItem key={job.id} item={job} />)}
      {schools !== undefined &&
        schools.map((school) => <ResumeItem key={school.id} item={school} />)}
    </div>
  );
}

function ResumeItem({ item }: { item: Job | School }) {
  return (
    <div className="mt-8">
      <MetaList {...item} />
      <ul className="list-disc pl-4">
        {isJob(item) &&
          (item as Job).experiences.map((experience, index) => (
            <li key={index} className="mt-2">
              {experience}
            </li>
          ))}
      </ul>
    </div>
  );
}

function MetaList(item: Job | School) {
  function getTitle() {
    if (isJob(item)) {
      return `${item.job_title} @ ${item.company_name}`;
    } else {
      return item.degree;
    }
  }

  const metaKeys = isJob(item)
    ? ['period', 'description', 'location']
    : ['grad_date', 'institution', 'location'];

  return (
    <div key={item.id} className="grid gap-x-4 md:grid-cols-4 mt-8">
      <div className="md:col-span-3 font-bold">{getTitle()}</div>
      {metaKeys.map((key, index) => {
        let className =
          index % 2 === 0
            ? 'md:col-span-1 md:text-right'
            : 'md:col-span-3 md:text-left';
        if (index === 0) className += ' font-bold';
        return (
          <div key={key} {...{ className }}>
            {isJob(item)
              ? (item as Job)[key as keyof Job]
              : (item as School)[key as keyof School]}
          </div>
        );
      })}
    </div>
  );
}

function isJob(item: Job | School): item is Job {
  return 'job_title' in item;
}
