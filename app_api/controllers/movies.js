const mongoose = require('mongoose');
const Movie = mongoose.model('Movie');


const getMovie = function (req,res){
  Movie.find()
    .exec(function(err,moviedata){
        if(err)
          {
          res
          .status(404)
        .json(err);
              return;
          
          }     
    res
    .status(200)
    .json(moviedata);
    });
};
const createMovie = function (req,res){
     Movie
    .create({
        name: req.body.name,
        type: req.body.type
    },(err, moviedata) => {
        
        if(err){
            res
            .status(400)
            .json(err);
        }
        else{
            res
            .status(201)
            .json(moviedata);
        }
    });
   
};


const getSingleMovie = function (req,res){
     if(req.params &&
       req.params.movieid)
    {
        Movie
        .findById(req.params.movieid)
        .exec(function(err,moviedata){
            
           if(!moviedata){
               res
               .status(404)
               .json({"message": "MovieID Not Found!"});
               return;
           }
            
            else if(err){
                 res
               .status(404)
               .json(err);
               return;
                
            }
           res
         .status(200)
        .json(moviedata);  
        });
    } 
    else{
        res
        .status(404)
        .json({"message": "No MovieID passed in request!"});
    }   
};

const updateMovie = function (req,res){
     if(!req.params.movieid){
        res
        .status(404)
        .json({"message": "No movieid is passed!"});
        return;     
    }
    Movie
    .findById(req.params.movieid)
    .exec(function (err, moviedata) {
        if(!moviedata)
            {
                res
                .status(404)
                .json({"message": "This movieid is not found!"});
            }
        else if(err){
            res
            .status(404)
            .json(err);
            return;
        }
        
        moviedata.name = req.body.name;
        moviedata.type = req.body.type;
        
        moviedata.save((err,moviedata) => {
            if(err)
            {
                res
                .status(404)
                .json(err);
                return;
            }
            else{
                res
                .status(200)
                .json(moviedata);
            }
        });
    });
};
const deleteMovie = function (req,res){
    const movieid = req.params.movieid;
    if(movieid)
        {
            Movie
            .findByIdAndRemove(movieid)
            .exec((err, moviedata) => {
                if(err)
                    {
                        res
                        .status(404)
                        .json(err);
                        return;
                    }
                res
                .status(204)
                .json({"message": "The data was successfully deleted!"});
            });
        }
    else
        {
            res 
            .status(404)
            .json({"message": "No movieid"});
        }
    
    
    
};


module.exports = {
    getMovie,createMovie,getSingleMovie, updateMovie, deleteMovie 
};