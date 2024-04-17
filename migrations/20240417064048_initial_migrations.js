import {addDefaultColumns} from '../utils/db_utils'
import {book} from '../utils/constants'
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async(knex)=> {
    await Promise.all([
        knex.schema.createTable(book,(table)=>{
            table.increments().notNullable();
            table.string('title',254).notNullable();
            addDefaultColumns(table);


        })
    ])
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async(knex)=> {
    await Promise.all([
    'books'
    ].map((table)=>knex.schema.dropTableIfExists(table))
    )
  
};
