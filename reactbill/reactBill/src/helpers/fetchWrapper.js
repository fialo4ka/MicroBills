let mainUrl = "http://127.0.0.1:5100/";//
//let mainUrl = "https://petstore.swagger.io/v2/pet/2";
export default{ 
    
    
    async getDataFromApi(url) {
        try {
            const response = await fetch(mainUrl+url);
            const json = await response.json();
            return json;
        } catch (error) {
            console.error("wrapper error: " + error);
            return;
        }
    },


}