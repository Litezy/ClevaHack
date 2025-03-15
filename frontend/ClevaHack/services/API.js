import axios from 'axios'

const URL = import.meta.env.LIVE_SERVER_URL
const CookieName = 'synclearncookie'

const api = `v1/`

export const usersUrl = {
    // this means the endpoint would be URL/v1/sign_up
    sign_up: api + 'sign_up'
}

export const Apis = {
    user:usersUrl
}

// Use for Non Auth Get requests
export const ClientGetApi = async (endpoint) => {
    const response = await axios.get(`${URL}/${endpoint}`)
    return response.data
}


//Use for Non-auth Post requests
export const ClientPostApi = async (endpoint, data) => {
    const response = await axios.post(`${URL}/${endpoint}`, data)
    return response.data
}


//Use for authenticated get requests
export const GetApi = async (endpoint) => {
    const getCookie = Cookies.get(CookieName)
    const response = await axios.get(`${URL}/${endpoint}`, {
        headers: {
            Authorization: `Bearer ${getCookie}`
        }
    })
    return response.data
}

//Use for Authenticated Post requests
export const PostApi = async (endpoint, data) => {
    const token = Cookies.get(CookieName)
    const response = await axios.post(`${URL}/${endpoint}`, data, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    return response.data
}

// example of how to use this apis
// lets say u want to signup a user
const signupUser = async ()=>{
    const formdata = {
        email: 'myname@getMaxListeners.com',
        full_name:'bethel Nnadi'
    }
    //loading true
    try {
        const res = PostApi(Apis.user.sign_up,formdata)
        if(res.status !== 200) throw new Error //use ur customized error message package to extract the specific message by saying ` return ErroAlert(res.msg) so u will know the error
        
        //here the sign up is successful, then u take them back to login page to actually login
    } catch (error) {
        
    }finally{
        //loading false
    }
}


//code for successful account creation  is 201
//other successful codes are 200