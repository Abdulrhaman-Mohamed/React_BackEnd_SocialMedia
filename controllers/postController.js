const postSchema = require("../models/postSchema");



const getPostById = async (req,res)=>{
    const {id} = req.params
    try {
        const post = await postSchema.findById(id).populate("user","_id");
        if(post) return res.status(200).json({post})

        return res.status(404).json({message: "NOT FOUND"})
    } catch (error) {
        
    }
    return res.json({Ok:"OK"})
}


const addPost= async(req,res)=>{

    const {description , payload ,user} = req.body;
    try {
        const post = postSchema.create({description,payload,user})
        return res.status(201).json({Message:"CREATED"})
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: error });
    }


}


const getPosts= async(req,res)=>{
    const {page} = req.query
    try {
        if(page){
            const posts= await postSchema.find({},"-__v").sort({createdDate:"desc"}).populate("user","_id username personalImage").skip((page-1)*10).limit(10)
            // console.log(posts);
            return res.status(200).json(posts)
        }

        return res.status(400).json({Message:"BAD REQUEST"})

    } catch (error) {
        console.log(error);
        return res.status(500).json({Message:error})
    }
}


const updatePost=async(req,res)=>{
    const {id} = req.params
    // console.log(id);
    try {
        // const post = await postSchema.findById(id);

        // if(!post) return res.status(404).json({Message:"NOT FOUND"})

        const postUpdated = await postSchema.findByIdAndUpdate(id,req.body)
        if(!postUpdated) return res.status(404).json({Message:"NOT FOUND"})

        return res.status(200).json({Message:"UPDATED SUCCESSFULLY"})

    } catch (error) {
        console.log(error);
        return res.status(500).json({Message:error})
    }
}

const deletelPost = async(req, res)=>{
    const {id} = req.params
    try {
        const postDeleted = await postSchema.findByIdAndDelete(id);
        if(!postDeleted) return res.status(404).json({Message:"NOT FOUND"})

        return res.status(200).json({Message:"UPDATED SUCCESSFULLY"})
    } catch (error) {
        
    }
}

module.exports ={
    getPostById,
    addPost,
    getPosts,
    updatePost,
    deletelPost
}

