import huntimg from "../assets/forGrids/mountain-hunter.png";
function huntingSect() {
  return (
    <section className="w-full flex  h-screen bg-gray-100 ">
    <div className="w-1/2">
      <img src={huntimg} alt="hunting season" className="w-full h-full object-cover" />
    </div>
    <div className=" text-blue-950 w-1/2 p-10 flex flex-col justify-center items-start text-left bg-yellow-50 pt-56">
      <h2 className="text-6xl pb-5">HUNTING<br/>SEASON</h2>
      <p className="text-gray-700 ">
        Hunting season is a time of year when hunters are allowed to hunt
        specific types of wildlife. It is a tradition that brings together
        enthusiasts who appreciate the challenge and skill involved in
        tracking and harvesting game. This period is regulated to ensure
        sustainable wildlife populations and to provide a balanced ecosystem.
        Whether for sport, food, or conservation, hunting season is an
        important part of wildlife management and outdoor recreation.
      </p>
    <button className="font-bold w-1/3 h-14 text-center mt-8 border-2 border-blue-950 hover:bg-blue-950 hover:text-yellow-100 transition-colors duration-300 text-blue-950 tracking-wider uppercase p-1">
      Shop Hunting Gear
    </button>
    </div>
    </section>
  );
}

export default huntingSect;
