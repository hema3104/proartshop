import { Helmet } from 'react-helmet-async';

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: 'Welcome To ProArtShop',
  description: 'We have the art gallery view and we sell the arts of greatest artists',
  keywords: 'arts, buy our unique arts,and art gallery view',
};

export default Meta;
