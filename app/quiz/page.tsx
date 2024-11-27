
import { db } from "@/config/firebase.client.config";
import { collection, getDocs } from "firebase/firestore";
import QuizTopicsListing from "@/features/QuizTopicsListing";

export interface quizProps {
  id: string;
  name: string;
  description: string;
  difficulty: string;
  noOfQuestions: number;
  timeLimitInMinutes: number;
  slug: string;
}


const fetchQuizTopics = async () => {
  const collectionRef = collection(db, "quizTopics"); // Replace with your collection name
    try { // Replace with actual API call
      const snapshot = await getDocs(collectionRef);

      // Map through documents and return only their data
      const documents: quizProps[] = snapshot.docs.map((doc) => {
        const data = doc.data();
        return {
          id: data.id,
          name: data.name,
          description: data.description,
          difficulty: data.difficulty,
          noOfQuestions: data.noOfQuestions,
          timeLimitInMinutes: data.timeLimitInMinutes,
          slug: data.slug,
        };
      }); 

      // Convert the documents into an array of data
      // const documents = snapshot.docs.map((doc) => ({
      //   id: doc.id, // Include document ID if needed
      //   ...doc.data(), // Spread the document's data
      // }));

      // console.log("Fetched Documents:", documents);
      // setQuizzes(documents);

      return documents

    } catch (error) { 
      console.error("Error fetching documents: ", error);
    }
};  


export default async function QuizzesPage() {

  const quizzes: quizProps[] = await fetchQuizTopics() as quizProps[];

  return (
      <>
      <QuizTopicsListing quizzes={quizzes} />
      </>
  );
}
