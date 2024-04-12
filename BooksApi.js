import {SQLDataSource} from 'datasource-sql'

class BooksApi extends SQLDataSource{

    GetAllBooks(){
        const data =  this.knex
        .select('*')
        .from('book')
        .returning('*')
        return data.then(data=>data)
    }
    getBookById(id){
        const data = this.knex.select('*')
        .from('book')
        .where('id' == id).returning('*')
    }

}

export default BooksApi;