import mongoose from 'mongoose';
import URL from '../models/URL.js';
import shortid from 'shortid';
import validator from 'validator';

function isValidUrl(urlString) {
    return validator.isURL(urlString, {
      protocols: ['http','https'], 
      require_protocol: true,      
    });
  }


export const getUserUrls = async (req, res) => {
    try {
      const userURLs = await URL.find({ user: req.user.id });
      res.status(200).json({ userURLs });
    } catch (error) {
      console.log("There was an error: ", error);
      res.status(500).json({ error: "Server error" });
    }
  };
//get originalURL from req.body, check if its valid url, if valid: genereate unique shortid, find user from jwt token (req.user is decoded jwt)
export const createUrl = async (req, res) => {
    try {
        const {originalURL} = req.body;
        const shortLink = shortid.generate();
        if(!isValidUrl(originalURL)) return res.status(400).json({error: "Invalid URL."});
    
        const newURL = await URL.create({
            originalURL,
            shortURL: shortLink,
            user: req.user.id,
        });
        res.status(201).json(newURL) 
    } catch (error) {
        console.log("Error creating URL: ", error);
        res.status(500).json({error: "Server error"});
    }
};


export const deleteUrl = async (req, res) => {
    try {
        const {id} = req.params;
        const deleteURL = await URL.findOneAndDelete({shortURL: id, user: req.user.id})
        if(!deleteURL) return res.status(404).json({error: "URL not found or authorisation error"});
        res.status(200).json({message: "URL deleted successfully"});
    } catch (error) {
        console.log("Error deleting URL: ", error);
        res.status(500).json({error: "Server Error."});
    }
};

