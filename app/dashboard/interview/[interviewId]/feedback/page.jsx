"use client";
import React, { useEffect, useState } from "react";
import { db } from "../../../../../utils/db";
import { UserAnswer } from "../../../../../utils/schema";
import { eq } from "drizzle-orm";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../../../../../components/ui/collapsible";
import { ChevronsUpDownIcon } from "lucide-react";
import { Button } from "../../../../../components/ui/button";
import { useRouter } from "next/navigation";

const Feedback = ({ params }) => {
  const [feedbackList, setFeedbackList] = useState([]);
  const [averageRating, setAverageRating] = useState(0);
  const router = useRouter();

  useEffect(() => {
    GetFeedback();
  }, []);

  const GetFeedback = async () => {
    const result = await db
      .select()
      .from(UserAnswer)
      .where(eq(UserAnswer.mockIdRef, params.interviewId))
      .orderBy(UserAnswer.id);

    console.log(result);
    setFeedbackList(result);

    // Calculate average rating
    if (result.length > 0) {
      const totalRating = result.reduce(
        (acc, item) => acc + parseFloat(item.rating),
        0
      );
      const avgRating = Math.ceil((totalRating / result.length) * 100) / 100; // Ceil to two decimal places
      setAverageRating(avgRating);
    }
  };

  return (
    <div className="p-10">
      {feedbackList?.length == 0 ? (
        <h2 className="font-bold text-xl text-gray-500 mb-4">
          No Interview Feedback Record Found
        </h2>
      ) : (
        <>
          <h2 className="text-3xl font-bold text-green-500">
            Congratulations!
          </h2>
          <h2 className="font-bold text-2xl">
            Here is your Interview Feedback
          </h2>

          <h2 className="text-primary text-lg my-3">
            Your overall interview rating: <strong>{averageRating}/10</strong>
          </h2>
          <h2 className="text-sm text-gray-500">
            Find below interview question with Correct answer, Your answer and
            Feedback for improvements.
          </h2>

          {feedbackList &&
            feedbackList.map((item, idx) => (
              <Collapsible key={idx} className="mt-8">
                <CollapsibleTrigger className="p-2 bg-secondary rounded-lg my-2 text-left flex justify-between gap-7 w-full">
                  {item.question} <ChevronsUpDownIcon className="h-5 w-5" />
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <div className="flex flex-col gap-2">
                    <h2 className="text-red-500 p-2 border rounded-lg">
                      <strong>Rating: </strong>
                      {item.rating}
                    </h2>
                    <h2 className="p-2 border rounded-lg bg-red-50 text-sm text-red-900">
                      <strong>Your Answer: </strong>
                      {item.userAns}
                    </h2>
                    <h2 className="p-2 border rounded-lg bg-green-50 text-sm text-green-900">
                      <strong>Correct Answer: </strong>
                      {item.correctAns}
                    </h2>
                    <h2 className="p-2 border rounded-lg bg-blue-50 text-sm text-primary">
                      <strong>Feedback: </strong>
                      {item.feedback}
                    </h2>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            ))}
        </>
      )}

      <Button className="mt-3" onClick={() => router.replace("/dashboard")}>
        Go Home
      </Button>
    </div>
  );
};

export default Feedback;
