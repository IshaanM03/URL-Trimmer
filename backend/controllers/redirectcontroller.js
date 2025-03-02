import URL from "../models/URL.js";


export const redirectURL = async (req, res) => {
    try {
        const {shortURL} = req.params;
        const urlFind = await URL.findOne({shortURL});
        if(!urlFind) return res.status(400).json({error: "URL cannot be found"});
        urlFind.clicks++
        await urlFind.save();
        return res.redirect(urlFind.originalURL);
    } catch (error) {
        console.log("There was an error redirecting: ", error);
        res.status(500).json({error: "Server error."});
    }
};