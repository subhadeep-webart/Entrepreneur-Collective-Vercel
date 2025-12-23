import VideoCard from "@/components/shared/Cards/VideoCard";

const VideoSection = () => {
  return (
    <div className="container !pt-16">
      <h3 className="font-semibold text-6xl text-foreground text-center !mb-16">
        Inspiring Journeys, Captured on Video
      </h3>
      <div className="grid grid-cols-4 gap-7">
        <VideoCard/>
        <VideoCard/>
        <VideoCard/>
        <VideoCard/>
        <VideoCard/>
        <VideoCard/>
        <VideoCard/>
        <VideoCard/>
      </div>
    </div>
  );
};

export default VideoSection;
