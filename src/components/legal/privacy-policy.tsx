export function PrivacyPolicy() {
  return (
    <div className="space-y-6 text-sm text-foreground">
      <p className="text-muted-foreground">
        This Privacy Policy explains how HUBZone Careers collects, uses, and
        protects your personal information when you use our website and services.
      </p>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">1. Information We Collect</h2>
        <div className="space-y-2 text-muted-foreground">
          <p>
            <strong className="text-foreground">Employers:</strong> Name,
            company name, email, billing address, job posting content.
          </p>
          <p>
            <strong className="text-foreground">Job Seekers:</strong> Name,
            email, resume, application details.
          </p>
          <p>
            <strong className="text-foreground">Payments:</strong> We do not
            store credit card data. All payments are securely processed via
            Stripe.
          </p>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">2. How We Use Information</h2>
        <ul className="list-disc list-inside space-y-1 text-muted-foreground">
          <li>To deliver job posting and application services</li>
          <li>To process payments and provide invoices</li>
          <li>
            To communicate with users via email (account updates, notifications)
          </li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">3. Data Sharing</h2>
        <p className="text-muted-foreground">
          We do not sell or rent your personal information. We may share it
          with:
        </p>
        <ul className="list-disc list-inside space-y-1 text-muted-foreground">
          <li>Stripe (for payment processing)</li>
          <li>Law enforcement if legally required</li>
          <li>
            Third-party tools (e.g., email services, analytics) only under
            strict confidentiality
          </li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">4. Cookies & Tracking</h2>
        <p className="text-muted-foreground">We use cookies for:</p>
        <ul className="list-disc list-inside space-y-1 text-muted-foreground">
          <li>Session management</li>
          <li>Analytics (e.g., Google Analytics)</li>
          <li>Improving user experience</li>
        </ul>
        <p className="text-muted-foreground">
          You can disable cookies in your browser, though this may affect
          functionality.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">5. Data Security</h2>
        <p className="text-muted-foreground">
          We implement industry-standard security protocols to protect your
          data, including encryption and secure access controls.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">6. Your Rights</h2>
        <p className="text-muted-foreground">You may request:</p>
        <ul className="list-disc list-inside space-y-1 text-muted-foreground">
          <li>A copy of your data</li>
          <li>Correction or deletion of your account</li>
          <li>Opt-out from marketing emails</li>
        </ul>
        <p className="text-muted-foreground">
          To request, email:{" "}
          <a
            href="mailto:privacy@hubzonecareers.com"
            className="text-primary hover:underline"
          >
            privacy@hubzonecareers.com
          </a>
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">7. Children&apos;s Privacy</h2>
        <p className="text-muted-foreground">
          HUBZone Careers is not intended for children under 16. We do not
          knowingly collect personal data from minors.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">8. Changes to This Policy</h2>
        <p className="text-muted-foreground">
          We may update this Privacy Policy from time to time. We will notify
          users via email or website notice.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">9. Contact</h2>
        <p className="text-muted-foreground">Questions?</p>
        <p className="text-muted-foreground">
          <a
            href="mailto:privacy@hubzonecareers.com"
            className="text-primary hover:underline"
          >
            privacy@hubzonecareers.com
          </a>
        </p>
      </section>
    </div>
  );
}

