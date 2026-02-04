import { ArrowRightLeft } from 'lucide-react';

const Container = () => {
     return (

          <div className=' h-[40%] w-[73%]  bg-white shadow-md mt-3 ml-[14rem] py-3 px-3 rounded-lg border-[1px] border-gray'>
               <div className="flex gap-3">
                    <div className="flex gap-2 items-center justify-center flex-row font-bold">
                         <input type="radio" id="oneWay" name="tripType" />
                         <label htmlFor="oneWay">One Way</label>
                    </div>
                    <div className="flex gap-2 items-center justify-center flex-row font-bold">
                         <input type="radio" id="roundTrip" name="tripType" />
                         <label htmlFor="roundTrip">Round Trip</label>
                    </div>
               </div>
               <div className=''>
                 <div className=''>
                  


                 </div>
               </div>
          </div>
     )
}

export default Container