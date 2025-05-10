export const authmiddlware = (req, res, next) => {
    if(req.body.includes("Admin")){
        return;
    }else{
        next();
    }
}