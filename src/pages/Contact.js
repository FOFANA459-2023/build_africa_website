import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import usePageTitle from '../hooks/usePageTitle';
import { site, socialLinks } from '../data/site';
import { photos } from '../data/gallery';
import PageHeader from '../components/ui/PageHeader';
import Button from '../components/ui/Button';

const fields = [
  { name: 'name', label: 'Name', type: 'text', placeholder: 'Your Name', autoComplete: 'name' },
  { name: 'email', label: 'Email', type: 'email', placeholder: 'Your Email', autoComplete: 'email' },
  { name: 'subject', label: 'Subject', type: 'text', placeholder: 'Subject' },
];

const inputClass =
  'w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-ink placeholder:text-neutral-400 transition focus:border-brand-amber focus:bg-white focus:outline-none focus:ring-4 focus:ring-brand-amber/20';

const Contact = () => {
  usePageTitle('Contact');
  const [searchParams] = useSearchParams();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: searchParams.get('subject') || '',
    message: '',
  });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  // No backend yet: hand the message to the visitor's email app.
  const handleSubmit = (e) => {
    e.preventDefault();
    const body = `${formData.message}\n\n— ${formData.name} (${formData.email})`;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Contact Us"
        subtitle="Questions, partnerships or volunteering — we'd love to hear from you."
        image={photos.participantsListening}
      />

      <section className="section">
        <div className="container-page grid gap-8 lg:grid-cols-5">
          <aside className="relative overflow-hidden rounded-3xl bg-ink p-8 text-neutral-300 md:p-10 lg:col-span-2">
            <h2 className="text-2xl font-extrabold text-white">Get in touch</h2>
            <p className="mt-3 leading-relaxed">
              Reach out about our programs, volunteering, partnerships or donations.
            </p>
            <ul className="mt-8 space-y-6">
              <li className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-brand-red text-white">
                  <FaEnvelope />
                </span>
                <div>
                  <p className="text-sm text-neutral-400">Email</p>
                  <a href={`mailto:${site.email}`} className="break-all font-semibold text-white hover:text-brand-amber">
                    {site.email}
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-brand-green text-white">
                  <FaMapMarkerAlt />
                </span>
                <div>
                  <p className="text-sm text-neutral-400">Based in</p>
                  <p className="font-semibold text-white">{site.location}</p>
                </div>
              </li>
            </ul>
            <div className="mt-10 border-t border-white/10 pt-6">
              <p className="text-sm text-neutral-400">Follow us</p>
              <ul className="mt-3 flex gap-3">
                {socialLinks.map(({ label, href, icon: Icon }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-brand-amber hover:text-ink"
                    >
                      <Icon size={16} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="pattern-triangles absolute inset-x-0 bottom-0 h-3" aria-hidden="true" />
          </aside>

          <form
            onSubmit={handleSubmit}
            className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-black/5 md:p-10 lg:col-span-3"
          >
            <h2 className="text-2xl font-extrabold">Send us a message</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {fields.map((field) => (
                <div key={field.name} className={field.name === 'subject' ? 'sm:col-span-2' : ''}>
                  <label htmlFor={field.name} className="mb-2 block text-sm font-bold text-ink">
                    {field.label}
                  </label>
                  <input
                    id={field.name}
                    name={field.name}
                    type={field.type}
                    value={formData[field.name]}
                    onChange={handleChange}
                    placeholder={field.placeholder}
                    autoComplete={field.autoComplete}
                    className={inputClass}
                    required
                  />
                </div>
              ))}
              <div className="sm:col-span-2">
                <label htmlFor="message" className="mb-2 block text-sm font-bold text-ink">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  rows="6"
                  className={inputClass}
                  required
                />
              </div>
            </div>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-neutral-500">Sending opens your email app with the message ready to go.</p>
              <Button type="submit" variant="secondary" className="shrink-0">
                <FaPaperPlane size={13} /> Send Message
              </Button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
