function firGrid() {

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-10">
      <div className="grid grid-cols-2 gap-4 w-full max-w-6xl">
        {/* Left column  */}
        <div className=" h-[34.5rem] bg-[linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.3)),url('assets/forGrids/sleeping-gear.jpg')] bg-cover bg-center p-5 text-white">
          <h2 className="text-3xl mb-4">SLEEPING GEAR</h2>
          <p className="mb-6">
            Discover our top-quality sleeping gear designed for ultimate comfort
            and warmth during your outdoor adventures.
          </p>
          <button className="bg-white px-4 py-2 rounded text-black">
            SHOP SLEEPING GEAR
          </button>
        </div>

        {/* Right column */}
        <div className="grid grid-rows-2 gap-4 h-[34.5rem] text-white">
          <div className="bg-[linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.3)),url('assets/forGrids/camping-kitchen.jpg')] bg-cover bg-center p-5 ">
            <h2 className="text-3xl mb-4">CAMP KITCHEN</h2>
            <p className="mb-6">
              Elevate your outdoor cooking experience with our camp kitchen
              essentials, designed for convenience and durability.
            </p>
            <button className="bg-white px-4 py-2 rounded text-black">
              SHOP CAMP KITCHEN GEAR
            </button>
          </div>
          <div className="bg-[linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.3)),url('assets/forGrids/camping-backpack.jpg')] bg-cover bg-center p-5">
            <h2 className="text-3xl mb-4">BACKPACKING PACKS</h2>
            <p className="mb-6">
              Explore our range of backpacking packs, crafted for comfort and
              durability, ensuring you carry your gear with ease.
            </p>
            <button className="bg-white px-4 py-2 rounded text-black">
              SHOP BACKPACKING GEAR
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default firGrid;
