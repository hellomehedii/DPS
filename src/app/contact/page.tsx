import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { contactAddress, contactEmail, contactPhoneNumbers } from "@/data/site";

type ContactLine = {
  label: string;
  href?: string;
};

type ContactItem = {
  icon: ({ size }: { size?: number }) => React.ReactNode;
  title: string;
  lines: ContactLine[];
};

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact DPS Project Solutions for architectural design, engineering consultancy, construction solutions, project management, and turnkey project support.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact | DPS Project Solutions",
    description:
      "Get in touch with DPS Project Solutions for project planning, design, construction, sourcing, and delivery support.",
    url: "/contact",
  },
};

const contactItems: ContactItem[] = [
  {
    icon: Phone,
    title: "Phone Number",
    lines: contactPhoneNumbers.map((number) => ({
      label: number,
      href: `tel:${number}`,
    })),
  },
  {
    icon: Mail,
    title: "Email",
    lines: [{ label: contactEmail, href: `mailto:${contactEmail}` }],
  },
  {
    icon: MapPin,
    title: "Address",
    lines: [{ label: contactAddress }],
  },
];

const socialLinks = [
  { title: "Facebook", href: "https://www.facebook.com/DOSProjectSolutions", icon: FacebookIcon },
  { title: "Instagram", href: "https://www.instagram.com/dos_project_solutions", icon: InstagramIcon },
  { title: "LinkedIn", href: "https://www.linkedin.com/company/dos-project-solutions/", icon: LinkedInIcon },
  // { title: "YouTube", href: "https://www.youtube.com/", icon: YouTubeIcon },
];

export default function ContactPage() {
  return (
    <PageShell active="contact" surface="soft">
      <main className="page-frame contact-page">
     <section
  className="contact-heading"
  style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }}
>
  <h1 className="cent">Contact Us</h1>
</section>

        <section className="contact-card">
          <div className="contact-info">
            <h2>
              Need more information?
              <br />
              Get in touch with us
            </h2>
            <p>
              Speak with our team about planning, designing, sourcing, and
              delivering your next project.
            </p>

            <div className="contact-list">
              {contactItems.map(({ icon: Icon, title, lines }) => (
                <div className="contact-item" key={title}>
                  <span>
                    <Icon size={24} />
                  </span>
                  <div>
                    <h3>{title}</h3>
                    {lines.map(({ label, href }, index) =>
                      href ? (
                        <a
                          className="contact-item-link"
                          href={href}
                          key={`${title}-${index}`}
                        >
                          {label}
                        </a>
                      ) : (
                        <p key={`${title}-${index}`}>{label}</p>
                      ),
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="social-links">
              <h3>Follow us</h3>
              <div className="social-grid">
                {socialLinks.map(({ title, href, icon: Icon }) => (
                  <a
                    key={title}
                    className="social-item"
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={title}
                  >
                    <span>
                      <Icon size={18} />
                    </span>
                    <span>{title}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14599.595646957583!2d90.4219536!3d23.822193449999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c70025dc8e03%3A0xc575c374545b28b7!2sDOS%20Assets%20Development%20Ltd.!5e0!3m2!1sen!2sbd!4v1790586647551!5m2!1sen!2sbd"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          />

          {/* <form className="contact-form">
            <h2>Send Message</h2>
            <p>Please fill out the form below with your details and message to contact with us</p>
            <div className="form-grid">
              <input aria-label="First name" name="firstName" placeholder="First Name" />
              <input aria-label="Last name" name="lastName" placeholder="Last Name" />
            </div>
            <input aria-label="Email or phone number" name="contactInfo" placeholder="Email or Phone Number" />
            <textarea aria-label="Message" name="message" placeholder="Write Message Here..." />
            <button className="contact-submit" type="submit">
              Send Message
            </button>
          </form> */}
        </section>
      </main>
    </PageShell>
  );
}

function Phone({ size = 24 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7A2 2 0 0 1 22 16.9Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Mail({ size = 24 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="3"
        y="5"
        width="18"
        height="14"
        rx="2"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="m3 7 9 7 9-7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MapPin({ size = 24 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

function FacebookIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M13.5 22v-8h2.7l.4-3h-3.1V7.5c0-.9.3-1.5 1.6-1.5H17V3.1c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3V11H8v3h2.3v8h3.2Z" />
    </svg>
  );
}

function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
      <circle cx="17.2" cy="6.8" r="1.2" fill="currentColor" stroke="currentColor" strokeWidth="0.5" />
    </svg>
  );
}

function LinkedInIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M6.94 8.46a1.94 1.94 0 1 1 0-3.88 1.94 1.94 0 0 1 0 3.88ZM5.5 9.8h2.88v9.57H5.5V9.8Zm4.33 0h2.76v1.32h.04c.39-.73 1.33-1.5 2.73-1.5 2.92 0 3.45 1.92 3.45 4.4v6.35h-2.88v-5.95c0-1.42-.03-3.24-1.97-3.24-1.97 0-2.27 1.54-2.27 3.12v5.99H9.83V9.8Z" />
    </svg>
  );
}

function YouTubeIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M21.6 7.5a2.8 2.8 0 0 0-2-2C18 5.1 12 5.1 12 5.1s-6 0-7.6.4a2.8 2.8 0 0 0-2 2A29.4 29.4 0 0 0 2 12a29.4 29.4 0 0 0 .4 4.5 2.8 2.8 0 0 0 2 2c1.6.4 7.6.4 7.6.4s6 0 7.6-.4a2.8 2.8 0 0 0 2-2A29.4 29.4 0 0 0 22 12a29.4 29.4 0 0 0-.4-4.5ZM10 15.5v-7l6 3.5-6 3.5Z" />
    </svg>
  );
}
