interface ResumeSectionProps {
  title: string;
}

export default function ResumeSection({ title }: ResumeSectionProps) {
  return <h2 className="font-bold uppercase">{title}</h2>;
}
