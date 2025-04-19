import {useContext} from "react";
import {AppContext} from "../context.js";
import {useRequestGet} from "../components/UseRequestGet.jsx";

export const Home = () => {
    const {store} = useContext(AppContext)

    // Custom hook - GET
    const {isLoading} = useRequestGet()

    return (
        <>
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <div>
                    <ul>
                        {store.map(({id, firstName, lastName}) => (
                            <li key={id}>Name: {firstName}, Last Name: {lastName}</li>
                        ))}
                    </ul>
                </div>
            )}
        </>
    )
}