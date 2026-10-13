import wheel from "@/assets/video-manuals/manual-1.mp4.asset.json";
import wheelPoster from "@/assets/video-manuals/manual-1.jpg.asset.json";
import electrical from "@/assets/video-manuals/manual-2.mp4.asset.json";
import electricalPoster from "@/assets/video-manuals/manual-2.jpg.asset.json";
import cover from "@/assets/video-manuals/manual-3.mp4.asset.json";
import coverPoster from "@/assets/video-manuals/manual-3.jpg.asset.json";
import deployment from "@/assets/video-manuals/manual-4.mp4.asset.json";
import deploymentPoster from "@/assets/video-manuals/manual-4.jpg.asset.json";
import lifting from "@/assets/video-manuals/manual-5.mp4.asset.json";
import liftingPoster from "@/assets/video-manuals/manual-5.jpg.asset.json";
import towing from "@/assets/video-manuals/manual-6.mp4.asset.json";
import towingPoster from "@/assets/video-manuals/manual-6.jpg.asset.json";
import transport from "@/assets/video-manuals/manual-7.mp4.asset.json";
import transportPoster from "@/assets/video-manuals/manual-7.jpg.asset.json";
import toilet from "@/assets/video-manuals/manual-8.mp4.asset.json";
import toiletPoster from "@/assets/video-manuals/manual-8.jpg.asset.json";

export const videoManualGroups = [
  {
    title: "Transport & Setup",
    manuals: [
      { title: "Preparing the unit for towing", video: towing.url, poster: towingPoster.url, duration: "2:21" },
      { title: "Deploying the unit on site", video: deployment.url, poster: deploymentPoster.url, duration: "1:14" },
      { title: "Deploying the anti-vandal cover", video: cover.url, poster: coverPoster.url, duration: "0:40" },
      { title: "Using the low-level lifting eyes", video: lifting.url, poster: liftingPoster.url, duration: "1:15" },
      { title: "Transporting the cabin", video: transport.url, poster: transportPoster.url, duration: "2:48" },
    ],
  },
  {
    title: "Operation & Maintenance",
    manuals: [
      { title: "Electrical system & fuse box test procedure", video: electrical.url, poster: electricalPoster.url, duration: "4:44" },
      { title: "Using the recirculating chemical toilet", video: toilet.url, poster: toiletPoster.url, duration: "2:18" },
      { title: "Changing a wheel", video: wheel.url, poster: wheelPoster.url, duration: "1:31" },
    ],
  },
];