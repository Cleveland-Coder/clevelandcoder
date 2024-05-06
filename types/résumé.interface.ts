export interface Résumé {
  name: string;
  occupation: string;
  email: string;
  sections: [
    {
      title: 'Experience';
      jobs: Job[];
    },
    {
      title: 'Education';
      jobs: Job[];
    },
  ];
}

export interface Job {
  job_title: string;
  company: string;
  location: string;
  date: string;
  experiences: string[];
}
