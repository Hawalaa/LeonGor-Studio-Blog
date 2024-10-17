import Image from 'next/image';
import Layout from './components/Layout';

export default function Home() {
  return (
    <Layout>
      <h1 className="text-4xl font-bold mb-4">Welcome to LeonGor Studio Blog</h1>
      <div className="mb-6">
        <Image
          src="/images/leongor-pic.jpg"
          alt="LeonGor"
          width={600}
          height={400}
          className="rounded-lg shadow-md"
        />
      </div>
      <p className="text-xl">Here you&apos;ll find the latest posts about LeonGor&apos;s life.</p>
    </Layout>
  );
}
