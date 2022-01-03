import { Typography, Checkbox, Radio, Button } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
// import { isAsyncFunction } from "util/types";
import { getQuestionByLang, Question } from "../json/Questions";
import { InitUser } from "./Home";

export interface Ans {
  id: number;
  options: string[];
}

const Exam = () => {
  const location = useLocation();
  const history = useHistory();
  const user = location.state as InitUser;
  const [ansList, setAnsList] = useState<Ans[]>([]);
  const [currentQ, setCurrentQ] = useState<number>(0);
  const questionList: Question[] = getQuestionByLang(user.lang);
  const question: Question = questionList[currentQ];

  const handleOptionPick = (option: string, checked?: boolean) => {
    const find = ansList.find((ans) => ans.id === question.id);
    if (find) {
      if (question.ans.length > 1) {
        const _ansList = ansList.map((ans) => {
          if (ans.id === question.id) {
            if (checked) {
              ans = { id: question.id, options: [...ans.options, option] };
            } else {
              let _options = ans.options.filter((op) => op !== option);
              ans = { id: question.id, options: _options };
            }
          }
          return ans;
        });
        setAnsList(_ansList);
      } else {
        const _ansList = ansList.map((ans) => {
          if (ans.id === question.id) {
            ans = { id: question.id, options: [option] };
          }
          return ans;
        });
        setAnsList(_ansList);
      }
    } else {
      const _ans = { id: question.id, options: [option] };
      setAnsList([...ansList, _ans]);
    }
  };

  const isAns = (option: string) => {
    const ans = ansList.find((ans) => ans.id === question.id);

    if (!ans) return false;

    return !!ans.options.find((op) => op === option);
  };

  const handleResult = () => {
    let count: number = 0;
    ansList.forEach((ans) => {
      for (const q of questionList) {
        if (ans.id === q.id) {
          if (JSON.stringify(ans.options) === JSON.stringify(q.ans)) {
            count++;
          }
          break;
        }
      }
    });
    history.push("/result", { ansCount: count, count: questionList.length });
  };

  const isQuestionAns = (questionId: number) => {
    const ans = ansList.find((ans) => ans.id === questionId);

    if (!ans) return false;

    return ans.options.length > 0;
  };

  return (
    <div data-testid="exam">
      <Typography variant="h3" component="h3" sx={{ my: "10px" }}>
        Language : {user.lang}
      </Typography>
      {getQuestionByLang(user.lang).map((q, index) => (
        <Typography
          key={index}
          sx={{
            display: "inline-block",
            width: "40px",
            height: "40px",
            lineHeight: "40px",
            background: `${isQuestionAns(question.id) ? "red" : "grey"}`,
            margin: "5px",
            borderRadius: "50%",
            cursor: "pointer",
          }}
          onClick={() => setCurrentQ(index)}
        >
          {index + 1}
        </Typography>
      ))}
      <Typography variant="h6" component="h6">
        {currentQ + 1} {question.title}
      </Typography>
      {question.options.map((option, index) => (
        <Box key={index}>
          <label key={index}>
            {question.ans.length > 1 ? (
              <input
                type="checkbox"
                name="checkbox"
                id=""
                checked={isAns(option)}
                onChange={(e) => handleOptionPick(option, e.target.checked)}
              />
            ) : (
              <input
                type="radio"
                name="radio"
                id=""
                checked={isAns(option)}
                onChange={(e) => handleOptionPick(option, e.target.checked)}
              />
            )}
            {option}
          </label>
        </Box>
      ))}
      <div>
        {currentQ === questionList.length - 1 && (
          <Button variant="contained" sx={{ my: 5 }} onClick={handleResult}>
            submit
          </Button>
        )}
      </div>
    </div>
  );
};

export default Exam;
