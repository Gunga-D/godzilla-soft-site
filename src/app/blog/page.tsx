"use client"

import "./style.css"
import {useEffect, useState} from 'react';
import {Topic, topicsApi} from "./topicsApi";
import Link from "next/link";

export default function TopicsPage() {
    const [topics, setTopics] = useState<Topic[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchTopics = async () => {
            try {
                setLoading(true);
                const data: Topic[] = await topicsApi.getTopics({
                    limit: 10,
                    offset: 0
                });
                setTopics(data);
            } catch (err) {
                setError('Failed to load topics');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };
        fetchTopics();
    }, []);

    return (
        <div className="BlogMainContainer">
            <h1 className="BlogMainTitle">Наш блог</h1>

            {loading ? (
                <div className="flex flex-col items-center py-20">
                    <div className="loading-spinner"></div>
                    <p className="text-muted mt-4">Загрузка статей...</p>
                </div>
            ) : error ? (
                <div className="error-message">
                    <p>{error}</p>
                    <button
                        onClick={() => window.location.reload()}
                        className="mt-4 px-4 py-2 bg-primary rounded hover:bg-primary-dark transition"
                    >
                        Попробовать снова
                    </button>
                </div>
            ) : topics.length === 0 ? (
                <div className="text-center py-20">
                    <p className="text-muted">Пока нет статей в блоге</p>
                </div>
            ) : (
                <div className="BlogMainListOfBlogsContainer">
                    {topics.map(topic => (
                        <TopicCard key={topic.id} topic={topic}/>
                    ))}
                </div>
            )}
        </div>
    );
}

function TopicCard({ topic }: { topic: Topic }) {
    const pathToTopic = `/blog/${topic.title}?id=${topic.id}`
    return (
        <Link href={pathToTopic} className="BlogMainListItem">
            {topic.preview_url && (
                <img
                    src={topic.preview_url}
                    alt={topic.title}
                    className="BlogMainListItemImage"
                    loading="lazy"
                />
            )}
            <div className="BlogMainListItemDescription">
                <p className="BlogMainListItemDate">
                    {new Date(topic.created_at).toLocaleString("ru-RU", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                    })}
                </p>
                <h2 className="BlogMainListItemTitle">
                    {topic.title}
                </h2>
            </div>
        </Link>
    );
}
