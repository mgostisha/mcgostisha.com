export function formatDateForHeader(dateString?: string): string {
    if (!dateString) return dateString;
    return new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'long', day: 'numeric' }).format(new Date(dateString));
}