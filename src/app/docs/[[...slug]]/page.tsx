const DocsPage = ({ params }: { params: { slug: string[] } }) => {
  if (params.slug?.length === 2) {
    return (
      <h1>
        {params.slug[0]} and {params.slug[1]}
      </h1>
    );
  } else if (params.slug?.length === 1) {
    return <h1>only {params.slug[0]} here</h1>;
  } else if (params.slug?.length > 0) {
    return (
      <ul>
        {params.slug.map((path) => (
          <li key={`k-${path}`}>{path}</li>
        ))}
      </ul>
    );
  } else {
    return <h1>Doc home page</h1>;
  }
};

export default DocsPage;
