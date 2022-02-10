

exports.postAddUser=async(req,res)=>{
    console.log(req.body);
    try{
        if(req.body.fail == 1){
            res.status(400)
            res.json("Fail");
        }else{
            res.status(201)
            res.json("Success");
        }
    }catch(err){
        console.log(err);
        res.status(404)
        res.json({message: err.message});
    }
    res.end();
}



exports.getUsers=async(req,res)=>{
    try{
        if(req.query.fail == 1){
            res.status(400)
            res.json("Fail");
        }else{
            res.status(200)
            res.json("Success");
        }
    }catch(err){
        console.log(err);
        res.status(404)
        res.json({message: err.message});
    }
    res.end();
}


exports.getUser=async(req,res)=>{
    try{
        res.status(200)
        res.json("Bienw");
    }catch(err){
        console.log(err);
        res.status(404)
        res.json({message: err.message});
    }
    res.end();
}

exports.getAuth=async(req,res)=>{
    try{
        if(req.query.fail == 1){
            res.status(400)
            res.json("Fail");
        }else{
            res.status(200)
            res.json({
                'data2':{
                    'token': 'MTC590123'
                }
            });
        }
    }catch(err){
        console.log(err);
        res.status(404)
        res.json({message: err.message});
    }
    res.end();
}