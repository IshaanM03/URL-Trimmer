import mongoose from 'mongoose';
import URL from '../models/URL';
import shortid from 'shortid';
import validator from 'validator';
export const getUserUrls = (req, res) => {

};

function isValidUrl(urlString) {
  return validator.isURL(urlString, {
    protocols: ['http','https'], 
    require_protocol: true,      
  });
}


//get originalURL from req.body, check if its valid url, if valid: genereate unique shortid, find user from jwt token (req.user is decoded jwt)
export const createUrl = async (req, res) => {
    try {
        const {originalURL} = req.body;
        const shortLink = shortid.generate();
        if(!isValidUrl(originalURL)) return res.status(400).json({error: "Invalid URL."});
    
        const newURL = await URL.create({
            originalURL,
            shortURL: shortLink,
            user: req.user._id,
        });
        res.status(201).json(newURL) 
    } catch (error) {
        console.log("Error creating URL: ", error);
        res.status(400).json({error: "Server error"});
    }
};

export const redirectURL = (req, res) => {
    
};

export const updateUrl = (req, res) => {

};

export const deleteUrl = (req, res) => {

};

