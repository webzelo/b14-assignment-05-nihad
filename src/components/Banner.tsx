import bannerImage from "../assets/banner-stack.png";

const Banner = () => {
    return (
        <section className="bg-white">
            <div className="max-w-7xl mx-auto px-8 lg:px-20 min-h-[650px] flex items-center">
                {/*Left*/}
                <div className="w-full lg:w-1/2 space-y-6 text-black">
                    <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight text-slate-900">Build Your Ideal <br />
                        <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 text-transparent bg-clip-text">
                            Development Stack
                        </span>
                    </h1>
                    <p className="text-lg lg:text-xl text-slate-500 max-w-xl leading-relaxed">
                        Explore frontend, backend, database, and tooling options,
                        compare them side by side, and put together the stack that fits your
                        next project.
                    </p>
                    {/*Button*/}
                    <div className="flex gap-4 pt-4">
                        <button className="btn border-none text-white bg-gradient-to-r from-orange-500 to-pink-500 px-8 rounded-lg">Explore Technologies</button>
                        <button className="btn bg-white border border-gray-200 text-slate-600 px-10 rounded-lg">Learn More</button>
                    </div>

                </div>
                {/*Right*/}
                <div className="hidden lg:flex w-1/2 justify-center">
                    <img src={bannerImage} alt="Development stack" className="w-full object-contain"/>
                </div>
            </div>
        </section>
    );
};

export default Banner;