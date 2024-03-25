import * as React from 'react';

import { CheckIcon } from '@/components/icons/CheckIcon';

export const Checkbox: React.FC<{
    isChecked: boolean;
}> = ({ isChecked }) => {
    let content = null;

    if (isChecked) {
        content = (
            <div className="unibook-property-checkbox-checked">
                <CheckIcon />
            </div>
        );
    } else {
        content = <div className="unibook-property-checkbox-unchecked" />;
    }

    return (
        <span className="unibook-property unibook-property-checkbox">
            {content}
        </span>
    );
};
