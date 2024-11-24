import { db } from "@/config/firebase.client.config";
import DynamicQuiz from "@/features/DynamicQuiz";
import { collection, doc, DocumentData, getDocs } from "firebase/firestore";
import React from "react";


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

const QuizAppPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>
}) => {
  const slug = (await params).slug;

  const questionsSet: QuizQuestion[] = await fetchAllQuizQuestions(slug) as QuizQuestion[]; // Fetch quiz questions for the specific slug

  return (
    <div>
      <DynamicQuiz questionsSet={questionsSet} />
    </div>
  );
};

export default QuizAppPage;
