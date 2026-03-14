import { Github } from "lucide-react";

const SearchForm = ({ setInputValue, inputValue, handleSearch }) => {
    return (
        <div className="max-w-2xl mx-auto">
            <h1 className="text-3xl font-bold text-amber-50 mb-8 flex items-center gap-2">
                <span className="text-4xl">
                    <Github />
                </span>{" "}
                Github Browser
            </h1>

            <div className="bg-amber-950/20 p-6 rounded-xl shadow-lg border border-amber-900/50">
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <div className="flex-1">
                        <label
                            htmlFor="gitSearch"
                            className="block text-sm font-semibold text-amber-100/90 mb-1 ml-1"
                        >
                            Search Github
                        </label>
                        <input
                            type="text"
                            name="gitSearch"
                            id="gitSearch"
                            value={inputValue}
                            placeholder="e.g. facebook/react"
                            onChange={(e) => setInputValue(e.target.value)}
                            className="w-full bg-amber-950 border-2 border-amber-900 text-amber-100 
                       placeholder:text-amber-600 rounded-lg px-4 py-2.5
                       focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent
                       transition-all duration-200"
                        />
                    </div>

                    <button
                        className="md:mt-6 bg-amber-500 hover:bg-amber-600 text-amber-950 font-medium 
                           px-6 py-2.5 rounded-lg transition-colors shadow-sm"
                        onClick={handleSearch}
                    >
                        Search
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SearchForm;
