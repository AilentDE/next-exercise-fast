import { notFound } from "next/navigation";

const ReviewDetailPage = ({
  params,
}: {
  params: { productId: string; reviewId: string };
}) => {
  if (parseInt(params.productId) > 1000) {
    notFound();
  }
  return (
    <h1>
      Review {params.reviewId} for product {params.productId}
    </h1>
  );
};

export default ReviewDetailPage;
