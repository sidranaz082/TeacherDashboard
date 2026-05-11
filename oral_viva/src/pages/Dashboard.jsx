import Sidebar from '../components/Sidebar';
import Overview from '../components/Overview';
import NewSession from '../components/NewSession';
import LiveMonitoring from '../components/LiveMonitoring';
import Analytics from '../components/Analytics';
import History from '../components/History';
import { useApp } from '../context/AppContext';

export default function Dashboard({ onLogout }) {
  const { currentPage } = useApp();

  const sections = {
    overview: Overview,
    'new-session': NewSession,
    'live-monitoring': LiveMonitoring,
    analytics: Analytics,
    history: History,
  };

  const Section = sections[currentPage] || Overview;

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar onLogout={onLogout} />
      <main className="flex-1 ml-[260px] p-8 overflow-x-hidden">
        <Section />
      </main>
    </div>
  );
}
