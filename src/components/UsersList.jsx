import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../redux/use/userActions";

// *  یوزر اکشن از طریق فتچ کردن میاد دیتا های ردیوسر را مقدار دهی میکند سپس با فراخوانی متد یوزسلکتور به مقدار دیتاها (اینیشیال استیت) دسترسی پیدا میکنیم

function UsersList() {
  const dispatch = useDispatch();
  //   const users = useSelector((state) => state.users);
  //   console.log(users);
  const { isLoading, error, data } = useSelector((state) => state.users);

  //! زمانیکه اکشن داریم باید از طریق دیس پچ به اطلاعات دسترسی پیدا میکنیم
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>UsersList</h2>
      {data.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </div>
  );
}

export default UsersList;
