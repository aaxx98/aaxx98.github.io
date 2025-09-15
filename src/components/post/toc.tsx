import React, { useState, useEffect } from 'react';

interface TocItem {
  id: string;
  text: string;
  level: number;
  element: HTMLElement;
}

const CollapsibleTOC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [tocItems, setTocItems] = useState<TocItem[]>([]);

  useEffect(() => {
    const headings = document.querySelectorAll<HTMLHeadingElement>('h1, h2, h3, h4, h5, h6');
    const items: TocItem[] = Array.from(headings).map((heading, index) => {
      if (!heading.id) {
        heading.id = `heading-${index}`;
      }

      return {
        id: heading.id,
        text: heading.textContent || '',
        level: parseInt(heading.tagName.charAt(1), 10),
        element: heading,
      };
    });

    setTocItems(items);
  }, []);

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  if (tocItems.length === 0) {
    return null;
  }

  return (
    <div className="toc-container">
      <button
        className="toc-toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls="toc-content"
      >
        <span className="toc-title">목차</span>
        <span className={`toc-arrow ${isOpen ? 'open' : ''}`}>▼</span>
      </button>

      <div id="toc-content" className={`toc-content ${isOpen ? 'open' : ''}`}>
        <nav className="toc-nav">
          <ul className="toc-list">
            {tocItems.map((item) => (
              <li key={item.id} className={`toc-item level-${item.level} `}>
                <button
                  className="toc-link"
                  onClick={() => scrollToHeading(item.id)}
                  title={item.text}
                >
                  {item.text}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default CollapsibleTOC;
