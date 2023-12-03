import {data} from "../data/data.js"
import {useState} from "react"


const Food = () => {
  
    const[foods, setFoods] = useState(data)




      return (
    <div className="max-h-[1640px] px-12 py-12">
        <h1 className ="text-orange-600 text-4xl font-bold text-center pb-10">Top Rated Menus</h1>
        <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="text-sm">
                <p className="font-bold text-sm pb-2">Filter Types</p>
                <div className=" flex gap-6">
                <button className="hover:bg-orange-600 hover:text-white duration-700 hover:border-none">All</button>
                <button className="hover:bg-orange-600 hover:text-white duration-700 hover:border-none">Burgers</button>
                <button className="hover:bg-orange-600 hover:text-white duration-700 hover:border-none">Pizza</button>
                <button className="hover:bg-orange-600 hover:text-white duration-700 hover:border-none">Salad</button>
                <button className="hover:bg-orange-600 hover:text-white duration-700 hover:border-none">Chicken</button>
                </div>
              </div>

              <div className="text-sm">
              <p className="font-bold tex-sm pb-2">Filter Price</p>
                <div className="flex gap-6">
                <button className="hover:bg-orange-600 hover:text-white duration-700 hover:border-none">$</button>
                <button className="hover:bg-orange-600 hover:text-white duration-700 hover:border-none">$$</button>
                <button className="hover:bg-orange-600 hover:text-white duration-700 hover:border-none">$$$</button>
                <button className="hover:bg-orange-600 hover:text-white duration-700 hover:border-none">$$$$</button>
                <button className="hover:bg-orange-600 hover:text-white duration-700 hover:border-none">$$$$$</button>
                </div>
              </div>


        </div>    

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8  ">
            {foods.map((item, index) =>(
                <div key={index} className="border shadow-2xl hover:scale-105 duration-500">
                    <img src = {item.image} alt={item.name}  className="w-full h-[150px] object-cover rounded-lg" />
                    <div className="flex justify-between text-sm p-2">
                        <p>{item.name}</p>
                        <p className="bg-orange-600 text-white rounded-full p-1">{item.price}</p>
                    </div>
                </div>
                
            ) )}
        </div>
    </div>
  )
}

export default Food
