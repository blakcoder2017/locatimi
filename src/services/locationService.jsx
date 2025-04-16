import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/configure";


export const fetchData = async (collectionName) => {    
    try {
        const querySnapshot = await getDocs(collection(db, collectionName));
        const data = [];
        querySnapshot.forEach((doc) => {
            data.push({ id: doc.id, ...doc.data() });
        });
        return data;
    } catch (error) {
        console.error("Error fetching data: ", error);
        throw error;
    }
}