//authorization
function getTwitchAuthorization() {
    const twitchCode = params.get('code');
    let url = `https://id.twitch.tv/oauth2/token?&client_id=${clinetId}&client_secret=${clinetSecret}&code=${twitchCode}&grant_type=client_credentials&redirect_uri=http://localhost:5500`;
    return fetch(url, {
    method: "POST",
    })
    .then((res) => res.json())
    .then((data) => {
        return data;
    });
}

const params = new URLSearchParams(window.location.search);
const twitchCode = params.get('code');
const clinetId = '9wi5buthub8vb69nho94sn8s2bhewo';
const clinetSecret = 'eenrjyanheas8qkihkfblw5dnzfqrb'

async function getAuth() {
    const endpoint = "https://api.twitch.tv/helix/users"
    let authorizationObject = await getTwitchAuthorization();
    let { access_token, expires_in, token_type } = authorizationObject;

    token_type =
    token_type.substring(0, 1).toUpperCase() +
    token_type.substring(1, token_type.length);

    let authorization = `Bearer ${access_token}`;

    let headers = {
        "Authorization": authorization,
        "Client-Id": clinetId
    };
console.log(authorization, clinetId, twitchCode, authorizationObject)
    return fetch(endpoint, {
        headers,
        })

}

// function renderStreams(data) {
//     console.log(`${JSON.stringify(data)}`);
// }

// console.log(getAuth())

        /* Streamlabs Authentication */

const clientid = "xrp8JoIpJYfnOnZeO9mkCOW4DGR7Woo2EHOgeRA8"
const redirect = "http://localhost:5500/navbar/streamlabs.html"

//UNCOMMENT BELOW FOR API FUNCTIONALITY --- COMMENT OUT NEXT DOCUMENT.GETELEMENT FUNCTION
// document.getElementById('saveSetBtn').onclick = function () {
//     location.href = `https://streamlabs.com/api/v1.0/authorize?response_type=code&client_id=${clientid}&redirect_uri=${redirect}&scope=socket.token%20donations.read`;
// }

document.getElementById('socketToken').onclick = function () {
    window.open(`https://streamlabs.com/dashboard#/settings/api-settings`);
}


const streamlabsParams = new URLSearchParams(window.location.search);
const streamlabsCode = streamlabsParams.get('code');



const authcode = streamlabsCode
const clientsecret = "5le3NUvBX8Hnz7hZ2ZlpL1TqjXVuO7EFNHBCgADm"

const token = fetch('https://streamlabs.com/api/v1.0/token', {
    'method': "POST",
    'body': `grant_type=authorization_code&client_id=${clientid}&client_secret=${clientsecret}&redirect_uri=${redirect}&code=${authcode}`
})
console.log(token)

// https://dev.streamlabs.com/reference/sockettoken
    // const accesstoken = token.access_token

    // const sdk = require('api')('@streamlabs-api/v1.0#fxprd23l2avij0q');

    // sdk.sockettoken({access_token: accesstoken})
    //   .then(res => console.log(res))
    //   .catch(err => console.error(err));

