"use client";
import React, { useEffect, useState } from "react";
import { db } from "../../../../../utils/db";
import { MockInterview } from "../../../../../utils/schema";
import { eq } from "drizzle-orm";
import QuestionsSection from "./_components/QuestionsSection";
import RecordAnsSection from "./_components/RecordAnsSection";
import { Button } from "../../../../../components/ui/button";
import Link from "next/link";

const StartInterview = ({ params }) => {
  const [interviewData, setInterviewData] = useState();
  const [mockInterviewQuestion, setMockInterviewQuestion] = useState();
  const [activeQuestionIdx, setActiveQuestionIdx] = useState(0);

  useEffect(() => {
    getInterviewDetails();
  }, []);

  const getInterviewDetails = async () => {
    const result = await db
      .select()
      .from(MockInterview)
      .where(eq(MockInterview.mockId, params.interviewId));

    const jsonMockResp = JSON.parse(result[0].jsonMockResp);
    setMockInterviewQuestion(jsonMockResp);
    setInterviewData(result[0]);
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Questions */}
        <QuestionsSection
          mockInterviewQuestion={mockInterviewQuestion}
          activeQuestionIdx={activeQuestionIdx}
        />

        {/* Video Audio Recording */}
        <RecordAnsSection
          mockInterviewQuestion={mockInterviewQuestion}
          activeQuestionIdx={activeQuestionIdx}
          interviewData={interviewData}
        />
      </div>
      <div className="flex justify-end gap-6">
        {activeQuestionIdx > 0 && (
          <Button onClick={() => setActiveQuestionIdx(activeQuestionIdx - 1)}>
            Previous Question
          </Button>
        )}
        {activeQuestionIdx != mockInterviewQuestion?.length - 1 && (
          <Button onClick={() => setActiveQuestionIdx(activeQuestionIdx + 1)}>
            Next Interview
          </Button>
        )}
        {activeQuestionIdx == mockInterviewQuestion?.length - 1 && (
          <Link href={`/dashboard/interview/${interviewData?.mockId}/feedback`}>
            <Button>End Question</Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default StartInterview;
