import { db } from "@/config/firebase.client.config";
import DynamicQuiz from "@/features/DynamicQuiz";
import { collection, doc, DocumentData, getDoc, getDocs } from "firebase/firestore";
import React from "react";

/*
  TODO: need optimization for quiz topics and quiz questions
  - This is all about data fetching on build time or request time
  - 1. Fetch quiz topics on build time
  - 2. Fetch quiz questions on request time
  - 3. Cache quiz topics and quiz questions
  - 4. Use React Query for data fetching (This is not recommended for this quiz feature)
*/

export interface QuizQuestion {
  id: string; // ID of the question
  question: string; // The question text
  options: string[]; // Array of possible answers
  correctAnswer: number; // Index of the correct answer
  slug: string; // Slug for the topic
  topicName: string; // Name of the topic
  createdAt: string; // ISO timestamp for when the question was created
}

const fetchAllQuizQuestions = async (quizTopic: string) => {
      try {
        // Reference the specific document inside the parent collection
        const parentDocRef = doc(db, "quizTopics", `${quizTopic}`);

        // Reference the subcollection inside the parent document
        const subcollectionRef = collection(parentDocRef, "quizQuestionsSet");

        // Fetch all documents from the subcollection
        const snapshot = await getDocs(subcollectionRef);

        // Convert documents into an array of data
        const documents: DocumentData[] = snapshot.docs.map((doc) => doc.data()) as QuizQuestion[]; // Convert the documents into an array of data

        // const documents = snapshot.docs.map((doc) => ({
        //   id: doc.id, // Include document ID if needed
        //   ...doc.data(), // Spread document data
        // }));


        // console.log("Fetched all quiz questions:", documents);

        return documents;
      } catch (error) {
        console.log("Error fetching quiz questions: ", error);
      }
}

const fetchQuizTimer = async (quizTopic: string) => {
  try {
    const docRef = doc(db, "quizTopics", `${quizTopic}`); // Reference the specific document inside the parent collection
    const docSnap = await getDoc(docRef); // Fetch the document snapshot

    if (docSnap.exists()) {
      const data = docSnap.data(); // Get the document data
      const quizTimer = data?.timeLimitInMinutes; // Access the timeLimitInMinutes field
      return quizTimer;
    } else {
      console.log("No such document!");
    }
    
  } catch (error) {
    console.log("Error fetching quiz timer: ", error);
  }
} 

const QuizAppPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>
}) => {
  const slug = (await params).slug;

  const questionsSet: QuizQuestion[] = await fetchAllQuizQuestions(slug) as QuizQuestion[]; // Fetch quiz questions for the specific slug
  const quizTimer = await fetchQuizTimer(slug); // Fetch quiz timer for the specific slug

  return (
    <div>
      <DynamicQuiz questionsSet={questionsSet} quizTimer={quizTimer} />
    </div>
  );
};

export default QuizAppPage;
