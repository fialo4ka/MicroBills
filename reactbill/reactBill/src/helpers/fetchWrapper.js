let mainUrl = "http://127.0.0.1:5100/";

let token;

function setToken(tkn){
    token = tkn;
}

function getToken(){
    return token;
}  
async function  getDataFromApi(url) {
        if (token == null) {
            return;
        }
        try {
            const response = await fetch(mainUrl+url, 
                {
                    method: 'GET',
                    headers: {
                        'Authorization': 'Bearer ' + token,
                        'Content-Type': 'application/json'
                    }
            });
            const json = await response.json();
            console.log("json");
            console.log(json);
            return json;
        } catch (error) {
            console.error("wrapper error: " + error);
            return;
        }
    };

export { getDataFromApi, setToken, getToken}