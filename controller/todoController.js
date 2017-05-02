let data=[
    {
        question:"Księga wieczysta",
        answers:["Jest","Brak"]
    },
    {
        question: "Obciążenie hipoteczne",
        answers: ["Jest", "Brak"]
    },
    {
        question: "Dokumentacja techniczna",
        answers: [1,2,3,4,5]
    },
    {
        question: "Wpis do rejestru zabytków",
        answers: ["Tak","Nie"]
    }
];

module.exports = function(app){


app.get('/api/data',function(req, res){
    res.json(data);
});

app.post('/post', function(req, res){
  console.log(req.body);
});

app.delete('/:item',function(req, res){
  data = data.filter(function(todo){
     return todo !== req.params.item;
  });
  res.json(data);
});

};
