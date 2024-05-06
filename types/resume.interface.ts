export interface Resume {
  name: string;
  occupation: string;
  email: string;
  sections: [
    {
      id: 'experience';
      title: 'Experience';
      jobs: Job[];
    },
    {
      id: 'education';
      title: 'Education';
      schools: School[];
    },
  ];
}

export interface Job {
  id: string;
  company_name: string;
  description: string;
  experiences: string[];
  job_title: string;
  location: string;
  period: string;
}

export interface School {
  id: string;
  degree: string;
  experiences: string[];
  grad_date: string;
  institution: string;
  location: string;
}
