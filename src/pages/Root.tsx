import { Box } from '@mui/material'
import { Navigate } from 'react-router-dom'
import { Fragment } from 'react/jsx-runtime'
import { useAuth } from '../hooks/use-auth'

const Root = () => {
  const { authed } = useAuth()

  return (
    <Fragment>
      {authed && <Navigate to='/view' replace={true} />}

      <Box sx={{ textAlign: 'center' }}>
        <h1>Welcome to Resume Maker</h1>
        <h2>Please login to continue</h2>

        <Box sx={{ textAlign: 'center' }}>
          <p>
            A resume maker is an interactive online tool or software that offers different resume
            templates and allows users to create a resume quickly and easily.
          </p>
          Here are some key features of resume maker:
          <ol>
            <li>
              1. User-Friendly Interface: Resume builders are designed to be easy to use, even for
              individuals with minimal technical skills. They guide users through the process step
              by step.
            </li>
            <li>
              2. Templates: Resume makers provide a variety of professionally designed templates.
              Users can choose a template that suits their industry or personal style.
            </li>
            <li>
              3. Content Suggestions: Instead of starting from scratch, users can add pre-rewritten
              content from Certified Professional Resume Writers. These suggestions cover various
              job
            </li>
            <li>
              roles and industries. 4. Customization: Users can customize the content, layout, and
              design of their resume. They can add or remove sections, tweak the wording, and adjust
              formatting.
            </li>
            <li>
              5. ATS Optimization: Many resume builders offer ATS (Applicant Tracking
              System)-optimized layouts. These ensure that the resume is easily parsed by automated
            </li>
            <li>
              systems used by employers. 6. Score and Feedback: After creating a resume, the builder
              may score it against other candidates applying for similar jobs. Users receive
              detailed tips on how to improve their resume.
            </li>
            <li>
              7. Multiple Formats: Resume makers allow users to download their resumes in various
              formats, such as PDF, DOC, or TXT.
            </li>
          </ol>
        </Box>
      </Box>
    </Fragment>
  )
}

export default Root
