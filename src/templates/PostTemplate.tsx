import React from  'react';
import Layout from '../components/layout';
import { ITemplateProps } from '../interface';
import Utterances from './Utterances';

type IPostTemplateProps = ITemplateProps<{
    title: string;
    date: Date;
    html: string;
}>;

const PostTemplate: React.FC<IPostTemplateProps> = React.memo(props => {
    const { title, date, html } = props.pageContext;
    return (
        <Layout>
            <h2>{title}</h2>
            <h4>{date}</h4>
            <hr />
            <div dangerouslySetInnerHTML={{__html: html}}/>
            <Utterances repo="melonpan0130/melonpan0130.github.io" />
        </Layout>
    );
});

PostTemplate.displayName = 'PostTemplate';

export default PostTemplate;