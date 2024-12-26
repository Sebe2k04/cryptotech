import data from "../data.json"
import OrderStat from "./OrderStat"

const WidgetOrderStats = () => {
    console.log(data)
  return (
   <div className="pt-10">
   <h1 className="text-3xl text-center font-semibold pt-5">OrderStatus</h1>
     <div className="cards flex justify-center flex-wrap gap-10 p-10">
    {
        data.data.map((d)=>{
            return(
                <OrderStat key={d} data={d}/>
            )
        })
    }
    </div>
   </div>
  )
}

export default WidgetOrderStats
