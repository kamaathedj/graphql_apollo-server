export const  typedefs = `#graphql
type Book {
id:ID!
title: String!
author: Author!
type:bookType
}

type Author{
    id:ID!
    name:String!
}
input Author_input{
    id:ID!
    name:String!
}
enum bookType{
    science, romance
}

input book{
    id:ID!
    title: String!
    author:Author_input
    booktype:bookType!
}

type Query {
books: [Book]
bookById(id: ID!):Book
authors:[Author]
},

type Mutation{
 addBook(bookInput:book) :Book   
}
`