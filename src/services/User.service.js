import axios from 'axios';
class UserService {

    constructor() {
        this.url = "http://localhost:57828/api/user"
    }

    _getHello = (url) => {
        return axios.get(url)
        // .then(
        //     (result) => {

        //         return result.data;
        //     },
        //     (error) => {
        //        return error
        //     }
        // )
        // axios.get(this.url)
        //     .then(res => res.data)

        //     .then(
        //         (result) => {
        //             return result;
        //         },
        //         (error) => {
        //             return error;
        //         }
        //     )


        // .then(res => {
        //   return res.data;
        // })

        // fetch(this.url)
        //     .then(res => res.text())

        //     .then(
        //         (result) => {
        //             return result;
        //         },
        //         (error) => {
        //             return error;
        //         }
        //     )
    }
    // if (error) {
    //     return <div>Error: {error.message}</div>;
    // }
    // else if (!isLoaded) {
    //     return <div>Loading...</div>;
    // }
    // else {
    //     return (
    //         <h1>{tasks}</h1>)
    // }
    // _createReqest = (values, url) => {
    //     return fetch(url, {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(values),
    //     }).then(
    //         (response) => {
    //             if (response.status >= 300 || response.status < 200) {
    //                 const error = new Error();
    //                 error.response = response;
    //                 throw error
    //             }
    //             return response.json()
    //         })
    // }

    // _createGetReqest = (url) => {
    //     fetch(url)
    //         .then(
    //             (response) => {
    //                 if (response.status >= 300 || response.status < 200) {
    //                     const error = new Error();
    //                     error.response = response;
    //                     throw error
    //                 }
    //                 return response.text()
    //             })
    //     return 0;
    // }

    // register = (values) => {
    //     return this._createReqest(values, `${this.url}register`)
    // }
    
    getAll = async () => {
        try {
            let a = await this._getHello(`${this.url}/user`);
            return a.data;
        } catch (error) {
            return error
        }


    }

}
export default new UserService()