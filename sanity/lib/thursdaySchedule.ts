export default {
    name: 'thursdaySchedule',
    type: 'document',
      title: 'Thursday Schedule',
    fields: [
        {
            name: 'timeSlots',
            title: 'Time Slots',
            type: 'array',
            of: [{ type: 'timeSlot' }],
          },
    ]
  }