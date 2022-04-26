export default {
  name: 'banner',
  title: 'Banner',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      }
    },
    {
      name: 'link',
      title: 'Link',
      type: 'url',
      validation: Rule => Rule.uri({
        scheme: ['http', 'https', 'mailto', 'tel']
      }),
    },
    {
      name: 'product',
      title: 'Product',
      type: 'string',
    }, 
    {
      name: 'description',
      title: 'Description',
      type: 'string',
    },
    {
      name: 'smallText',
      title: 'SmallText',
      type: 'string',
    }, 
    {
      name: 'midText',
      title: 'MidText',
      type: 'string',
    },
    {
      name: 'bigText',
      title: 'BigText',
      type: 'string',
    },
    {
      name: 'bigText2',
      title: 'BigText2',
      type: 'string',
    },
    {
      name: 'discount',
      title: 'Discount',
      type: 'string',

    },
    {
      name: 'saleTime',
      title: 'SaleTime',
      type: 'string',
    }
  ]
}