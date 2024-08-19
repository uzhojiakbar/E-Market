// useAuthRedirect hook
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useGetCollections from "./useCollections"; // marketsni olish uchun hook

const useAuthRedirect = (setIsAuthChecking) => {
  const navigate = useNavigate();
  const { markets } = useGetCollections(); // markets arrayni olish

  useEffect(() => {
    const checkAuth = () => {
      const userToken = localStorage.getItem("login"); // localStorage'dagi login tokenni oling
      const isAuthenticated = markets.some((market) => market.id === userToken); // Tokenni tekshirish

      if (isAuthenticated) {
        // Agar token markets arraydagi biror bir idga mos kelsa, asosiy sahifaga yo'naltiring
        if (location.pathname === "/login") {
          navigate(localStorage.getItem("next") || "/");
          localStorage.removeItem("next");
        }
      } else {
        if (location.pathname !== "/login") {
          localStorage.setItem("next", document.location.pathname);
        }
        navigate("/login"); // Aks holda, login sahifasida qoladi
      }

      setIsAuthChecking(false); // Tekshiruv tugadi
    };

    checkAuth(); // Funksiyani ishga tushiring
  }, [markets, navigate, setIsAuthChecking]); // markets o'zgarganda qayta render qiladi
};

export default useAuthRedirect;
