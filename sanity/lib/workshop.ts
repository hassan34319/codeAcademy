export default {
    name: 'workshop',
    type: 'document',
    title: 'Workshop',
    fields: [
      {
        name: 'date',
        type: 'string',
        title: 'Date'
      },
      {
        name: 'image',
        type: 'image',
        title: 'Image'
      },
      {
        name: 'dateTime',
        type: 'string',
        title: 'Date With Time'
      },
      {
        name: 'title',
        type: 'string',
        title: 'Title'
      },
      {
        name: 'slug',
        type: 'slug',
        title: 'Slug',
        options: {
          source: 'title', // Use the 'title' field as the source for the slug
          maxLength: 200,   // Define a maximum length for the slug
        }
      },
      {
        name: 'description',
        type: 'string',
        title: 'Short Description'
      },
      {
        name: 'longDescription',
        type: 'string',
        title: 'Long Description'
      },
      {
        name: 'location',
        type: 'string',
        title: 'Location'
      },
      {
        name: 'price',
        type: 'number',
        title: 'Price'
      },
    ]
  }