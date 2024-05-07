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
    </div>
  );
}

function MetaList(experience: Job | School) {
  function getTitle() {
    if (isJob(experience)) {
      return `${experience.job_title} @ ${experience.company_name}`;
    } else {
      return experience.degree;
    }
  }

  const metaKeys = isJob(experience)
    ? ['period', 'description', 'location']
    : ['grad_date', 'institution', 'location'];

  return (
    <div key={experience.id} className="grid gap-x-4 md:grid-cols-4 mt-8">
      <div className="md:col-span-3 font-bold">{getTitle()}</div>
      {metaKeys.map((key, index) => {
        let className = index % 2 === 0 ? 'md:col-span-1' : 'md:col-span-3';
        if (index === 0) className += ' font-bold';
        return (
          <div key={key} {...{ className }}>
            {isJob(experience)
              ? (experience as Job)[key as keyof Job]
              : (experience as School)[key as keyof School]}
          </div>
        );
      })}
    </div>
  );

  function isJob(experience: Job | School): experience is Job {
    return 'job_title' in experience;
  }
}
