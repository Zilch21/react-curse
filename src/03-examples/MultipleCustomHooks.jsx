import { useCounter, useFetch } from "../hooks";
import { LoadingQuote } from "./LoadingQuote";
import { Quote } from "./Quote";


export const MultipleCustomHooks = () => {

    const {counter, increment} = useCounter (1)

    const { data, isLoading, hasError } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    console.log({ data, isLoading, hasError })
    const {author, quote} = !!data && data[0];

    return (
        <>
            <h1> Braking bad quotes</h1>
            <hr />
            {
                isLoading ? 
                    <LoadingQuote/>
                    : <Quote quote = { quote } author = { author }  />
                    
            }

            <button 
            className="btn btn-primary" 
            onClick={ () => increment(1)}
            disabled= {isLoading}>
                Next quote {counter}
            </button>

        </>
    )
}

