
import React from 'react';
import cx from 'classnames';
type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'default'|'outline'|'ghost', size?: 'sm'|'md'|'lg' };
export default function Button({ className, variant='default', size='md', ...rest }: Props){
  const base = 'inline-flex items-center justify-center rounded-2xl font-medium transition px-4 py-2 shadow-sm';
  const variants = {
    default: 'bg-sky-600 hover:bg-sky-700 text-white',
    outline: 'border border-sky-200 text-sky-700 hover:bg-sky-50',
    ghost: 'text-slate-700 hover:bg-slate-100'
  };
  const sizes = { sm:'text-sm px-3 py-1.5', md:'text-sm', lg:'text-base px-5 py-3'};
  return <button className={cx(base, variants[variant], sizes[size], className)} {...rest} />;
}
