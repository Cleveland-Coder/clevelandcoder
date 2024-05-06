import { Job, School } from '../types/resume.interface';

interface ResumeSectionProps {
  title: 'Experience' | 'Education';
  jobs?: Job[];
  schools?: School[];
}

export default function ResumeSection({ title, jobs }: ResumeSectionProps) {
  return (
    <div>
      <h2 className="font-bold uppercase">{title}</h2>
      {jobs !== undefined &&
        jobs.map(
          ({
            id,
            company_name,
            description,
            experiences,
            job_title,
            location,
            period,
          }) => {
            const title = `${job_title} @ ${company_name}`;
            const labels = ['title', 'period', 'description', 'location'];
            return (
              <div key={id} className="grid md:grid-cols-2 mt-8">
                {[title, period, description, location].map(
                  (content, index) => (
                    <div
                      key={`${id}-${labels[index]}`}
                      className={`text-${index % 0 ? 'left' : 'right'}`}
                    >
                      {content}
                    </div>
                  ),
                )}
              </div>
            );
          },
        )}
    </div>
  );
}
