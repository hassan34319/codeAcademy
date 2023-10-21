export default {
    name: 'fridaySchedule',
    type: 'document',
      title: 'Friday Schedule',
    fields: [
        {
            name: 'timeSlots',
            title: 'Time Slots',
            type: 'array',
            of: [{ type: 'timeSlot' }],
          },
    ]
  }