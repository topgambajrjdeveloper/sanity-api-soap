// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    {
      name: 'author',
      type: 'document',
      title: 'Author',
      fields: [
        {
          name: 'name',
          title: 'Name',
          type: 'string'
        },
        {
          name: 'avatar',
          title: 'Avatar',
          type: 'image'
        },
        {
          name: 'description',
          title: 'Description',
          type: 'text'
        }
      ]
    },
    {      
      name: 'blog',
      type: 'document',
      title: 'Blog',
      fields: [
        {
          name: 'title',
          type: 'string',
          title: 'Title'
        },
        {
          name: 'subtitle',
          type: 'string',
          title: 'Subtitle'
        },   
        {
          name: 'category',
          type: 'string',
          title: 'Category'
        }, 
        {
          name: 'coverImage',
          title: 'Cover Image',
          type: 'image',
          options: {
            hotspot: true
          },
          validation: Rule => Rule.required()
        },
        {
          name: 'content',
          title: 'Content',
          type: 'array',
          of: [
            {
              type: 'block'
            },
            {
              type: 'image',
              fields: [
                {
                  type: 'text',
                  name: 'alt',
                  title: 'Description',
                  options: {
                    isHighlighted: true
                  },
                },
              ],
              options: {
                hotspot: true
              }
            },
          ],
        },
        {
          name: 'date',
          title: 'Date',
          type: 'datetime',
          validation: Rule => Rule.required()        
        },
        {
          name: 'slug',
          type: 'slug',
          title: 'Slug',
          options: {
            source: 'title',
            maxLength: 90,
          },
          validation: Rule => Rule.required()
        },
        {
          name: 'price',
          type: 'number',
          title: 'price',
          validation: Rule => Rule.required()
        },
        {
          name: 'gramos',
          type: 'string',
          title: 'Gramos',
          validation: Rule => Rule.required()
        },
        {
          name: 'inci',
          type: 'string',
          title: 'INCI',
          validation: Rule => Rule.required()
        },
        {
          name: 'author',
          title: 'Author',
          type: 'reference',
          to: [{ type: 'author' }],
          validation: Rule => Rule.required()
        },
      ]
    },
  ])
})