export default {
    name: 'wednesdaySchedule',
    type: 'document',
      title: 'Wednesday Schedule',
    fields: [
        {
            name: 'timeSlots',
            title: 'Time Slots',
            type: 'array',
            of: [{ type: 'timeSlot' }],
          },
    ]
  }