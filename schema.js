export const  typedefs = `#graphql
type Book {
id:ID!
title: String!
author: String!
type:bookType
}

enum bookType{
    science, romance
}

input book{
    id:ID!
    title: String!
    author:string!
    booktype:bookType!
}

type Query {
books: [Book]
bookById(id: ID!):Book
}

type Mutation{
 addBook(bookInput:book) :Book   
}
`