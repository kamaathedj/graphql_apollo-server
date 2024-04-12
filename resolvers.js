const books = [

    {
      title: 'The Awakening',
      author_id: '1',
      id:'1',
      type:'romance'
  
    },
  
    {
      title: 'City of Glass',
       author_id: '2',
       id:'2',
       type:'science'
    },
  
  ];

  const Authors = [{
    id:'1',
    name:'kate chopin'
  },
  {
    id:'2',
    name:'Paul Auster'
  }
]

export const resolvers={
    Query:{
       async books(_,args,{dataSources}, info){
          return await dataSources.booksApi
          //dataSources.getData().then(d =>console.log(data)) 
          //return books;
        },
        bookById(_,args,context,info){
           return books.find(book=>book.id === args.id);
           
        },
        authors(){
          return Authors;
        }

    },
    Book:{
      author(parent){
        return Authors.find(author=>author.id===parent.author_id)
      }
    },
    Mutation:{
      addBook(_,args){
       console.log(books.push(args.bookInput));
       return args.bookInput;
      }
    }
}