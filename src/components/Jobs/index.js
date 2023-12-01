import './index.css'

import Header from '../Header'

import AllJobsSection from '../AllJobsSection'

const Jobs = () => (
  <>
    <Header />
    <div className="jobs-container">
      <div className="jobs-section">
        <AllJobsSection />
      </div>
    </div>
  </>
)

export default Jobs
