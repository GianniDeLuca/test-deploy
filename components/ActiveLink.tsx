import Link from 'next/link';
import { useRouter } from 'next/router';
import { CSSProperties, FC } from 'react';

const styles: CSSProperties = {
  textDecoration: 'underline',
};

interface Props {
  text: string;
  href: string;
}

export const ActiveLink: FC<Props> = ({ text, href }) => {
  const { asPath } = useRouter();

  return (
    <Link href={href}>
      <a style={asPath === href ? styles : undefined}>{text}</a>
    </Link>
  );
};
