import Layout from '../components/Layout';

export default function Contact() {
  return (
    <Layout>
      <h1 className="text-4xl font-bold mb-6">Contact Me</h1>
      <p className="mb-6">Have a question or just want to say hi? Feel free to reach out!</p>
      <form className="space-y-4">
        <div>
          <label htmlFor="name" className="block mb-2">Name:</label>
          <input type="text" id="name" name="name" required
                 className="w-full p-2 border border-gray-300 rounded" />
        </div>
        <div>
          <label htmlFor="email" className="block mb-2">Email:</label>
          <input type="email" id="email" name="email" required
                 className="w-full p-2 border border-gray-300 rounded" />
        </div>
        <div>
          <label htmlFor="message" className="block mb-2">Message:</label>
          <textarea id="message" name="message" required
                    className="w-full p-2 border border-gray-300 rounded" rows={4}></textarea>
        </div>
        <button type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Send Message
        </button>
      </form>
    </Layout>
  );
}
