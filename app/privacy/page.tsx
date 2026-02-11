import Link from "next/link";
import { ArrowLeft, Shield } from "lucide-react";

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8 transition-colors"
      >
        <ArrowLeft className="w-5 h-5" />
        Back to Home
      </Link>

      <div className="text-center mb-12">
        <div className="flex justify-center mb-4">
          <Shield className="w-12 h-12 text-red-600" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Privacy Policy
        </h1>
        <p className="text-gray-600">
          Last updated: February 2026
        </p>
      </div>

      <div className="space-y-8">
        <section className="bg-white rounded-2xl shadow-lg border-2 border-gray-200 p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Overview</h2>
          <p className="text-gray-700 leading-relaxed">
            LearnDari is committed to protecting your privacy. This Privacy Policy
            explains how we collect, use, and safeguard your information when you
            use our website. By using LearnDari, you agree to the practices
            described in this policy.
          </p>
        </section>

        <section className="bg-white rounded-2xl shadow-lg border-2 border-gray-200 p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Information We Collect
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Account Information
              </h3>
              <p>
                When you create an account, we collect your name, email address,
                and authentication credentials. This information is used to
                provide you with a personalized learning experience and track your
                progress.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Learning Progress Data
              </h3>
              <p>
                We collect data about your learning activity, including vocabulary
                progress, quiz scores, and level completion. This helps us tailor
                your experience and track your achievements.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Usage Information
              </h3>
              <p>
                We may collect general usage data such as pages visited, time
                spent on the site, and device information to improve our platform
                and user experience.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-2xl shadow-lg border-2 border-gray-200 p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            How We Use Your Information
          </h2>
          <ul className="space-y-3 text-gray-700 leading-relaxed">
            <li className="flex items-start gap-3">
              <span className="text-red-600 font-bold mt-1">-</span>
              <span>Provide and maintain your account and learning progress</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-600 font-bold mt-1">-</span>
              <span>Personalize your learning experience</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-600 font-bold mt-1">-</span>
              <span>Improve our platform, content, and features</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-600 font-bold mt-1">-</span>
              <span>Communicate with you about updates or respond to feedback</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-600 font-bold mt-1">-</span>
              <span>Ensure the security and integrity of our platform</span>
            </li>
          </ul>
        </section>

        <section className="bg-white rounded-2xl shadow-lg border-2 border-gray-200 p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Data Storage & Security
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Your data is stored securely using industry-standard practices. We use
            encrypted connections and trusted third-party services to protect your
            information. While no method of transmission over the internet is 100%
            secure, we take reasonable measures to safeguard your data.
          </p>
        </section>

        <section className="bg-white rounded-2xl shadow-lg border-2 border-gray-200 p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Third-Party Services
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We may use third-party services for authentication, analytics, and
            hosting. These services have their own privacy policies and may
            collect information as described in their respective policies. We
            do not sell your personal information to third parties.
          </p>
        </section>

        <section className="bg-white rounded-2xl shadow-lg border-2 border-gray-200 p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Your Rights
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>You have the right to:</p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-red-600 font-bold mt-1">-</span>
                <span>Access the personal data we hold about you</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-600 font-bold mt-1">-</span>
                <span>Request correction of inaccurate information</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-600 font-bold mt-1">-</span>
                <span>Request deletion of your account and associated data</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-600 font-bold mt-1">-</span>
                <span>Opt out of non-essential communications</span>
              </li>
            </ul>
          </div>
        </section>

        <section className="bg-white rounded-2xl shadow-lg border-2 border-gray-200 p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Changes to This Policy
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We may update this Privacy Policy from time to time. Any changes will
            be posted on this page with an updated revision date. We encourage you
            to review this policy periodically.
          </p>
        </section>

        <section className="bg-white rounded-2xl shadow-lg border-2 border-gray-200 p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-gray-700 leading-relaxed">
            If you have any questions about this Privacy Policy, please{" "}
            <Link
              href="/more/feedback"
              className="text-red-600 hover:text-red-700 underline"
            >
              contact us
            </Link>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
