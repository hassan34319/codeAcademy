export default {
    name: 'tuesdaySchedule',
    type: 'document',
      title: 'Tuesday Schedule',
    fields: [
        {
            name: 'timeSlots',
            title: 'Time Slots',
            type: 'array',
            of: [{ type: 'timeSlot' }],
          },
    ]
  }