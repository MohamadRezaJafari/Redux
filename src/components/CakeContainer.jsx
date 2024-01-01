import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyCake } from "../redux/cake/cakeActions";

function CakeContainer() {
  const [value, setValue] = useState(0);

  // 1. یک فانکشن به عنوان پارامتر ورودی دریافت میکند به اسم سلکتور فانکشن که تمامی استیت هارا که داخل روت ردیوسر میباشد را به ما میدهد
  // 2. هوک یوزسلکتور نمایش میدهد هرچیزی را که سلکتور فانکشن ریترن میکند
  // کل استور که داریم مقدار استیت کیک را میخواهیم
  const cake = useSelector((state) => state.cake);
  // console.log(cake);

  // برای دسترسی به مقدار دیسپچی که ما توسط ریداکس نوشتیم دسترسی پیدا کنیم
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Cake Number: {cake.numOfCakes}</h2>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      {/* <button onClick={() => dispatch({ type: "BuyCake", payload: value })}>
        Buy Cake
      </button> */}
      <button onClick={() => dispatch(buyCake(value))}>Buy Cake</button>
    </div>
  );
}

export default CakeContainer;
