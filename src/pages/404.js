import React from 'react';

import Layout from '../layouts/Layout';
import SEO from '../components/SEO/SEO';

const NotFoundPage = () => (
    <Layout>
        <SEO title="404: Not found" />
        <h1>NOT FOUND</h1>
        <p>We are still in the process of transferring content to our new website. Some pages might be missing. We beg your patience during this process. Thank you!</p>
    </Layout>

);

export default NotFoundPage;
