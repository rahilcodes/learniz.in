/**
 * Refund & Cancellation Policy — /refund
 */
import { renderLegal, CONTACT_BLOCK } from './_legal.js';

export function renderRefundPage() {
  return renderLegal({
    title: 'Refund Policy | Learniz',
    description: 'Refund and Cancellation Policy for Learniz educational software subscriptions. Clear, transparent terms from Tattvatech Edu Solutions LLP.',
    path: '/refund',
    h1: 'Refund & Cancellation Policy',
    sections: [
      ['30-day free pilot period', `<p>Schools enrolled in the Founding Schools Programme receive a completely free 30-day trial pilot. No credit card or upfront deposit is collected. If your institution decides not to continue after the pilot, your account simply concludes with zero fees or charges.</p>`],
      ['Paid institutional subscriptions', `<p>For paid annual institutional licences:</p><ul>
        <li><strong>30-day money-back guarantee:</strong> if a subscribing school is dissatisfied with the platform within the first 30 days of a paid annual subscription, we will issue a 100% refund upon written notice.</li>
        <li><strong>Mid-term cancellations:</strong> after 30 days from annual renewal, subscriptions may be cancelled for the subsequent academic term with pro-rata adjustments according to the formal institutional agreement.</li></ul>`],
      ['Refund processing', `<p>Approved refunds are processed within 7 to 10 working days via the original method of payment (NEFT, RTGS or corporate bank transfer) to the institution's verified account.</p>`],
      ['Contact for billing and refunds', `<p>To request a refund or discuss subscription adjustments, please contact our billing department at:</p>${CONTACT_BLOCK('Billing &amp; Institutional Accounts')}`]
    ]
  });
}
