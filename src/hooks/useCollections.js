import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";
import getNotify from "./useNotify";

const useGetCollections = () => {
  const [markets, setMarkets] = useState([]);
  const [loading, setLoading] = useState(true);
  const { notify } = getNotify();

  const getMarkets = async () => {
    try {
      // Firebase dan ma'lumotlarni olish
      const querySnapshot = await getDocs(collection(db, "markets"));
      const marketList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setMarkets(marketList);
      console.log("MARKETS YUKLANDI");
      setLoading(false);
      return marketList;
    } catch (error) {
      // Xatolik yuz berganda toastni ko'rsating
      notify("err", "Ma'lumotlarni olishda xatolik yuz berdi");
      console.log("MARKETS YUKLANMADI");
      console.error("Error fetching markets: ", error);
      return false;
    }
  };

  useEffect(() => {
    getMarkets();
  }, []);

  return { markets, loading, getMarkets };
};

export default useGetCollections;
