const ResultCard = (props) => {
    return (
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {props.results.map((repo) => (
                <div
                    key={repo.id}
                    className="group bg-amber-950/20 border border-amber-900/50 p-5 rounded-xl shadow-sm 
                     hover:shadow-lg hover:border-amber-700/80 transition-all cursor-pointer"
                >
                    <div className="flex flex-col h-full">
                        <div className="flex items-start justify-between mb-2">
                            <h3 className="font-bold text-amber-50 group-hover:text-amber-200 truncate text-lg">
                                {repo.name}
                            </h3>
                            <span className="text-xs font-medium bg-amber-900/50 text-amber-200 px-2 py-1 rounded-full">
                                {repo.private ? "Private" : "Public"}
                            </span>
                        </div>

                        <p className="text-amber-100/70 text-sm line-clamp-2 mb-4 flex-grow">
                            {repo.description ||
                                "No description provided for this repository."}
                        </p>

                        <div className="flex items-center gap-4 text-xs text-amber-100/50 font-medium">
                            <div className="flex items-center gap-1">
                                <span className="w-3 h-3 rounded-full bg-amber-600"></span>
                                {repo.language || "Mixed"}
                            </div>
                            <div className="flex items-center gap-1">
                                <span className="text-amber-400">⭐</span>{" "}
                                {repo.stargazers_count?.toLocaleString()}
                            </div>
                            <div className="flex items-center gap-1">
                                <span className="text-amber-400">🍴</span>{" "}
                                {repo.forks_count?.toLocaleString()}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ResultCard;
