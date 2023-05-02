// Return how many children an article has
export function getChildren(data, articleId) {
    const element = data.find(article => article.tmp_ordre === articleId);
    if (!element) {
        return [];
    }
    const children = data.filter(article => article.tmp_parent === articleId);
    const flattenedChildren = children.flatMap((child) => getChildren(data, child.tmp_ordre));
    return [element, ...flattenedChildren];
}
