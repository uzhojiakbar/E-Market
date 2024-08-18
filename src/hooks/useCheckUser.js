import useGetCollections from "./useCollections";

const CheckUser = () => {
  const { loading, getMarkets } = useGetCollections();
  const isUser = async () => {
    const markets = await getMarkets();
    const validUser = markets.find(
      (userData) => userData.id == localStorage.getItem("login")
    );
    if (validUser) {
      console.log("FOYDALUVCHI MAVJUD");
      return true;
    } else {
      console.log("FOYDALUVCHI MAVJUD EMAS");
      return false;
    }
  };

  return { isUser };
};

export default CheckUser;
