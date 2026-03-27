import Navbar from "@/components/Navbar";
import { outfit } from '@/common/fonts';
import Head from "next/head";

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy - Quran Digital</title>
        <meta name="description" content="Privacy Policy untuk aplikasi Quran Digital" />
        <meta name="robots" content="index, follow" />
      </Head>
      <main className="bg-base-200 min-h-screen">
        <Navbar />
        <div className={`${outfit.className} container mx-auto px-4 py-8 max-w-4xl`}>
          <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
          
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Last updated: March 27, 2026
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
              <p>
                Quran Digital ("we", "our", or "us") is committed to protecting your privacy. 
                This Privacy Policy explains how we handle information when you use our Progressive Web Application.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
              <p>
                Quran Digital is designed with privacy in mind. We do NOT collect, store, or transmit any personal information to our servers.
              </p>
              <h3 className="text-xl font-semibold mt-4 mb-2">2.1 Local Storage Only</h3>
              <p>The following data is stored ONLY on your device using browser localStorage:</p>
              <ul className="list-disc pl-6 mb-4">
                <li><strong>Bookmarks:</strong> Surah and ayat numbers you bookmark for quick access</li>
                <li><strong>Last Read:</strong> Your last reading position (surah and ayat number)</li>
                <li><strong>Timestamps:</strong> Date and time when bookmarks or last read were saved</li>
              </ul>
              <p className="text-sm italic">
                This data never leaves your device and is not accessible to us or any third parties.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">3. How We Use Information</h2>
              <p>
                The locally stored data is used solely to:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Remember your bookmarked ayat</li>
                <li>Allow you to continue reading from where you left off</li>
                <li>Provide a personalized reading experience</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">4. Third-Party Services</h2>
              <h3 className="text-xl font-semibold mt-4 mb-2">4.1 Quran API</h3>
              <p>
                We use an external API (quran-api.jstnlt.my.id) to fetch Quran text and translations. 
                This API may log standard HTTP request information (IP address, user agent) as per their privacy policy.
              </p>
              <h3 className="text-xl font-semibold mt-4 mb-2">4.2 Hosting Provider</h3>
              <p>
                Our application is hosted on Vercel. They may collect standard web analytics 
                (page views, geographic location) as per their privacy policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">5. Data Security</h2>
              <p>
                Since all user data is stored locally on your device:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>We cannot access your bookmarks or reading history</li>
                <li>Data is protected by your device's security measures</li>
                <li>Clearing browser data will delete all stored information</li>
                <li>No data is transmitted to our servers</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">6. Cookies</h2>
              <p>
                We do NOT use cookies for tracking or analytics. The application uses localStorage 
                (not cookies) to store your bookmarks and reading progress locally.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">7. Children's Privacy</h2>
              <p>
                Our application is suitable for all ages. We do not knowingly collect any personal 
                information from children or adults, as all data is stored locally on the user's device.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">8. Your Rights</h2>
              <p>You have full control over your data:</p>
              <ul className="list-disc pl-6 mb-4">
                <li><strong>Access:</strong> View your bookmarks and last read position in the app</li>
                <li><strong>Delete:</strong> Remove individual bookmarks or clear all data by clearing browser storage</li>
                <li><strong>Export:</strong> Data is stored in browser localStorage and can be accessed via browser developer tools</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">9. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. Changes will be posted on this page 
                with an updated "Last updated" date.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">10. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <p className="mt-2">
                <strong>Email:</strong> <a href="mailto:support@andifarel.biz.id" className="text-primary hover:underline">support@andifarel.biz.id</a><br />
                <strong>Website:</strong> <a href="https://quran.andifarel.biz.id" className="text-primary hover:underline">https://quran.andifarel.biz.id</a>
              </p>
            </section>

            <section className="mb-8 p-4 bg-primary/10 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">Summary</h2>
              <p className="font-semibold">
                TL;DR: We don't collect, store, or share any of your personal data. 
                Everything (bookmarks, last read) is stored locally on your device only.
              </p>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
