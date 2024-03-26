const books = [

    {
      title: 'The Awakening',
      author: 'Kate Chopin',
      id:1
  
    },
  
    {
      title: 'City of Glass',
       author: 'Paul Auster',
       id:2
    },
  
  ];

export const resolvers={
    Query:{
        books:() =>books,
        bookById:(_,args)=>books.find(book=>book.id === args.id)
    }
}