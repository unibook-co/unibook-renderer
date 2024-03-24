import { forwardRef } from 'react';

export const DefaultPageLink = forwardRef<
    HTMLAnchorElement,
    React.AnchorHTMLAttributes<HTMLAnchorElement>
>((props, ref) => {
    return <a ref={ref} {...props} />;
});
DefaultPageLink.displayName = 'DefaultPageLink';
