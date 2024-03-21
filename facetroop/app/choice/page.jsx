import Link from 'next/link';

const ChoicePage = () => {
  return (
    <div>
      <h1>Choose your role</h1>
      <Link href="/user-form" passHref>
        <div>Continue as User/Voter</div>
      </Link>
      <Link href="/influencer-form" passHref>
        <div>Continue as Influencer</div>
      </Link>
      <Link href="/brand-form" passHref>
        <div>Continue as Brand</div>
      </Link>
    </div>
  );
}

export default ChoicePage;
