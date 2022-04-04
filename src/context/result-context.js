import React, {useEffect, useState, createContext, useContext} from "react";
import Loading from "../components/loading";

const ResultContext = createContext()

const baseUrl = "https://api.github.com/users/"

export  default function ResultProvider ({children}) {
    //states
    const [user, setUser] = useState({})
    const [searchTerm, setSearchTerm] = useState('octocat')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    /**
     *fetches the data from the API and then sets the user state to the data.
     */
    const getUser  = async () => {
        setLoading(true);

        fetch(`${baseUrl}${searchTerm}`)
            .then(response => {
                if(response.ok) {
                    return response.json()
                }
                throw response;
            })
            .then(data => {
                console.log('Data', data)
                setUser(data)
            })
            .catch(err => {
                console.log(err.message)
                setError(err)
            })
            .finally(()=> {
                setLoading(false)
            })
    }





    return (
        <ResultContext.Provider value={{getUser, loading, searchTerm, error, user, setSearchTerm}}>
            {children}
        </ResultContext.Provider>
    )
}

export const useResultContext=()=>useContext(ResultContext)