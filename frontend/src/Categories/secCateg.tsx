import backpack from '../assets/Catimages/backpack-fl.webp'
import arcetryx from '../assets/logos/Arcteryx-Logo.webp'
function secCateg() {
  return (
    <>
      <div className='bg-slate-400 w-96 p-10 pl-2'>
          <div className='flex justify-center'><img src={backpack} width={250} alt="backpack" /></div>
          <img src={arcetryx} width={70} alt="logo" />
          <h3 className='text-3xl'>Alpha Fl 40 Backpack</h3>
          <p>2 colors</p>
          <p>$290 <span>$189.90</span></p>
      </div>
    </>
  );
}

export default secCateg;
