export default {
    name: "featured",
    title: "Featured Categories",
    type: "document",
    fields: [
        {
            name: "title",
            type: "string",
            title: "Featured Category Name",
            validation: (Role) => Role.required(),
        },
        {
            name: "short_description",
            type: "string",
            title: "Short Description",
            validation: (Role) => Role.required(),
        },
        {
            name: "restaurants",
            type: "array",
            title: "Restaurants",
            of: [{type: "reference", to: [{type: "restaurant"}]}],
        },
    ]
}