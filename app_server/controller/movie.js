const request = require('request');
const apioptions = {
    server : 'http://localhost:3000'
}; 

const _renderHomePage = function(req,res,responseBody){
    res.render('list-display',{movies:responseBody});
};

const _renderDetailPage = function(req,res,responseBody){
    res.render('movie-detail',{currentMovie:responseBody});
};

const _renderCreatePage = function(req,res){
    res.render('create' , {
        title:"Create New Movie"
    });
};
const addNewMovie = function(req,res){
    _renderCreatePage(req,res);
};
const doAddNewMovie = function(req,res){
    const path = '/api/movies';
    const postdata = {
        name: req.body.name,
        type: req.body.type
    };
    const requestOptions = {
        url: apioptions.server+path,
        method:'POST',
        json: postdata
    };
    request(
    requestOptions,
    (err, response, body)=> {
        if (response.statusCode === 201){
            res.redirect('/');
        }
    } 
);
};

const movielist = function(req,res){
    const path='/api/movies/';
    const requestOptions = {
       url: apioptions.server + path,
        method:'GET',
        json:{}
    };
    request(requestOptions, (err,response,body) =>
           {
            _renderHomePage(req,res,body);
            });
};
const movieDetail = function(req,res){
    const path=`/api/movies/${req.params.movieid}`;
    const requestOptions = {
       url: apioptions.server + path,
        method:'GET',
        json:{}
    };
request(requestOptions, (err,response,body) =>
           {
            _renderDetailPage(req,res,body);
            });
};  
module.exports = {
    movielist,
    movieDetail,
    addNewMovie,
    doAddNewMovie 
};




























