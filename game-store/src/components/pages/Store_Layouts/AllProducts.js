import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import "../styles/Dashboard.css";
import { auth, db, logout } from "../../Firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import NavBar from "../../Navbar";
import VerticalList from "../../VerticalList";
import Carousel from "../../Carousel";
import { FaTrash,FaEdit,FaPlusSquare,FaKey, FaList} from 'react-icons/fa';
import { getAllItems } from "../../../db/supabase";

function AllProducts() {
  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const viewAllItems = () => {
    navigate("/allProducts")
  }

  const fetchUserName = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      setName(data.name);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/");
    fetchUserName();
  }, [user, loading]);
  return (
    <div className="store__container">
      <div className="store">
        <NavBar />
        <div className="flex flex-col mx-8 mt-6">
          <p className="font-bold text-3xl text-left">All products 👏</p>
          <div className="divider"></div>
          <VerticalList/>
        </div>
      </div>
    </div>
  );
}
export default AllProducts;
