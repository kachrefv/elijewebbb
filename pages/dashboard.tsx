import Head from 'next/head';
import Link from 'next/link';

const DashboardPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex flex-col items-center justify-center p-4">
      <Head>
        <title>Dashboard - Elijeweb</title>
        <meta name="description" content="User Dashboard for Elijeweb" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center text-center">
        <h1 className="text-5xl font-bold mb-4">
          Welcome to your Dashboard!
        </h1>
        <p className="text-xl mb-8">
          This is a placeholder for your personalized content.
        </p>
        <Link href="/" className="text-blue-500 hover:underline">
          Go back to Home
        </Link>
      </main>
    </div>
  );
};

export default DashboardPage;
