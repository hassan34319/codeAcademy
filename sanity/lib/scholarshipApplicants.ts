export default {
    name: 'scholarship',
    type: 'document',
      title: 'Scholarship Applicant Information',
    fields: [
      {
        name: 'type',
        type: 'string',
        title: 'Type Of Scholarship'
      },
      {
        name: 'name',
        type: 'string',
        title: 'name'
      },
      {
        name: 'phone',
        type: 'string',
        title: 'Phone'
      },
      {
        name: 'age',
        type: 'string',
        title: '18 Years Or older?'
      },
      {
        name: 'graduate',
        type: 'string',
        title: 'Are you a high School graduate or have a GED?'
      },
      {
        name: 'email',
        type: 'string',
        title: 'Email'
      },
      {
        name: 'address',
        type: 'string',
        title: 'Address'
      },
      {
        name: 'essay',
        type: 'string',
        title: 'Write a 500 word essay of the importance attending code school adds to your life and the purpose of applying for your specific scholarship.'
      },
    ]
  }