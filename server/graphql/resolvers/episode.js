'use strict';

const axios = require('axios');

const EpisodesController = {

    index: (args) => {

        const URL = `https://gist.githubusercontent.com/thekiwi/ab70294c8d7ab790d9b6d70df9d3d145/raw/14513c7b841b37b2406dda4d3b9143a25700a68e/silicon-valley.json`;

        return axios.get(URL)
            .then((response) => {
                if(!args.season) return response.data._embedded.episodes;
                return response.data._embedded.episodes.reduce((season,episode)=>{
                    if(episode.season===args.season) season.push(episode)
                    return season
                },[])
            })
            .catch((error) => {
                return {
                    error: error
                }
            });

    }


}

module.exports = EpisodesController;