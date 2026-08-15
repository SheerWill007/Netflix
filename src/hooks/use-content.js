import { useEffect, useState, useContext } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { FirebaseContext } from '../context/firebase';

export default function useContent(target) {
  const [content, setContent] = useState([]);
  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const querySnapshot = await getDocs(collection(firebase.firestore(), target));
        const allContent = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          docId: doc.id,
        }));
        setContent(allContent);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchContent();
  }, []);

  return { [target]: content };
}
