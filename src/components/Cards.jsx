

const Cards = () => {
  return (
    <div className="max-w-[1640px] grid  rounded-xl px-12 py-12 md:grid-cols-3 gap-6">
       <div className='rounded-xl relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
          <p className='font-bold text-2xl px-2 pt-4'>Suns Out, BOGOs Out</p>
          <p className='px-2'>Through 8/26</p>
          <button className='border-white bg-white rounded-xl text-sm px-4 py-2 hover:bg-orange-600 hover:text-white duration-700 text-black mx-2 absolute bottom-4'>Order Now</button>
        </div>
        <img
        className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
          src='https://images.unsplash.com/photo-1613769049987-b31b641f25b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGJyZWFrZmFzdHxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60'
          alt='/'
        />
      </div>

      <div className='rounded-xl relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
          <p className='font-bold text-2xl px-2 pt-4'>Suns Out, BOGOs Out</p>
          <p className='px-2'>Through 8/26</p>
          <button className='border-white bg-white rounded-xl text-sm px-4 py-2 hover:bg-orange-600 hover:text-white duration-700 text-black mx-2 absolute bottom-4'>Order Now</button>
        </div>
        <img
        className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
          src='https://images.unsplash.com/photo-1504973960431-1c467e159aa4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          alt='/'
        />
      </div>



      <div className='rounded-xl relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
          <p className='font-bold text-2xl px-2 pt-4'>Suns Out, BOGOs Out</p>
          <p className='px-2'>Through 8/26</p>
          <button className='border-white bg-white rounded-xl text-sm px-4 py-2 hover:bg-orange-600 hover:text-white duration-700 text-black mx-2 absolute bottom-4'>Order Now</button>
        </div>
        <img
        className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
          src='https://images.unsplash.com/photo-1575879911904-ca5d889c6c7e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          alt='/'
        />
      </div>

      </div>

        
  )
}

export default Cards
