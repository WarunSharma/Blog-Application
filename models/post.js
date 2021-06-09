const mongoose = require('mongoose');

const postSchema = new mongoose.schema({
    title:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    }
},{
    timestamps:true
})

const Post = mongoose.model('Post',postSchema);

module.exports = Post;