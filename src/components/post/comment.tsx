import React, { useEffect, useRef, useState } from "react";

const Comment = () => {
  const commentsEl = useRef<HTMLDivElement | null>(null);
  const [status, setStatus] = useState<"pending" | "success" | "failed">(
    "pending"
  );

  useEffect(() => {
    const existingScript = commentsEl.current?.querySelector("script");
    if (existingScript) {
      existingScript.remove();
    }

    const scriptEl = document.createElement("script");
    scriptEl.onload = () => setStatus("success");
    scriptEl.onerror = () => setStatus("failed");
    scriptEl.async = true;
    scriptEl.src = "https://utteranc.es/client.js";
    scriptEl.setAttribute("repo", "aaxx98/aaxx98.github.io");
    scriptEl.setAttribute("issue-term", "pathname");
    scriptEl.setAttribute("theme", "github-light");
    scriptEl.setAttribute("crossorigin", "anonymous");

    if (commentsEl.current) {
      commentsEl.current.appendChild(scriptEl);
    }

    // cleanup function
    return () => {
      if (commentsEl.current) {
        const script = commentsEl.current.querySelector("script");
        if (script) {
          script.remove();
        }
      }
    };
  }, []);

  return (
    <div className="w-full max-w-[850px] mx-auto px-8 mt-8">
      {status === "failed" && (
        <div className="text-red-500 text-center p-4">
          댓글을 불러오는 중 오류가 발생했습니다. 새로고침 후 다시 시도해주세요.
        </div>
      )}
      {status === "pending" && (
        <div className="text-gray-500 text-center p-4">
          댓글을 불러오는 중...
        </div>
      )}
      <div
        ref={commentsEl}
        className="utterances-container"
        style={{
          minHeight: "200px",
          width: "100%",
          display: "block",
        }}
      />
    </div>
  );
};

export default Comment;
