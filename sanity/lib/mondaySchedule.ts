export default {
    name: 'mondaySchedule',
    type: 'document',
      title: 'Monday Schedule',
    fields: [
        {
            name: 'timeSlots',
            title: 'Time Slots',
            type: 'array',
            of: [{ type: 'timeSlot' }],
          },
    ]
  }