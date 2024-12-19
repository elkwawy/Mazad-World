import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import AuctionCard from "./AuctionCard";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import useLocalization from "../../../Hooks/useLocalization";
export default function AuctionCarousel({ auctions }) {
  const { dir } = useLocalization();
  return (
    <Swiper
      key={dir}
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={24}
      slidesPerView={4}
      // grabCursor={true}
      // navigation
      // pagination={{ clickable: true }}
      autoplay={{ delay: 2000 }}
      breakpoints={{
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
        1280: { slidesPerView: 4 },
      }}
      className="auction-swiper"
    >
      {auctions.map((auction) => (
        <SwiperSlide key={auction.id}>
          <AuctionCard auction={auction} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}