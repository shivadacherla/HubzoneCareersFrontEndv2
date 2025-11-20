export function TermsOfService() {
  return (
    <div className="space-y-6 text-sm text-foreground">
      <p className="text-muted-foreground">
        Welcome to HUBZone Careers, a job posting and recruitment platform for
        businesses and job seekers in the United States. By accessing or using
        our website (https://www.hubzonecareers.com), you agree to the
        following Terms of Use.
      </p>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">1. Use of the Site</h2>
        <ul className="list-disc list-inside space-y-1 text-muted-foreground">
          <li>You agree to use the site only for lawful purposes.</li>
          <li>
            Employers may post jobs, manage listings, and view applicant data.
          </li>
          <li>
            Job seekers may view, apply for, and track job applications.
          </li>
          <li>
            You must not post false, misleading, or inappropriate content.
          </li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">2. Account Responsibility</h2>
        <ul className="list-disc list-inside space-y-1 text-muted-foreground">
          <li>
            You are responsible for maintaining the confidentiality of your
            account login credentials.
          </li>
          <li>
            You agree not to share your login account access with others or
            impersonate another user.
          </li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">3. Payments and Refunds</h2>
        <ul className="list-disc list-inside space-y-1 text-muted-foreground">
          <li>
            Payments for job postings and subscriptions are processed securely
            via Stripe.
          </li>
          <li>
            All payments are final. Refunds are issued only in the case of
            duplicate charges or platform errors.
          </li>
          <li>
            Subscription plans renew automatically unless canceled prior to the
            billing date.
          </li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">4. Intellectual Property</h2>
        <p className="text-muted-foreground">
          All content, logos, and platform technology are the intellectual
          property of HUBZone Careers and may not be copied or reused without
          permission.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">5. Termination</h2>
        <p className="text-muted-foreground">
          We reserve the right to suspend or terminate accounts that violate
          these Terms or misuse the platform.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">6. Disclaimer</h2>
        <ul className="list-disc list-inside space-y-1 text-muted-foreground">
          <li>
            HUBZone Careers does not guarantee job placement or hiring outcomes.
          </li>
          <li>
            The platform is provided &quot;as is&quot; without warranty of any
            kind.
          </li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">7. Governing Law</h2>
        <p className="text-muted-foreground">
          These Terms are governed by the laws of the State of Virginia, without
          regard to its conflict of law provisions.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">8. Contact</h2>
        <p className="text-muted-foreground">
          For legal questions or support, please contact:
        </p>
        <p className="text-muted-foreground">
          <a
            href="mailto:support@hubzonecareers.com"
            className="text-primary hover:underline"
          >
            support@hubzonecareers.com
          </a>
        </p>
      </section>
    </div>
  );
}

