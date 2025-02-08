import axios from "axios"

export class AxiosInterceptor {
    //  @ts-expect-error environment variable may be missing 
    private static readonly baseURL: string = process.env.BACKEND_URL;

    public static $get = async (endpoint: string) => {
        const {data} = await axios.get(AxiosInterceptor.baseURL + endpoint)
        return data
    }

    constructor () {
        console.log('baseurl:', AxiosInterceptor.baseURL)
    }
}

new AxiosInterceptor()