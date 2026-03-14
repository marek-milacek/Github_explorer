import { useState } from "react";
import axios from "axios";
import SearchForm from "./components/SearchForm";
import ResultCard from "./components/ResultCard";

const App = () => {
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [inputValue, setInputValue] = useState("");

    if (loading) {
        return (
            <div className="min-h-screen bg-black py-12 px-4">
                <div className="max-w-2xl mx-auto">
                    <div className="h-9 w-48 bg-amber-900/20 rounded-md animate-pulse mb-8"></div>

                    <div className="bg-amber-950/10 p-6 rounded-xl border border-amber-900/30 mb-8 animate-pulse">
                        <div className="h-10 bg-amber-900/20 rounded-lg"></div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {[1, 2, 3, 4].map((i) => (
                            <div
                                key={i}
                                className="bg-amber-950/10 border border-amber-900/20 p-5 rounded-xl h-36 animate-pulse"
                            >
                                <div className="flex justify-between mb-4">
                                    <div className="h-5 w-32 bg-amber-900/30 rounded"></div>
                                    <div className="h-5 w-12 bg-amber-900/30 rounded-full"></div>
                                </div>
                                <div className="h-3 w-full bg-amber-900/20 rounded mb-2"></div>
                                <div className="h-3 w-2/3 bg-amber-900/20 rounded mb-6"></div>
                                <div className="flex gap-3">
                                    <div className="h-3 w-10 bg-amber-900/30 rounded"></div>
                                    <div className="h-3 w-10 bg-amber-900/30 rounded"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    const handleSearch = () => {
        if (!inputValue) {
            alert("Please enter a search term.");
            return;
        }
        setLoading(true);
        axios
            .get(`https://api.github.com/search/repositories?q=${inputValue}`)
            .then((response) => {
                setResults(response.data.items);
                console.log(response.data.items);
                setLoading(false);
            })
            .catch((error) => {
                setError(error.message);
                console.log(error);
                setLoading(false);
            });
    };

    return (
        <div className="min-h-screen bg-black py-12 px-4 text-amber-100">
            <SearchForm
                inputValue={inputValue}
                setInputValue={setInputValue}
                handleSearch={handleSearch}
            />
            <ResultCard results={results} />
        </div>
    );
};

export default App;
