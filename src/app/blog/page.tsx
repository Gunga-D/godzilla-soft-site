"use client"

import "./style.css"
import React, {useEffect, useState} from 'react';
import {Topic, topicsApi} from "./topicsApi";
import Link from "next/link";
import SelfWrittenBlogs, {SelfWrittenBlogMetadata, SelfWrittenBlogComponent} from "./self-written-blogs";

type CombinedItem =
    | { type: 'api'; data: Topic }
    | { type: 'self'; component: SelfWrittenBlogComponent; metadata: SelfWrittenBlogMetadata };

export default function TopicsPage() {
    const [apiTopics, setApiTopics] = useState<Topic[]>([]);
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
                setApiTopics(data);
            } catch (err) {
                setError('Failed to load topics');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };
        fetchTopics();
    }, []);

    const selfWrittenBlogs = SelfWrittenBlogs();

    const allItems: CombinedItem[] = React.useMemo(() => {
        const selfWrittenItems = selfWrittenBlogs.map(blog => ({
            type: 'self' as const,
            component: blog,
            metadata: blog.metadata
        }));

        const apiItems = apiTopics.map(topic => ({
            type: 'api' as const,
            data: topic
        }));

        return [...selfWrittenItems, ...apiItems].sort((a, b) => {
            const dateA = a.type === 'self' ? a.metadata.created_at : a.data.created_at;
            const dateB = b.type === 'self' ? b.metadata.created_at : b.data.created_at;
            return new Date(dateB).getTime() - new Date(dateA).getTime();
        });
    }, [apiTopics, selfWrittenBlogs]);

    return (
        <div className="BlogMainContainer">
            <h1 className="BlogMainTitle">Наш блог</h1>

            {loading && (
                <div className="flex flex-col items-center py-20">
                    <div className="loading-spinner"></div>
                    <p className="text-muted mt-4">Загрузка статей...</p>
                </div>
            )}

            <div className="BlogMainListOfBlogsContainer">
                {allItems.map(item => (
                    item.type === 'self' ? (
                        <item.component key={item.metadata.id} />
                    ) : (
                        <TopicCard key={item.data.id} topic={item.data} />
                    )
                ))}
            </div>

            {error && (
                <div className="error-message">
                    <p>{error} (Showing self-written articles only)</p>
                    <button onClick={() => window.location.reload()}>
                        Попробовать снова
                    </button>
                </div>
            )}
        </div>
    );
}

function TopicCard({topic}: { topic: Topic }) {
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
