import React from 'react'

const PrivacyPolicy = () => {
  return (
    <div className="bg-gray-100 pt-24 pb-12 px-4">
      <div className="max-w-6xl mx-auto flex">

        {/* SIDE DIV */}
        <div className="hidden md:block w-2 bg-yellow-500 rounded-l-lg"></div>

        {/* MAIN CONTENT */}
        <div className="bg-white px-6 py-10 w-full shadow-md rounded-r-lg text-gray-800 leading-relaxed">

          {/* Title */}
          <h1 className="text-3xl font-bold text-yellow-500 mb-2">
            Privacy Policy
          </h1>
          <hr className="border-yellow-500 mb-6" />

          {/* 1. Introduction */}
          <h2 className="text-xl font-semibold text-yellow-500 mb-2">
            1. Introduction
          </h2>
          <p className="mb-4">
            Welcome to Aznanish Dispatching Services (“Company,” “we,” “our,” or “us”).
            Your privacy is important to us. This Privacy Policy explains how we
            collect, use, disclose, and protect your information when you use our
            services, including our SMS notifications and website.
          </p>
          <p className="mb-6">
            By using our services, you agree to the terms outlined in this Privacy
            Policy. If you do not agree, please refrain from using our services.
          </p>

          {/* 2. Information We Collect */}
          <h2 className="text-xl font-semibold text-yellow-500 mb-2">
            2. Information We Collect
          </h2>

          <p className="font-medium mb-2">A. Personal Information</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Name</li>
            <li>Phone number</li>
            <li>Email address</li>
            <li>Business details (company name, MC/DOT number)</li>
            <li>Payment and billing information (if applicable)</li>
          </ul>

          <p className="font-medium mb-2">B. Non-Personal Information</p>
          <ul className="list-disc pl-6 mb-6">
            <li>IP address</li>
            <li>Browser type and version</li>
            <li>Usage data from our website and SMS services</li>
          </ul>

          {/* 3. How We Use Your Information */}
          <h2 className="text-xl font-semibold text-yellow-500 mb-2">
            3. How We Use Your Information
          </h2>
          <ul className="list-disc pl-6 mb-6">
            <li>To provide dispatching services and communicate with drivers</li>
            <li>To send SMS notifications about load details and updates</li>
            <li>To comply with legal and regulatory requirements</li>
            <li>To improve our website and services</li>
            <li>To ensure security and prevent fraud</li>
          </ul>

          {/* 4. SMS Communications */}
          <h2 className="text-xl font-semibold text-yellow-500 mb-2">
            4. SMS Communications
          </h2>
          <p className="mb-4">
            By opting in, you consent to receive SMS messages from Aznanish
            Dispatching Services. These messages may include operational updates,
            load confirmations, appointment reminders, and other service-related
            notifications.
          </p>
          <p className="mb-6">
            <strong>Opt-Out Option:</strong> You may opt out at any time by replying
            <strong> STOP</strong> to any message.
          </p>

          {/* 5. Information Sharing */}
          <h2 className="text-xl font-semibold text-yellow-500 mb-2">
            5. Information Sharing
          </h2>
          <ul className="list-disc pl-6 mb-6">
            <li>With brokers, shippers, or carriers to coordinate dispatch services</li>
            <li>
              With service providers who help us operate our business (e.g., SMS
              platforms, payment processors)
            </li>
            <li>To comply with legal obligations or law enforcement requests</li>
          </ul>

          {/* 6. Data Security */}
          <h2 className="text-xl font-semibold text-yellow-500 mb-2">
            6. Data Security
          </h2>
          <p className="mb-6">
            We take reasonable security measures to protect your personal
            information. However, no data transmission over the internet or SMS
            network is 100% secure.
          </p>

          {/* 7. Your Rights */}
          <h2 className="text-xl font-semibold text-yellow-500 mb-2">
            7. Your Rights
          </h2>
          <ul className="list-disc pl-6 mb-6">
            <li>Access, update, or delete your personal information</li>
            <li>Opt out of SMS notifications at any time</li>
            <li>Request a copy of the information we hold about you</li>
          </ul>

          {/* 8. Changes */}
          <h2 className="text-xl font-semibold text-yellow-500 mb-2">
            8. Changes to This Privacy Policy
          </h2>
          <p className="mb-6">
            We may update this Privacy Policy from time to time. Any changes will
            be posted on this page with an updated “Effective Date.”
          </p>

          {/* 9. Contact */}
          <h2 className="text-xl font-semibold text-yellow-500 mb-2">
            9. Contact Us
          </h2>
          <p>
            Aznanish Dispatching Services<br />
            34 N Franklin Ave Ste 687 #2318<br />
            Pinedale, WY 82941<br />
            Email: <span className="text-blue-500">info@aznanishdispatchingservices.com</span><br />
            Phone: 307-218-2940
          </p>

        </div>
      </div>
    </div>
  );
};





export default PrivacyPolicy