import SportCard from "@/components/SportCard";
import img1 from "../../public/277307281_10158751675643224_148609460173032344_n.png";
import img2 from "../../public/370265821_812394460893172_8391088016650457893_n 1.png";
import img3 from "../../public/395319316_1098948761258832_1320994362450036961_n 1.png";
import Card from "@/components/Card";
import SpotlightCard from "@/components/SpotlightCard";

import img4 from "../../public/Ticket_Mockup 3.png";
import img5 from "../../public/unnamed 1.png";

export default function Home() {
  const data = [
    {
      id: 1,
      name: "Sacramento River Cats",
      sport: "Baseball",
      event: 48,
      img: img1,
    },
    {
      id: 2,
      name: "Las Vegas Aviators",
      sport: "Baseball",
      event: 28,
      img: img2,
    },
    {
      id: 3,
      name: "New Jersey Devils",
      sport: "Ice Hockey",
      event: 15,
      img: img3,
    },
    {
      id: 4,
      name: "Las Vegas Aviators",
      sport: "Baseball",
      event: 28,
      img: img2,
    },
  ];

  const data2 = [
    {
      id: 1,
      title: "Las Vegas Aviators",
      address: "Las Vegas Ballpark, Las Vegas, Nevada",
      img: img4,
      btnname: "Take Flight Collection",
    },
    {
      id: 2,
      title: "Sacramento River Cats",
      address: "Sutter Health Park, Sacramento, California",
      img: img5,
      btnname: "Orange Collection",
    },
    {
      id: 3,
      title: "Las Vegas Aviators",
      address: "Las Vegas Ballpark, Las Vegas, Nevada",
      img: img4,
      btnname: "Take Flight Collection",
    },
  ];

  return (
    <div className="bg-[#F7F7F8] w-full h-full flex flex-col justify-center items-center py-10">
      <div className="top w-[90%] flex flex-col">
        <div className=" w-full p-4 flex flex-col items-start space-y-4 justify-center">
          <div>
            <p className="text-black inline-block font-bold">Sports</p>
            <div className="h-[2px] w-full bg-[#2C9CF0]"></div>
          </div>
          <div className="flex justify-center items-center flex-col">
            <div className="flex space-x-7">
              {data.map((item) => (
                <SportCard
                  key={item.id}
                  img={item.img}
                  event={item.event}
                  name={item.name}
                  sport={item.sport}
                />
              ))}
              <Card />
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center ">
          <button className="bg-[#2C9CF0] text-white text-xs px-6 py-3 rounded-sm">
            See More
          </button>
        </div>
      </div>

      <div className="bg-gradient-to-r from-purple-50 via-purple-50 to-blue-50 h-full mt-28 p-4 rounded-md">
        <div>
          <div className="flex flex-col justify-center items-center space-y-3 my-4">
            <h2 className="text-5xl font-bold">Collection Spotlight</h2>
            <p className="text-center w-[80%] font-light">
              Discover extraordinary moments with our Spotlight Collection
              metatickets—exclusive access to premium events for an
              unforgettable experience. Grab yours today!
            </p>
          </div>
        </div>
        <div className="bottom ">
          <div className="flex">
            {data2.map((item) => (
              <SpotlightCard
                key={item.id}
                img={item.img}
                title={item.title}
                address={item.address}
                btnname={item.btnname}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
