const VideoTitle =({title, overview}) =>{
    return(
        <div className="pt-[20%] px-24 w-screen absolute aspect-video text-white bg-gradient-to-r from-black">
            <h1 className="text-6xl font-bold">{title}</h1>
            <p className="py-6 text-lg w-1/4">{overview}</p>
            <div >
            <button className="bg-white text-black p-4 px-12 text-xl bg-opacity-50 rounded-lg hover:bg-opacity-80">▶️ Play</button>
            <button className="bg-gray-500 text-white mx-2 p-4 px-12 text-xl bg-opacity-50 rounded-lg">Info</button>
            </div>
        </div>
    )
};

export default VideoTitle;