import VideoCard from "./VideoCard"

const videoDetails = [{
    title : "Jigra | ulti ginti shuru",
    img_logo : "t-series.jpg",
    views : "50M",
    timestamp : "12 days ago",
    img_tumbnail : "jigra.jpg"
  
  },
  {
    title : "I am millionare",
    img_logo : "t-series.jpg",
    views : "100M",
    timestamp : "1 days ago",
    img_tumbnail : "millionare.jpg"
  
  },{
    title : "Kheto me tu ayi nai",
    img_logo : "t-series.jpg",
    views : "200M",
    timestamp : "3 months ago",
    img_tumbnail : "kheto.jpg"
  
  },{
    title : "Kheto me tu ayi nai",
    img_logo : "t-series.jpg",
    views : "200M",
    timestamp : "3 months ago",
    img_tumbnail : "kheto.jpg"
  
  }
]

export const VideoGrid = () =>{
    return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {
            videoDetails.map(video => <div>
                <VideoCard
                    img_tumbnail={video.img_tumbnail}
                    title={video.title}
                    img_logo={video.img_logo}
                    views={video.views}
                    timestamp={video.timestamp}
                >
                </VideoCard>
            </div>)
        }
    </div>
}