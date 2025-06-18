"use client"

import {ReadonlyURLSearchParams, useSearchParams} from "next/navigation";
import {toNumber} from "lodash";
import ReactMarkdown from 'react-markdown';
import './game-topic-styles.css';
import {Topic, topicsApi} from "../topicsApi";
import {useEffect, useState} from "react";

const emptyTopic: Topic = {
    id: 0,
    topic_content: "No content",
    title: "Empty title",
    created_at: Date.now().toString(),
    updated_at: Date.now().toString(),
    preview_url: ""
}

export default function Page() {
    const params: ReadonlyURLSearchParams = useSearchParams()
    const [topic, setTopic] = useState<Topic>(emptyTopic)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const topicId = toNumber(params.get("id"))

        if (!topicId) {
            setLoading(false)
            return
        }

        setLoading(true)
        topicsApi.getTopic(topicId)
            .then((value: Topic) => {
                setTopic(value || emptyTopic)
                setError(null)
            })
            .catch((err) => {
                setError("Failed to load topic")
                setTopic(emptyTopic)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [params]) // Add all dependencies here

    if (loading) {
        return <div className="GameTopic">Loading...</div>
    }

    if (error) {
        return <div className="GameTopic">`Error:${error}`</div>
    }

    return (
        <div className="GameTopic">
            <div className="GameTopicTitle">
                {topic.title}
            </div>
            <ReactMarkdown>
                {topic.topic_content}
            </ReactMarkdown>
        </div>
    )
}