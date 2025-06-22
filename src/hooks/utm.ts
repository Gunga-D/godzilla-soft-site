export function addUTM(href: string, utmSource: any): string {
    const [mainPart, hash = ''] = href.split('#');
    const [path, queryString = ''] = mainPart.split('?');

    const params = new URLSearchParams(queryString);
    if (utmSource) {
        params.set('utm_source', utmSource);
    }

    const newQuery = params.toString();
    const querySection = newQuery ? `?${newQuery}` : '';
    const hashSection = hash ? `#${hash}` : '';

    return `${path}${querySection}${hashSection}`;
}