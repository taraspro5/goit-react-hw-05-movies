import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div>
      Sorry, we can`t find this page. <Link to="/">Click</Link> to return home
      page.
    </div>
  );
}
