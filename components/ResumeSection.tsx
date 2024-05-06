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
      {jobs !== undefined && jobs.map(ResumeItem)}
      {schools !== undefined && schools.map(ResumeItem)}
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
    <div key={experience.id} className="grid md:grid-cols-2 mt-8">
      <div className="font-bold">{getTitle()}</div>
      {metaKeys.map((key, index) => {
        let className = index % 2 === 0 ? 'md:col-span-1/4' : 'md:col-span-3/4';
        if (index === 0) className += ' font-bold';
        return (
          <div {...{ className, key }}>
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

function ResumeItem(item: Job | School) {
  return (
    <div className="mt-8">
      <MetaList {...item} />
    </div>
  );
}
