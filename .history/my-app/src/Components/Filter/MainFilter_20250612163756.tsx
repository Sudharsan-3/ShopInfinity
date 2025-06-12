import React from 'react'

const MainFilter = () => {
    return (
        <div className='p-10'>
            {/* Quick Products  */}

            <div className='flex justify-around p-5 bg-white rounded-2xl'>
                <div className='flex flex-col items-center cursor-pointer bg-transparent'>
                    <div>
                        <img src="https://rukminim2.flixcart.com/flap/80/80/image/29327f40e9c4d26b.png?q=100" width={65} alt="Kilo" />
                    </div>
                    <span>Kilo</span>
                </div>
                <div className='flex flex-col items-center cursor-pointer  bg-transparent'>
                    <div>
                        <img src="https://rukminim2.flixcart.com/flap/80/80/image/22fddf3c7da4c4f4.png?q=100"  width={65} alt="Mobiles" />
                    </div>
                    <span>Mobiles</span>
                </div> 
                <div className='flex flex-col items-center cursor-pointer  bg-transparent'>
                    <div>
                        <img src="https://rukminim2.flixcart.com/fk-p-flap/80/80/image/0d75b34f7d8fbcb3.png?q=100"  width={65} alt="Fashion" />
                    </div>
                    <span>Fashion</span>
                </div>
                 <div className='flex flex-col items-center cursor-pointer  bg-transparent'>
                    <div>
                        <img src="https://rukminim2.flixcart.com/flap/80/80/image/69c6589653afdb9a.png?q=100"  width={65} alt="Electronics" />
                    </div>
                    <span>Electronics</span>
                </div>

                <div className='flex flex-col items-center cursor-pointer  bg-transparent'>
                    <div>
                        <img src="https://rukminim2.flixcart.com/flap/80/80/image/ab7e2b022a4587dd.jpg?q=100"  width={65} alt="Home & Furniture" />
                    </div>
                    <span>Home $ Furniture</span>
                </div> 
                <div className='flex flex-col items-center cursor-pointer bg-transparent'>
                     <div>
                        <img src="https://rukminim2.flixcart.com/fk-p-flap/80/80/image/0139228b2f7eb413.jpg?q=100"  width={65} alt="" />
                    </div>
                    <span>Appliances</span>
                </div>
                 <div className='flex flex-col items-center cursor-pointer bg-transparent'>
                    <div>
                        <img src="https://rukminim2.flixcart.com/flap/80/80/image/71050627a56b4693.png?q=100"  width={65} alt="" />
                    </div>
                    <span>Fkight Bookings</span>
                </div>
                 <div className='flex flex-col items-center cursor-pointer bg-transparent'>
                    <div>
                        <img src="https://rukminim2.flixcart.com/flap/128/128/image/dff3f7adcf3a90c6.png?q=100"  width={65} alt="" />
                    </div>
                    <span>Beauty, Toys & More</span>
                </div>
                <div className='flex flex-col items-center cursor-pointer  bg-transparent'>
                    <div>
                        <img src="https://rukminim2.flixcart.com/flap/80/80/image/29327f40e9c4d26b.png?q=100"  width={65} alt="" />
                    </div>
                    <span>Two Wheelers</span>
                </div>

            </div>

        </div>
    )
}

export default MainFilter
