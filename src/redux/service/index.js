export function GetDataFromServer(apiPath, reqMethod, formBody){
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    if(!reqMethod && reqMethod !== "POST"){
        return fetch(apiPath, {method:"GET", headers:myHeaders});
    } else{
        if(formBody){
            let fetchData = {
                method:"POST",
                body: JSON.stringify(formBody),
                headers:myHeaders
            }
            return fetch(apiPath, fetchData)
        }
    }
}

export function GetDataFromServerToPost(apiPath, reqMethod, formBody) {
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    if(formBody){
        let fetchData = {
            method:reqMethod,
            body:formBody,
            headers:myHeaders
        };
        return fetch(apiPath, fetchData);
    }
}

export function deletePost(apiPath){
    let myHeaders = new Headers();
    myHeaders.append("Content-type", "application/json");
    return fetch(apiPath, {
        method: "DELETE",
        headers:myHeaders
    }).then(res => res.json());
}