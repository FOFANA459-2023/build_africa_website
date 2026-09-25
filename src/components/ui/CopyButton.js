import { useState } from 'react';
import { FaCheck, FaCopy } from 'react-icons/fa';

const CopyButton = ({ value, label }) => {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard can be unavailable (e.g. insecure context); the value stays selectable.
    }
  };

  return (
    <button
      type="button"
      onClick={copy}
      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-neutral-400 transition hover:bg-neutral-100 hover:text-ink"
      aria-label={copied ? `${label} copied` : `Copy ${label}`}
      title={copied ? 'Copied' : 'Copy'}
    >
      {copied ? <FaCheck className="text-brand-green" size={12} /> : <FaCopy size={12} />}
    </button>
  );
};

export default CopyButton;
