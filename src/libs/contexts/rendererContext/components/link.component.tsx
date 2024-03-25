import { forwardRef } from 'react';

export const DefaultLink = forwardRef<
    HTMLAnchorElement,
    React.AnchorHTMLAttributes<HTMLAnchorElement>
>((props, ref) => {
    return <a {...props} ref={ref} target="_blank" rel="noopener noreferrer" />;
});
DefaultLink.displayName = 'DefaultLink';
