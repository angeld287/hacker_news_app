export default interface IHit {
    created_at: string;
    title: string;
    url: string;
    author: string;
    points: string;
    story_text: string;
    comment_text: string;
    num_comments: number;
    story_id: number;
    story_title: string;
    story_url: string;
    parent_id: number;
    created_at_i: number;
    _tags: string[];
    objectID: string;
    _highlightResult: IHighlightResult,
    query?: string;

}

interface IHighlightResult {
    author: ICommun;
    comment_text: ICommentText;
    story_title: ICommun;
    story_url: ICommun;
}

interface ICommentText extends ICommun {
    fullyHighlighted: boolean;
}

interface ICommun {
    value: string;
    matchLevel: string;
    matchedWords: string[];
}