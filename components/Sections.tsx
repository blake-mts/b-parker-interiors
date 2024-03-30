import { Typography } from '@mui/material';
import { Fragment, ReactNode } from 'react';

interface SectionsProps {
    data: {
        title: JSX.Element;
        body: JSX.Element;
    }[];
}

export default function Sections({ data }: SectionsProps) {
    return data.map((section, index) => (
        <Fragment key={index}>
            <Typography variant="h3" sx={{ mb: 1 }}>
                {section.title}
            </Typography>
            <Typography sx={{ mb: 4 }}>{section.body}</Typography>
        </Fragment>
    ));
}
