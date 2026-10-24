/**
 * Privacy Policy — /privacy
 */
import { renderLegal, CONTACT_BLOCK } from './_legal.js';

export function renderPrivacyPage() {
  return renderLegal({
    title: 'Privacy Policy | Learniz',
    description: 'Learniz privacy policy. Details on student data protection, India DPDP Act compliance, cloud security, and confidentiality.',
    path: '/privacy',
    h1: 'Privacy Policy',
    sections: [
      ['Overview and commitment to student privacy', `<p>Learniz ("we", "us" or "our"), operated by Tattvatech Edu Solutions LLP, provides an experiential learning and assessment platform to schools, teachers, students and parents across India. We recognise that student academic records and personal details are sensitive. We adhere strictly to the Digital Personal Data Protection Act (DPDP Act 2023) of India and applicable child data privacy standards.</p>`],
      ['Information we collect', `<p>We collect only the minimum information necessary to deliver educational functionality:</p><ul>
        <li><strong>School and faculty information:</strong> institution name, city, official email address, administrator name and mobile phone number provided during onboarding or demo booking.</li>
        <li><strong>Student profile information:</strong> student name, roll number or identifier, class and section provided by the partner institution. We do not collect student home addresses, biometric data or financial details.</li>
        <li><strong>Academic interaction data:</strong> simulation interactions, question responses, test scores, timestamps and question-level completion rates needed to generate performance analytics.</li></ul>`],
      ['How we use information', `<p>Information collected is used exclusively for educational purposes:</p><ul>
        <li>Delivering live interactive experiments and question paper drafting.</li>
        <li>Generating diagnostic analytics for teachers and institutional principals.</li>
        <li>Communicating academic calendars and student progress to authorised parents.</li>
        <li>Coordinating scheduled demonstrations and pilot onboarding with school administrators.</li></ul>
        <p>We never sell, rent, monetise or license student or institutional data to any third-party advertisers or commercial brokers.</p>`],
      ['Cloud infrastructure and data sovereignty', `<p>All databases, application servers and file storage are hosted within data centres situated physically within the Republic of India (Amazon Web Services Asia Pacific Mumbai / Hyderabad regions). All data transfers are encrypted in transit using industry-standard TLS 1.3 and at rest using AES-256 encryption.</p>`],
      ['Cookies and web analytics', `<p>Our public website uses minimal, strictly essential storage to remember user preferences (such as your light or dark theme choice) and measure aggregated website performance. We do not use intrusive cross-site tracking cookies.</p>`],
      ['Contacting the Data Protection Officer', `<p>If you have questions regarding this Privacy Policy or wish to request data verification or deletion on behalf of your institution, please contact our Data Protection Officer at:</p>${CONTACT_BLOCK('Attn: Privacy &amp; Data Protection Officer')}`]
    ]
  });
}
