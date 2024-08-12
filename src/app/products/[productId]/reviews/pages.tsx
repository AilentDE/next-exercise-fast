// it's not work

const ProductDetailReviewPage = ({
  params,
}: {
  params: { productId: string };
}) => {
  return <h1>detail with {params.productId}</h1>;
};

export default ProductDetailReviewPage;
