import { NextSeo } from "next-seo";

export default function PrivacyPolicy() {
  return (
    <>
      <NextSeo title="Your Lists" />
      <div className="my-12 lg:my-16 mx-auto space-y-6 max-w-[750px] md:text-lg text-white">
        <p>
          <strong>Lists</strong> is committed to providing quality services to
          you and this policy outlines our ongoing obligations to you in respect
          of how we manage your Personal Information.
        </p>
        <p>
          We have adopted the Australian Privacy Principles (APPs) contained in
          the Privacy Act 1988 (Cth) (the Privacy Act). The NPPs govern the way
          in which we collect, use, disclose, store, secure and dispose of your
          Personal Information.
        </p>
        <p>
          A copy of the Australian Privacy Principles may be obtained from the
          website of The Office of the Australian Information Commissioner at
          www.aoic.gov.au
        </p>
        <h2 className="!mt-10 text-2xl md:text-3xl font-bold text-primary">
          What is Personal Information and why do we collect it?
        </h2>
        <p>
          Personal Information is information or an opinion that identifies an
          individual. Examples of Personal Information we collect include:
          names, addresses, email addresses, phone and facsimile numbers.
        </p>
        <p>
          The only personal information we collect is your Facebook User Id so
          we can link each list to a specific user.
        </p>
        <h2 className="!mt-10 text-2xl md:text-3xl font-bold text-primary">
          Sensitive Information
        </h2>
        <p>
          Sensitive information is defined in the Privacy Act to include
          information or opinion about such things as an individual's racial or
          ethnic origin, political opinions, membership of a political
          association, religious or philosophical beliefs, membership of a trade
          union or other professional body, criminal record or health
          information.
        </p>
        <p>We will never ask you for any sensitive information.</p>
        <h2 className="!mt-10 text-2xl md:text-3xl font-bold text-primary">
          Disclosure of Personal Information
        </h2>
        <p>
          Your Personal Information may be disclosed in a number of
          circumstances including the following:
        </p>
        <ul>
          <li>Where required or authorised by law.</li>
        </ul>
        <h2 className="!mt-10 text-2xl md:text-3xl font-bold text-primary">
          Security of Personal Information
        </h2>
        <p>
          Your Personal Information is stored in a manner that reasonably
          protects it from misuse and loss and from unauthorized access,
          modification or disclosure.
        </p>
        <p>
          When your Personal Information is no longer needed for the purpose for
          which it was obtained, we will take reasonable steps to destroy or
          permanently de-identify your Personal Information. However, most of
          the Personal Information is or will be stored in client files which
          will be kept by us for a minimum of 7 years.
        </p>
        <h2 className="!mt-10 text-2xl md:text-3xl font-bold text-primary">
          Access to your Personal Information
        </h2>
        <p>
          You may access the Personal Information we hold about you and to
          update and/or correct it, subject to certain exceptions. If you wish
          to access your Personal Information, please contact us in writing.
        </p>
        <p>
          <strong>Lists</strong> will not charge any fee for your access
          request, but may charge an administrative fee for providing a copy of
          your Personal Information.
        </p>
        <p>
          In order to protect your Personal Information we may require
          identification from you before releasing the requested information.
        </p>
        <h2 className="!mt-10 text-2xl md:text-3xl font-bold text-primary">
          Maintaining the Quality of your Personal Information
        </h2>
        <p>
          It is an important to us that your Personal Information is up to date.
          We will take reasonable steps to make sure that your Personal
          Information is accurate, complete and up-to-date. If you find that the
          information we have is not up to date or is inaccurate, please advise
          us as soon as practicable so we can update our records and ensure we
          can continue to provide quality services to you.
        </p>
        <h2 className="!mt-10 text-2xl md:text-3xl font-bold text-primary">
          Request to erase Personal Information
        </h2>
        <p>
          While logged in you can delete any trace of your use of this app by
          clicking the 'Delete Your Data' link at the very bottom of the page
          and following the instructions.
        </p>
        <h2 className="!mt-10 text-2xl md:text-3xl font-bold text-primary">
          Policy Updates
        </h2>
        <p>
          This Policy may change from time to time and is available on our
          website.
        </p>
      </div>
    </>
  );
}

PrivacyPolicy.public = true;
