var carbon = require('carbon-io')
var __  = carbon.fibers.__(module)
var _o  = carbon.bond._o(module)
var o   = carbon.atom.o(module).main

/**************************************************************************
 * TodoService
 */
__(function() {
  module.exports = o({

    /**********************************************************************
     * _type
     */
    _type: carbon.carbond.Service,
    
    /**********************************************************************
     * description
     */        
    description: "A public API for managing Todos",
    
    /**********************************************************************
     * port
     */
    port: process.env.PORT || 9900,
    
    /**********************************************************************
     * dbUri
     */
    dbUri: _o(process.env.MONGOLAB_URI) || 'mongodb://localhost:27017/todos',

    /**********************************************************************
     * endpoints
     */
    endpoints : {
      todos: o({
        _type: carbon.carbond.mongodb.MongoDBCollection,

        /****************************************************************************************************************
         * collection
         *
         * The name of the MongoDB collection storing Todos.
         */
        collection: 'todos',

        /****************************************************************************************************************
         * schema
         *
         * This is the schema for Todo objects handled by this Endpoint.
         */
        schema: {
          type: "object",
          properties: {
            _id: { type: 'string' },
            title: { type: 'string' },
            order: { type: 'int' },
            completed: { type: 'boolean', default: false },
            url: { type: 'string' }
          },
          required: [ '_id' ],
          additionalProperties: false
        },

        /****************************************************************************************************************
         * enabled
         */
         enabled: {
          '*': true
        }
      })
    }
  })
})
