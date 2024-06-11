import Link from "next/link";

export default async function Navigation() {
  return (
    <nav className="z-10 text-xl">
      <ul className="flex gap-16 items-center">
        <li>
          <Link
            href="/interview"
            className="hover:bg-primary-100 transition-colors"
          >
            AI면접
          </Link>
        </li>
        <li>
          <Link
            href="/introduction"
            className="hover:bg-primary-100 transition-colors"
          >
            자기소개서
          </Link>
        </li>
        <li>
          <Link href="/job" className="hover:bg-primary-100 transition-colors">
            취업
          </Link>
        </li>
        <li>
          <Link
            href="/community"
            className="hover:bg-primary-100 transition-colors"
          >
            커뮤니티
          </Link>
        </li>

        {/* <li>
          {session?.user?.image ? (
            <Link
              href="/job"
              className="hover:text-accent-400 transition-colors flex items-center gap-4"
            >
              <img
                className="h-8 rounded-full"
                src={session.user.image}
                alt={session.user.name}
                referrerPolicy="no-referrer"
              />
              <span> Guest area</span>
            </Link>
          ) : (
            <Link
              href="/account"
              className="hover:text-accent-400 transition-colors"
            >
              Guest area
            </Link>
          )}
        </li> */}
      </ul>
    </nav>
  );
}
