import Link from "next/link";
import { ArrowLeft, FileText } from "lucide-react";

export default function TermsOfServicePage() {
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
          <FileText className="w-12 h-12 text-red-600" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Terms of Service
        </h1>
        <p className="text-gray-600">
          Last updated: February 2026
        </p>
      </div>

      <div className="space-y-8">
        <section className="bg-white rounded-2xl shadow-lg border-2 border-gray-200 p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Agreement to Terms
          </h2>
          <p className="text-gray-700 leading-relaxed">
            By accessing or using LearnDari, you agree to be bound by these Terms
            of Service. If you do not agree to these terms, please do not use our
            platform. These terms apply to all visitors, users, and others who
            access LearnDari.
          </p>
        </section>

        <section className="bg-white rounded-2xl shadow-lg border-2 border-gray-200 p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Use of Our Platform
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              LearnDari provides free Dari language learning resources including
              vocabulary lessons, reading materials, quizzes, and cultural
              content. You may use our platform for personal, non-commercial
              educational purposes.
            </p>
            <p>When using LearnDari, you agree to:</p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-red-600 font-bold mt-1">-</span>
                <span>Provide accurate information when creating an account</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-600 font-bold mt-1">-</span>
                <span>
                  Keep your account credentials secure and not share them with
                  others
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-600 font-bold mt-1">-</span>
                <span>
                  Use the platform in a respectful and lawful manner
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-600 font-bold mt-1">-</span>
                <span>
                  Not attempt to disrupt, harm, or gain unauthorized access to
                  our systems
                </span>
              </li>
            </ul>
          </div>
        </section>

        <section className="bg-white rounded-2xl shadow-lg border-2 border-gray-200 p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            User Accounts
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Some features of LearnDari require you to create an account. You are
            responsible for maintaining the confidentiality of your account and
            for all activities that occur under your account. You agree to notify
            us immediately of any unauthorized use of your account. We reserve the
            right to suspend or terminate accounts that violate these terms.
          </p>
        </section>

        <section className="bg-white rounded-2xl shadow-lg border-2 border-gray-200 p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Intellectual Property
          </h2>
          <p className="text-gray-700 leading-relaxed">
            All content on LearnDari, including text, audio, graphics, logos, and
            software, is the property of LearnDari or its content creators and is
            protected by copyright and intellectual property laws. You may not
            reproduce, distribute, modify, or create derivative works from our
            content without prior written permission.
          </p>
        </section>

        <section className="bg-white rounded-2xl shadow-lg border-2 border-gray-200 p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Content Accuracy
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We strive to provide accurate and up-to-date Dari language content.
            However, language learning is inherently complex and may involve
            regional variations. We do not guarantee that all content is free from
            errors. If you notice any inaccuracies, we encourage you to{" "}
            <Link
              href="/more/feedback"
              className="text-red-600 hover:text-red-700 underline"
            >
              let us know
            </Link>
            .
          </p>
        </section>

        <section className="bg-white rounded-2xl shadow-lg border-2 border-gray-200 p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Limitation of Liability
          </h2>
          <p className="text-gray-700 leading-relaxed">
            LearnDari is provided &quot;as is&quot; and &quot;as available&quot;
            without warranties of any kind, either express or implied. We do not
            guarantee that the platform will be uninterrupted, secure, or
            error-free. To the fullest extent permitted by law, LearnDari shall
            not be liable for any indirect, incidental, or consequential damages
            arising from your use of the platform.
          </p>
        </section>

        <section className="bg-white rounded-2xl shadow-lg border-2 border-gray-200 p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Termination
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We reserve the right to suspend or terminate your access to LearnDari
            at our discretion, without notice, for conduct that we believe
            violates these terms or is harmful to other users or the platform. You
            may also delete your account at any time.
          </p>
        </section>

        <section className="bg-white rounded-2xl shadow-lg border-2 border-gray-200 p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Changes to These Terms
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We may update these Terms of Service from time to time. Changes will
            be posted on this page with an updated revision date. Continued use of
            LearnDari after changes are posted constitutes your acceptance of the
            revised terms.
          </p>
        </section>

        <section className="bg-white rounded-2xl shadow-lg border-2 border-gray-200 p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-gray-700 leading-relaxed">
            If you have any questions about these Terms of Service, please{" "}
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
