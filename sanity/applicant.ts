export default {
    name: 'application',
    title: 'Application',
    type: 'document',
    fields: [
      {
        name: 'firstName',
        title: 'First Name',
        type: 'string',
      },
      {
        name: 'lastName',
        title: 'Last Name',
        type: 'string',
      },
      {
        name: 'phone',
        title: 'Phone',
        type: 'string',
      },
      {
        name: 'address',
        title: 'Address',
        type: 'string',
      },
      {
        name: 'city',
        title: 'City',
        type: 'string',
      },
      {
        name: 'state',
        title: 'State',
        type: 'string',
      },
      {
        name: 'email',
        title: 'Email',
        type: 'string',
      },
      {
        name: 'codingExperience',
        title: 'Coding Experience',
        type: 'string',
      },
      {
        name: 'careerPath',
        title: 'Career Path',
        type: 'string',
      },
      {
        name: 'goals',
        title: 'Goals',
        type: 'string',
      },
      {
        name: 'interviewTime',
        title: 'Interview Time',
        type: 'array',
        of: [{ type: 'string' }],
      },
    ],
  };