export default {
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    {
      name: "title",
      type: "string",
      title: "Category name",
      validation: (Role) => Role.required(),
    },
    {
      name: "image",
      type: "image",
      title: "Image of Category",
    },
  ],
}
