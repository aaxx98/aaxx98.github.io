import React, { useEffect, useRef, useState } from 'react';

function Comment() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [status, setStatus] = useState<'pending' | 'success' | 'failed'>('pending');

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    el.innerHTML = '';

    const script = document.createElement('script');
    script.src = 'https://utteranc.es/client.js';
    script.async = true;
    script.crossOrigin = 'anonymous';
    script.setAttribute('repo', 'aaxx98/aaxx98.github.io');
    script.setAttribute('issue-term', 'pathname');
    script.setAttribute('theme', 'github-dark');

    script.onload = () => setStatus('success');
    script.onerror = () => setStatus('failed');

    el.appendChild(script);

    return () => {
      el.innerHTML = '';
    };
  }, []);

  return (
    <section className="comment-container" aria-label="댓글">
      {status === 'failed' && (
        <div className="comment-status error">
          댓글을 불러오는 중 오류가 발생했습니다. 새로고침 후 다시 시도해주세요.
        </div>
      )}
      {status === 'pending' && <div className="comment-status pending">댓글을 불러오는 중...</div>}
      <div ref={containerRef} className="utterances-container" />
    </section>
  );
}

export default Comment;
