'use client';
import { useEffect, useRef, useState } from 'react';

type ExpandableTextProps = {
    text: string;
    maxLength: number;
    btnColor: string;
}

const ExpandableText = (props: ExpandableTextProps) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [needsExpansion, setNeedsExpansion] = useState(false);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (contentRef.current) {
          const textContent = contentRef.current.textContent || '';
          setNeedsExpansion(textContent.length > props.maxLength);
        }
      }, [props.text, props.maxLength]);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };
    
    const createMarkup = (html: string) => {
        return { __html: html };
    };

    return (
        <div>
            <div
                ref={contentRef}
                dangerouslySetInnerHTML={createMarkup(props.text)}
                className="expandable-text__content"
                style={{
                overflow: 'hidden',
                display: '-webkit-box',
                WebkitLineClamp: !isExpanded && needsExpansion ? 3 : 'none',
                WebkitBoxOrient: 'vertical',
                }}
            />
            {needsExpansion && (
                <button
                onClick={toggleExpand}
                style={{color: props.btnColor, border: 0, fontSize: '16px', backgroundColor: 'transparent', fontWeight: 600}}
                aria-expanded={isExpanded}
                >
                {isExpanded ? 'Свернуть ▲' : 'Подробнее ▼'}
                </button>
            )}
            {/* <div dangerouslySetInnerHTML={{__html: isExpanded ? props.fullText : props.shortText}}></div>
            <button onClick={() => setIsExpanded(!isExpanded)} style={{color: props.btnColor, border: 0, fontSize: '16px', backgroundColor: 'transparent', fontWeight: 600}}>
                {isExpanded ? 'Свернуть ▲' : 'Подробнее ▼'}
            </button> */}
        </div>
    );
}

export default ExpandableText;