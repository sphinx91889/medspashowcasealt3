// ... (previous imports)
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';
import CancellationPolicy from './pages/CancellationPolicy';
import RefundPolicy from './pages/RefundPolicy';
import LiabilityWaiver from './pages/LiabilityWaiver';

function App() {
  // ... (previous code)

  return (
    <Router>
      <div className="relative min-h-screen bg-white">
        {/* ... (previous code) */}
        <Routes>
          {/* ... (previous routes) */}
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
          <Route path="/cancellation-policy" element={<CancellationPolicy />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="/liability-waiver" element={<LiabilityWaiver />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
