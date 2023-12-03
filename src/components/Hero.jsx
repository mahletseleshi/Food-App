

const Hero = () => {
  return (
    <div className="max-w-[1640px]">
        <div className="w-full h-[550px] relative">
            <div className="text-3xl sm:text-4xl md:text-5xl flex flex-col justify-center p-8 text-white font-bold lg:text-6xl absolute w-full h-[550px] bg-black/50 ">
              <h1>The <span className="text-orange-500">Best</span></h1>
              <h1><span className="text-orange-500">Food</span> Delivered</h1>
              <p className="text-[10px] lg:text-sm md:text-md  mt-10 font-normal w-[200px] md:w-[500px] leading-normal italic ">Discover our finest selection of menus, showcasing the epitome of taste and flavor that our town has to offer. Delve into an exquisite array of culinary delights, each meticulously curated to present you with an unparalleled dining experience. </p>
            </div>
           <img  className="w-full h-[550px] object-cover" src="https://images.unsplash.com/photo-1561758033-d89a9ad46330?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="pizza" />
          
        </div>
    </div>
  )
}

export default Hero
