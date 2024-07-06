"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Webcam from "react-webcam";
import { Button } from "../../../../../../components/ui/button";
import useSpeechToText from "react-hook-speech-to-text";
import { Mic, StopCircle } from "lucide-react";
import { toast } from "sonner";
import { chatSession } from "../../../../../../utils/GeminiAIModal";
import { db } from "../../../../../../utils/db";
import { UserAnswer } from "../../../../../../utils/schema";
import { useUser } from "@clerk/nextjs";
import moment from "moment";

const RecordAnsSection = ({
  mockInterviewQuestion,
  activeQuestionIdx,
  interviewData,
}) => {
  const [userAnswer, setUserAnswer] = useState("");
  const { user } = useUser();
  const [loading, setLoading] = useState(false);

  const {
    error,
    interimResult,
    isRecording,
    results,
    startSpeechToText,
    stopSpeechToText,
    setResults,
  } = useSpeechToText({
    continuous: true,
    useLegacyResults: false,
  });

  useEffect(() => {
    console.log("Results:", results);
    let ans = "";
    results.map((result) => {
      ans += result;
    });
    setUserAnswer(ans);
  }, [results]);

  useEffect(() => {
    if (!isRecording && userAnswer.length > 10) {
      UpdateUserAnswer();
    }
  }, [userAnswer]);

  const StartStopRecording = async () => {
    if (isRecording) {
      stopSpeechToText();
    } else {
      startSpeechToText();
    }
  };

  const UpdateUserAnswer = async () => {
    setLoading(true);

    const feedbackPrompt =
      "Question: " +
      mockInterviewQuestion[activeQuestionIdx]?.question +
      ", User Answer: " +
      userAnswer +
      ", Depends on question and user answer for given interview question , please provide us rating out of 10 for answer and feedback as area for improvement in just 3-5 lines to improve in JSON format with rating field and feedback field. Please don't give anything as response other than the json format.";

    const result = await chatSession.sendMessage(feedbackPrompt);

    const mockJsonResp = result.response
      .text()
      .replace("```json", "")
      .replace("```", "");
    console.log(mockJsonResp);

    const JsonFeedbackRes = JSON.parse(mockJsonResp);

    const resp = await db.insert(UserAnswer).values({
      mockIdRef: interviewData?.mockId,
      question: mockInterviewQuestion[activeQuestionIdx]?.question,
      correctAns: mockInterviewQuestion[activeQuestionIdx]?.answer,
      userAns: userAnswer,
      feedback: JsonFeedbackRes?.feedback,
      rating: JsonFeedbackRes?.rating,
      userEmail: user?.primaryEmailAddress?.emailAddress,
      createdAt: moment().format("DD-MM-yyyy"),
    });

    if (resp) {
      toast("User Answer Recorded successfully :)");
      setUserAnswer("");
    }

    results.length = 0;
    setLoading(false);
  };

  return (
    <div className="flex items-center justify-center flex-col">
      <div className="flex flex-col mt-20 justify-center items-center bg-black rounded-lg p-5">
        <Image
          src={"/webcam.png"}
          width={200}
          height={200}
          className="absolute"
          alt="webcam img"
        />
        <Webcam
          mirrored={true}
          style={{
            height: "100%",
            width: "100%",
            zIndex: 10,
          }}
        />
      </div>

      <Button
        variant="outline"
        disabled={loading}
        className="my-8"
        onClick={StartStopRecording}
      >
        {isRecording ? (
          <h2 className="text-red-600 flex gap-2">
            <StopCircle /> Stop Recording
          </h2>
        ) : (
          <h2 className="text-primary flex gap-2 items-center">
            <Mic /> Start Recording
          </h2>
        )}
      </Button>

      {error && <p className="text-red-600 mt-4">Error: {error}</p>}
    </div>
  );
};

export default RecordAnsSection;
