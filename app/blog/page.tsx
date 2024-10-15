import Layout from '../components/Layout';

export default function Blog() {
  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-4">Blog Posts</h1>
      <ul>
        <li className="mb-4">
          <h2 className="text-2xl font-semibold">Sample Blog Post 1</h2>
          <p>Short description of the blog post...</p>
        </li>
        <li className="mb-4">
          <h2 className="text-2xl font-semibold">Sample Blog Post 2</h2>
          <p>Short description of the blog post...</p>
        </li>
        <li className="mb-4">
          <h2 className="text-2xl font-semibold">Sample Blog Post 3</h2>
          <p>Short description of the blog post...</p>
        </li>
      </ul>
    </Layout>
  );
}
