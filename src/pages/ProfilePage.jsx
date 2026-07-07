import Loader from "../components/HomeComponents/Loader/Loader";
import Profile from "../components/ProfileComponents/Profile/Profile";
import { useEffect, useState } from "react";
import { getUserDetails } from "../api/userApi";
import { UserContext } from "../utils/ContextProducer";

function ProfilePage() {
  const [loading, setLoading] = useState(false);
  const [userDetails, setUserDetails] = useState({});

  useEffect(() => {
    (async function fetchUserDetails() {
      setLoading(true);
      try {
        const response = await getUserDetails();
        const data = await response.json();
        console.log(data);
        setUserDetails(data);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <UserContext.Provider value={{userDetails, setUserDetails}}>
      {loading ? <Loader /> : <Profile />}
    </UserContext.Provider>
  );
}

export default ProfilePage;
