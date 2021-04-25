let mainUrl = "http://127.0.0.1:5100/";
export default{ 
    
    
    async getDataFromApi(url) {
        try {
            const response = await fetch(mainUrl+url,
                {headers:{"Access-Control-Allow-Origin":"*"}});
            const json = await response.json();
            return json;
        } catch (error) {
            console.error("wrapper error: "+error);
            return error;
        }
    },


}