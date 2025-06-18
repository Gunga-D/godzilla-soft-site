export type Topic = {
    id: number;
    preview_url: string;
    title: string;
    created_at: string;
    updated_at: string;
    topic_content: string
};

export type FetchTopicsDTO = {
    id: number;
    preview_url: string;
    title: string;
    created_at: string;
    updated_at: string;
}

export type FetchTopicsResponse = {
    status: string,
    data: FetchTopicsDTO[]
}

export type GetTopicResponse = {
    status: string,
    data: Topic
}