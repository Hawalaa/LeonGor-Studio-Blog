import Layout from '../components/Layout';

export default function About() {
  return (
    <Layout>
      <h1 className="text-4xl font-bold mb-6">About LeonGor Studio Blog</h1>
      <div className="space-y-4">
        <p>
          Welcome to LeonGor Studio Blog! This is a personal blog where I share my thoughts, experiences, and insights about life, technology, and creativity.
        </p>
        <p>
          As a passionate [your profession/hobby], I love to explore new ideas and share them with my readers. This blog serves as a platform for me to document my journey and connect with like-minded individuals.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-3">What you&apos;ll find here:</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Personal stories and reflections</li>
          <li>Tips and tutorials on [relevant topics]</li>
          <li>Reviews of books, tools, and technologies I use</li>
          <li>Occasional musings on [other interests]</li>
        </ul>
        <p className="mt-6">
          Feel free to explore the blog, leave comments, and connect with me. I&apos;m always excited to hear from my readers and engage in meaningful discussions.
        </p>
        <p>
          Thank you for visiting, and I hope you enjoy your time here at LeonGor Studio Blog!
        </p>
      </div>
    </Layout>
  );
}
