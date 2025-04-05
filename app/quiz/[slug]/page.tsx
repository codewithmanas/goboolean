import DynamicQuiz from "@/features/DynamicQuiz";
import React from "react";

const QuizAppPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>
}) => {

  const slug = (await params).slug;

  return (
    <div>
      <DynamicQuiz slug={slug} />
    </div>
  );
};

export default QuizAppPage;
