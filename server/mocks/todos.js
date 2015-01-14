module.exports = function(app) {
  var express = require('express');
  var todosRouter = express.Router();


  todosRouter.get('/', function(req, res) {
    res.send({
      'todos': [
        {id: 1, title:'Firboard Short Term'},
        {id: 2, title:'Second Short Term'},
        {id: 3, title:'Third Short Term'},
        {id: 4, title:'Fourth Short Term'},
        {id: 5, title:'Firboard Middle Term'},
        {id: 6, title:'Second Middle Term'},
        {id: 7, title:'Third Middle Term'},
        {id: 8, title:'Firboard Long Term'},
        {id: 9, title:'Second Long Term'}        
      ]
    });
  });

  todosRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  todosRouter.get('/:id', function(req, res) {
    res.send({
      'todos': {
        id: req.params.id
      }
    });
  });

  todosRouter.put('/:id', function(req, res) {
    res.send({
      'todos': {
        id: req.params.id
      }
    });
  });

  todosRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/todos', todosRouter);
};
