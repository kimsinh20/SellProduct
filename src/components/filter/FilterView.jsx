import React from 'react'
import { PropTypes } from 'prop-types';
import { Chip } from '@mui/material';
import { styled } from '@mui/material/styles';

const MyChip = styled(Chip)({
    marginLeft: '20px',
});

const FilterView = ({ filter = {}, onChange = null }) => {
    const FilterViews = [
        {
            id: 1,
            getLabel: (filter) => filter.keyword,
            onClick: false,
            isRemove: (filter) => false,
            isVisible: (filter) => Object.keys(filter).includes("keyword"),
            onRemove: (filter) => {
                const newFilter = {
                    ...filter
                }
                delete newFilter["keyword"];
                return newFilter;
            }
        },
        {
            id: 2,
            getLabel: (filter) => `min : ${filter.min} - max : ${filter.max}`,
            onClick: false,
            isRemove: (filter) => false,
            isVisible: (filter) =>
                Object.keys(filter).includes("min") && Object.keys(filter).includes("max"),
            onRemove: (filter) => {
                const newFilter = {
                    ...filter,
                }
                delete newFilter["min"];
                delete newFilter["max"];
                return newFilter;
            }
        }
    ];
    return (
        <div>
            {
                FilterViews.filter(x=>x.isVisible(filter)).map((e) =>
                (
                    <MyChip
                        key={e.id}

                        label={e.getLabel(filter)}
                        color="primary"
                        clickable={e.onClick}
                        onDelete={e.isRemove ? () => {
                            if (!onChange) return;
                            const newFilter = e.onRemove(filter);
                            onChange(newFilter);
                        } : null}
                    ></MyChip>
                )
                )
            }

        </div>
    )
}

export default FilterView
FilterView.prototype = {
    filter: PropTypes.object,
    onChange: PropTypes.func
};