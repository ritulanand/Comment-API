export const authmiddleware = (req, res, next) => {
    if (req.body.role !== "Client") {
        return res.status(403).json({ message: "Only clients are allowed to add comments." });
    }
    next();
};