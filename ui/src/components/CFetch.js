export function fetchData(params, url) {
    return fetch(url, {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-type': 'applocation/x-www-form-urlencoded; charset=UTF-8'
        },
        body: JSON.stringify(params),
        mode: 'cors'
    }).then((response) => {
        var contentType = response.headers.get('content-type');
        console.log('123123:', contentType);
        if (contentType && contentType.includes('application/json')) {
            return response.json().then(json => {
                if (!response.ok) {
                    return Promise.reject(json);
                }
                return json;
            });
        }
    });
}