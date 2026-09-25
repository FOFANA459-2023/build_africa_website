import { FaEnvelope, FaMobileAlt, FaUniversity } from 'react-icons/fa';
import usePageTitle from '../hooks/usePageTitle';
import { site } from '../data/site';
import { bankTransfer, mobileMoney } from '../data/donate';
import { photos } from '../data/gallery';
import PageHeader from '../components/ui/PageHeader';
import Button from '../components/ui/Button';
import CopyButton from '../components/ui/CopyButton';
import ImpactStats from '../components/sections/ImpactStats';

const methods = [
  {
    title: 'Bank Transfer Details',
    icon: FaUniversity,
    accent: 'bg-brand-green text-white',
    bar: 'bg-brand-green',
    rows: bankTransfer,
    note: 'After transferring, kindly email us the transaction details for confirmation. Thank you for your support!',
  },
  {
    title: 'Mobile Money Transfer Details',
    icon: FaMobileAlt,
    accent: 'bg-brand-amber text-ink',
    bar: 'bg-brand-amber',
    rows: mobileMoney,
    note: 'After completing your mobile money transfer, kindly email the transaction details for confirmation. Your support is greatly appreciated!',
  },
];

const donationMailto = `mailto:${site.donationEmail}?subject=${encodeURIComponent('Donation details')}`;

const Donate = () => {
  usePageTitle('Donate');

  return (
    <>
      <PageHeader
        eyebrow="Support our mission"
        title="Donate to Build Africa"
        subtitle="We appreciate your generosity! You can donate via bank transfer or mobile money using the details below."
        image={photos.participantPitch}
      />

      <section className="section">
        <div className="container-page">
          <div className="grid gap-6 lg:grid-cols-2">
            {methods.map(({ title, icon: Icon, accent, bar, rows, note }) => (
              <article key={title} className="overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-black/5">
                <div className={`h-1.5 ${bar}`} aria-hidden="true" />
                <div className="p-8 md:p-10">
                  <div className="flex items-center gap-4">
                    <span className={`flex h-12 w-12 items-center justify-center rounded-2xl ${accent}`}>
                      <Icon size={20} />
                    </span>
                    <h2 className="text-xl font-extrabold md:text-2xl">{title}</h2>
                  </div>
                  <dl className="mt-8 divide-y divide-neutral-100">
                    {rows.map((row) => (
                      <div key={row.label} className="flex items-center justify-between gap-4 py-3">
                        <dt className="text-sm text-neutral-500">{row.label}</dt>
                        <dd className="flex items-center gap-1 text-right font-semibold text-ink">
                          {row.value}
                          {row.copy && <CopyButton value={row.value} label={row.label} />}
                        </dd>
                      </div>
                    ))}
                  </dl>
                  <p className="mt-6 rounded-2xl bg-neutral-50 p-4 text-sm leading-relaxed text-neutral-600">
                    {note} Email:{' '}
                    <a href={donationMailto} className="font-semibold text-brand-red hover:underline">
                      {site.donationEmail}
                    </a>
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 flex flex-col items-center gap-4 rounded-3xl bg-ink p-10 text-center">
            <h2 className="text-2xl font-extrabold text-white">Made a donation?</h2>
            <p className="max-w-xl text-neutral-300">
              Send us your transaction details so we can confirm your gift and say thank you.
            </p>
            <Button to={donationMailto} className="mt-2">
              <FaEnvelope /> Email Us Your Donation Details
            </Button>
          </div>
        </div>
      </section>

      <ImpactStats />
    </>
  );
};

export default Donate;
