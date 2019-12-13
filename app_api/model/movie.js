const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        minlength:3
    },
    type:{
    type: String,
    required: true
}
   /* collection:{
    type:Number,
    required:true
},*/
                                        
   //  reviews: [movieReviewSchema]
});
/* const movieReviewSchema = new mongoose.Schema({
    authorName:{
        type: String,
        required: true,
        minlength:10
    },
    reviewMessage:{
    type: String,
    required: true
},
    rating:
    {
    type:Number, 
    required:true,
    min:1,
    max:5
    }
}); */

mongoose.model('Movie',movieSchema);