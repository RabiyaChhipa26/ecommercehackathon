import { defineField, defineType } from "sanity";

export default defineType({
    name: "products",                    //used for fetching sanity data(accessing)
    type: "document",
    title: "Products",                   //used in sanity schema Title
    fields: [
        defineField({
            name: "image",
            title: "Image",
            type: "image",
        }),
        defineField({
            name: "title",
            type: "string",
            title: "Title",
        }),
        defineField({
            name: "slug",
            type: "slug",
            title: "Slug",
            options: {
                source: "title",
                maxLength: 50,
            },
        }),
        defineField({
            name: "description",
            type: "text",
            title: "Description",
        }),
        defineField({
            name: "price",
            type: "number",
            title: "Price",
        }),
        defineField({
            name: "category",
            type: "string",
            title: "Category",
            options: {
                list: [
                    { title: "Female", value: "female" },
                    { title: "Male", value: "male" },
                    { title: "Kids", value: "kids" },
                ],
            },
        }),
        defineField({
            name: "subcategory",
            type: "string",
            title: "subCategory",
        }),
        defineField({
            name: 'quantity',
            type: 'number',
            title: 'Quantity'
        }),
        defineField({
            name: 'size',
            type: 'array',
            title: 'Sizes',
            of: [{ type: 'string' }]
        }),
    ],
});